import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In — Soult Digital Vault",
  description: "Access your secure digital vault. Sign in to manage your family's most important documents and assets.",
};

export default function LoginPage() {
  return <LoginForm />;
}
