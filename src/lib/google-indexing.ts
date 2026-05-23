/**
 * Google Indexing API — submits URLs for immediate crawling.
 *
 * Setup (one-time):
 * 1. Go to https://console.cloud.google.com/ → create a project
 * 2. Enable "Web Search Indexing API"
 * 3. Create a Service Account → generate a JSON key
 * 4. In Google Search Console → Settings → Users and permissions → Add the
 *    service account email as an Owner
 * 5. Add these to .env.local:
 *      GOOGLE_INDEXING_CLIENT_EMAIL=your-sa@project.iam.gserviceaccount.com
 *      GOOGLE_INDEXING_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
 */

const BASE_URL = "https://www.soultdigital.com";

async function getAccessToken(): Promise<string | null> {
  const clientEmail = process.env.GOOGLE_INDEXING_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_INDEXING_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) return null;

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  // Build JWT manually (no external lib needed)
  const header = btoa(JSON.stringify({ alg: "RS256", typ: "JWT" }))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const body = btoa(JSON.stringify(payload))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const unsigned = `${header}.${body}`;

  // Sign with private key using Web Crypto
  const keyData = privateKey
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");

  const binaryKey = Uint8Array.from(atob(keyData), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureBuffer = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(unsigned)
  );

  const signature = btoa(String.fromCharCode(...new Uint8Array(signatureBuffer)))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const jwt = `${unsigned}.${signature}`;

  // Exchange JWT for access token
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) return null;
  const json = await res.json();
  return json.access_token ?? null;
}

/**
 * Submit a single URL to Google for immediate indexing.
 * Silently no-ops if credentials are not configured.
 */
export async function submitUrlToGoogle(path: string): Promise<void> {
  try {
    const token = await getAccessToken();
    if (!token) return; // credentials not set up yet — silent no-op

    const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;

    await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });
  } catch {
    // Never throw — indexing submission should never break the main flow
  }
}

/**
 * Submit multiple URLs in sequence.
 */
export async function submitUrlsToGoogle(paths: string[]): Promise<void> {
  for (const path of paths) {
    await submitUrlToGoogle(path);
  }
}
