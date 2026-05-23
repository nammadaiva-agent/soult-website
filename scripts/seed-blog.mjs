import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vdhjjxznjbbnawtrajfw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkaGpqeHpuamJibmF3dHJhamZ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTI5MDQ4NCwiZXhwIjoyMDk0ODY2NDg0fQ.8BnnUu3FL9CDw8lKzMA6PphN0dBifUbqeSYe_ek9dGQ",
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const now = new Date();
function daysAgo(n) {
  const d = new Date(now);
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

const ARTICLES = [
  {
    title: "How to Organise Your Assets for Your Family in India",
    slug: "how-to-organise-assets-for-family-india",
    excerpt: "Most Indian families have no idea where to find their loved one's financial documents after a sudden loss. Here's a complete, practical guide to getting everything organised — before it's too late.",
    author: "Soult Digital",
    tags: ["Estate Planning", "Family", "Getting Started"],
    published_at: daysAgo(1),
    content: `## Why Most Indian Families Are Unprepared

When someone passes away unexpectedly, their family typically spends weeks — sometimes months — piecing together a financial picture. Bank accounts go undiscovered. Insurance policies lapse unclaimed. Properties sit in legal limbo. This is not a rare situation. It is the overwhelming norm for Indian families.

The good news: organising your assets takes far less effort than dealing with the chaos of not having done it.

## What "Organising Your Assets" Actually Means

It does not mean writing a will (though you should). It means creating a single, clear reference point that tells your family:

- What you own
- Where it is held
- Who the nominee is
- What they need to do next

This reference point — whether a physical folder or a secure digital vault — is the single most valuable thing you can leave your family.

## Step 1: List Everything You Own

Start with a blank sheet or a spreadsheet. Document every financial asset:

**Bank Accounts**
Include the bank name, branch, account number, account type, and whether a nominee is registered.

**Fixed Deposits and Recurring Deposits**
Many families lose FDs because they don't know they exist. List all FDs with the bank name, amount, maturity date, and nominee.

**Provident Fund (EPF/PPF/VPF)**
Your UAN number, the PF office or trust details, and nominee information.

**Insurance Policies**
Life insurance, health insurance, term insurance — policy number, insurer, sum assured, premium due date, and nominee.

**Mutual Funds and Stocks**
Demat account details, broker name, PAN linkage, and nominee registration status.

**Property**
Flat or land details, registration documents location, society name, loan outstanding (if any), and co-owner details.

**Loans**
List all outstanding loans — home loan, car loan, personal loan — including the lender, outstanding amount, and EMI details. Your family needs to know these to avoid defaults.

## Step 2: Organise Your Documents

Physical documents should be kept in a clearly labelled fireproof box or folder. Digital copies should be stored in a secure, encrypted vault like Soult.

For each asset, keep:
- The original document or policy bond
- A clear photograph or scan
- The nominee registration proof

## Step 3: Register Nominees Everywhere

This is the single most important action you can take today. A nominee registration allows your family to claim assets without going through courts.

Check nominee status on:
- Every bank account (visit the bank or use net banking)
- All insurance policies (contact the insurer)
- Demat account (update via your broker)
- EPF account (update on the EPFO portal using your UAN)
- PPF account (visit your bank branch)
- Mutual funds (update via the AMC or broker)

## Step 4: Write Down Access Information

Your family needs to know:
- Your net banking login process (not the password — just the bank and username)
- Your email address linked to financial accounts
- Your mobile number registered for OTPs
- Your PAN and Aadhaar (stored securely, not in plain text)

## Step 5: Store Everything Securely

A Google Drive folder is not enough — it lacks access controls, has no executor workflow, and is not built for this purpose. A secure digital vault like Soult encrypts everything with AES-256, lets you assign nominees with granular permissions, and provides your executor with a guided handover workflow.

## The One-Hour Rule

You can complete a basic asset organisation in under one hour. Set aside a Sunday afternoon. Open a spreadsheet or a Soult vault. Work through each category above. You do not need to be perfect on day one — add more detail over time.

The goal is not perfection. The goal is that your family can function without you.

## What Happens When You Don't Do This

The average Indian estate takes 2–3 years to fully settle when no documentation exists. Court proceedings, legal notices, and advisor fees eat into the inheritance. Families fight. Relationships break.

All of this is preventable.

## Start Today

Open a free Soult vault and begin documenting your assets. It takes under 60 seconds to create an account. You can add one document at a time, at your own pace. Your family will thank you for it — even if they never have to use it.`
  },
  {
    title: "What Happens to Your Bank Accounts After Death in India",
    slug: "what-happens-bank-accounts-after-death-india",
    excerpt: "A loved one has passed. The family needs access to funds. Here's exactly what happens to bank accounts after death in India — and what you can do now to make it simple.",
    author: "Soult Digital",
    tags: ["Estate Planning", "Banking", "Legal"],
    published_at: daysAgo(3),
    content: `## The Moment Everyone Dreads

A family member passes away. Within days, urgent expenses arrive — hospital bills, funeral costs, travel, paperwork. The family turns to the bank account. And hits a wall.

This is one of the most common and most painful financial situations Indian families face. Understanding what happens — and what to do about it — is essential.

## Immediate Freeze on Individual Accounts

When the bank learns of an account holder's death, it freezes the account. No withdrawals can be made. No cheques will be cleared. The account is effectively locked until the proper legal process is followed.

This is not cruelty. It is the bank protecting both the deceased's estate and itself from fraudulent withdrawals.

## What Determines What Happens Next

The single most important factor is whether a **nominee was registered** on the account.

### If a Nominee Is Registered

The process is relatively straightforward:

1. The nominee visits the bank branch with the death certificate and their own identity proof
2. The bank verifies the documents
3. Funds are released to the nominee — typically within 15–30 working days
4. The nominee is legally obligated to distribute the funds per the Will or succession law

A nominee is not automatically the legal heir — they are a trustee who receives and distributes the funds on behalf of the legal heirs. But the practical benefit is enormous: the money becomes accessible quickly, without court involvement.

### If No Nominee Is Registered

This is where things become complicated. Without a nominee, the bank requires one of the following:

**For smaller amounts (typically under ₹5 lakh):**
- A succession certificate from a civil court, OR
- An indemnity bond signed by the legal heirs, supported by a guarantee

**For larger amounts:**
- A succession certificate from the district court, OR
- Probate of the Will (if one exists)

Obtaining a succession certificate typically takes 6 months to 2 years. It requires a lawyer, court fees, and hearings. During this entire period, the money sits locked in the bank, earning minimal interest, unavailable to the family.

## Joint Accounts: The Survivor Rule

If the account was held jointly with a "either or survivor" mandate (which is the most common type in India), the surviving account holder retains full access to the account. The bank simply removes the deceased's name upon production of the death certificate.

This is why many financial advisors recommend that married couples hold their savings accounts jointly with the survivor mandate.

## What About Fixed Deposits?

FDs follow the same rules as savings accounts. If a nominee is registered, the FD can be prematurely closed and funds released to the nominee. Without a nominee, the succession certificate route applies.

One critical issue: many FDs are held in the name of only one person, with no nominee, and the family is unaware the FD even exists. The bank will not proactively inform them. This is why documentation is so important.

## NRE and NRO Accounts

For Non-Resident Indians, the RBI has specific rules. NRE accounts (Non-Resident External) hold foreign earnings. NRO accounts (Non-Resident Ordinary) hold India-sourced income. In both cases, nominee registration follows Indian banking law, and the process for claims is similar — but there are additional FEMA compliance requirements that a CA or legal advisor should handle.

## The Locker Problem

Bank lockers are a separate issue entirely. If only the deceased had locker access, the bank requires a court order before allowing the locker to be opened. Even with a nominee, the locker contents are not automatically released — the nominee must inventory the contents in the presence of bank officials.

## What You Should Do Right Now

**Register a nominee on every bank account.** This single action eliminates the need for a succession certificate in most cases.

**Create a joint account** with your spouse using the "either or survivor" mandate for your primary savings account.

**Document where your FDs are.** List every FD, the bank, branch, and amount. Store this in a secure vault.

**Store your bank passbooks and account details** in a place your executor can find.

**Tell your nominee** that they are a nominee and what that means legally.

## The Role of a Digital Vault

A Soult vault gives your executor immediate access to a documented list of all your bank accounts, FDs, and nominees. When the time comes, they know exactly where to go, what documents to bring, and what to expect — rather than discovering accounts months later through chance.

The process of claiming a bank account after death does not have to be a nightmare. With the right preparation, it can be resolved in weeks rather than years.`
  },
  {
    title: "How to Write a Will in India — Complete Guide 2025",
    slug: "how-to-write-will-india-complete-guide",
    excerpt: "A Will is one of the most important documents you will ever create. Yet fewer than 3% of Indians have one. This guide walks you through everything — from why you need one, to exactly how to write and register it.",
    author: "Soult Digital",
    tags: ["Legal", "Will", "Estate Planning"],
    published_at: daysAgo(5),
    content: `## Why So Few Indians Have a Will

A 2023 survey found that fewer than 3% of Indians have a written Will. The reasons are familiar: it feels morbid, it's seen as something for the wealthy, or people simply assume their family will sort it out.

The reality is that dying without a Will (called dying "intestate") forces your family to navigate the Indian Succession Act or personal law provisions — a process that takes years, costs money, and often fractures relationships.

Writing a Will is not morbid. It is an act of love.

## What a Will Can (and Cannot) Do

**A Will can:**
- Direct who receives your assets after death
- Appoint an executor to carry out your wishes
- Name a guardian for minor children
- Specify how debts should be settled
- Prevent disputes among family members

**A Will cannot:**
- Override nominee registrations on bank accounts, insurance, or PF (nominees take precedence for these assets)
- Transfer property held in a trust
- Apply to jointly held property with survivorship rights
- Come into effect before death

## Types of Wills in India

### Unprivileged Will (Most Common)
Available to all Indian citizens. Must be in writing, signed by the testator (the person making the Will), and witnessed by at least two people who are not beneficiaries.

### Privileged Will
Available to soldiers in active service and sailors at sea. Can be oral or written. Very few Indians need this.

### Holographic Will
Entirely handwritten by the testator. Valid in India but more susceptible to challenge.

## Who Can Make a Will?

Any person who is:
- 21 years of age or older (18 for married persons)
- Of sound mind at the time of making the Will
- Not under undue influence or coercion

## What a Valid Will Must Contain

1. **Declaration** — A clear statement that this is your Will and that it revokes all previous Wills
2. **Personal details** — Your full name, address, and identification
3. **List of assets** — What you own and what you are distributing
4. **Beneficiaries** — Who receives what, with full names and relationship to you
5. **Executor** — Who is responsible for carrying out the Will
6. **Witness signatures** — Two witnesses who are adults, of sound mind, and not beneficiaries
7. **Your signature** — On every page, in the presence of witnesses
8. **Date** — The date of signing

## How to Write Your Will — Step by Step

### Step 1: List Your Assets
Include all moveable and immoveable property — property, bank accounts, investments, vehicles, jewellery, business interests, and personal belongings.

### Step 2: Decide Who Gets What
Be specific. "I leave my flat at [address] to my daughter [name] absolutely" is better than "I leave my property to my children." Vagueness causes disputes.

### Step 3: Appoint an Executor
The executor carries out your Will. Choose someone you trust, who is organised, and ideally younger than you. Inform them in advance.

### Step 4: Write the Will
You can write it yourself or use a lawyer. A lawyer costs ₹2,000–₹15,000 depending on complexity and adds professional assurance. For simple estates, a self-drafted Will is perfectly valid.

### Step 5: Sign in Front of Witnesses
Both witnesses must be present when you sign. They then sign in your presence. Witnesses cannot be beneficiaries or their spouses.

### Step 6: Store it Safely
A Will is only useful if it can be found. Store the original in a fireproof safe or with your lawyer. Store a digital copy in a secure vault like Soult. Tell your executor exactly where to find it.

## Should You Register Your Will?

Registration is not mandatory in India but is strongly recommended. A registered Will is harder to contest and is presumed to be authentic.

To register your Will:
1. Visit the Sub-Registrar's office in your district with the original Will
2. Bring two witnesses
3. Pay the registration fee (typically ₹200–₹1,000 depending on the state)
4. The Will is stamped and recorded

The original is returned to you. The record remains with the government.

## Common Mistakes to Avoid

- **Not updating after major life events** — marriage, divorce, birth of children, or acquisition of major assets. A Will can be updated or replaced at any time.
- **Naming a beneficiary as a witness** — this invalidates the bequest to that person in some jurisdictions
- **Being vague about assets** — "my jewellery" without specifics leads to disputes
- **Not appointing an alternate executor** — if your executor predeceases you, the Will may need court involvement
- **Not telling anyone about the Will** — a Will no one can find is useless

## Muslim, Hindu, and Christian Succession Laws

India has different succession laws for different religious communities:

- **Hindus, Sikhs, Buddhists, Jains** — Hindu Succession Act, 1956
- **Muslims** — Muslim Personal Law; a Will (wasiyat) can only distribute up to 1/3rd of the estate
- **Christians and Parsis** — Indian Succession Act, 1925

Consult a lawyer familiar with your personal law if your estate is complex.

## The Connection Between a Will and a Digital Vault

A Will tells your family what you want. A digital vault like Soult tells them where everything is and how to access it. Together, they form a complete legacy plan. Without the vault, even a perfect Will can take months to execute as the executor hunts for documents.

Write your Will. Store it in your Soult vault. Your family will have everything they need.`
  },
  {
    title: "Nominee vs Executor — What's the Difference in India?",
    slug: "nominee-vs-executor-difference-india",
    excerpt: "These two words are often confused — and that confusion costs Indian families dearly. Understanding the difference between a nominee and an executor is one of the most important things you can do for your family's financial future.",
    author: "Soult Digital",
    tags: ["Legal", "Estate Planning", "Family"],
    published_at: daysAgo(7),
    content: `## Two Words That Carry Enormous Weight

When it comes to estate planning in India, "nominee" and "executor" are two of the most misunderstood terms. Families assume they mean the same thing — they do not. Confusing them can lead to legal disputes, family conflict, and significant financial loss.

## What Is a Nominee?

A nominee is a person registered with a financial institution (bank, insurer, mutual fund, EPF) to receive an asset upon the account holder's death.

Think of a nominee as a **trustee**, not an owner. When the account holder dies, the institution hands the asset to the nominee. But legally, the nominee must then distribute that asset to the rightful legal heirs as per the Will or succession law.

### Key Points About Nominees:
- Must be registered with each institution separately
- Has no legal ownership right over the asset
- Is obligated to distribute to legal heirs
- Simplifies the claims process significantly
- Does not override a Will's instructions about final distribution

### Example:
Ramesh registers his wife Anita as the nominee on his ₹50 lakh life insurance policy. Ramesh passes away. The insurer pays ₹50 lakh to Anita. But if Ramesh's Will says that ₹20 lakh should go to his sister, Anita is legally obligated to pass that amount to her sister-in-law — even though the insurer only deals with Anita.

## What Is an Executor?

An executor is a person appointed in a Will to carry out the testator's (Will-maker's) wishes after death.

Think of an executor as the **project manager of your estate**. Their job is to:
- Locate and secure all assets
- Pay outstanding debts
- File final tax returns
- Distribute assets to beneficiaries as per the Will
- Obtain probate (court approval) if required

### Key Points About Executors:
- Appointed in the Will
- Has legal authority to act on behalf of the estate
- Responsible for the entire estate — not just one account
- Can be a family member, friend, CA, or lawyer
- Can be held legally liable for mismanagement of the estate

## The Critical Difference

| | Nominee | Executor |
|---|---|---|
| Appointed by | Financial institution registration | Will |
| Scope | Single account/policy | Entire estate |
| Legal ownership | No — trustee only | Acts as legal representative |
| Requires a Will | No | Yes |
| Court involvement | Usually not required | May require probate |

## Why This Confusion Is Dangerous

Many Indians believe that registering a nominee means their estate is sorted. It is not.

Consider this scenario: A father registers his eldest son as nominee on all accounts but has three children. He never writes a Will. He passes away. The eldest son receives all assets as nominee. His siblings have no legal claim without going to court — even though their father would have wanted to share equally.

Or the reverse: A father writes a Will distributing assets equally but never registers nominees. Despite the Will, his family must go to court to access every bank account and insurance policy. The process takes years.

The correct approach is both: register nominees on every account AND write a Will that specifies final distribution.

## How a Soult Vault Helps

Soult allows you to:
- Record all nominee registrations alongside each asset
- Appoint an executor with a guided handover workflow
- Give your executor access to a complete asset map the moment access is needed
- Assign different nominees for different assets with clear instructions

When your executor opens your Soult vault, they see every account, every nominee, every document — with a step-by-step guide for what to do. No guesswork. No lost time.

## What You Should Do Today

1. **Check every financial account** — bank, insurance, mutual fund, EPF — and confirm a nominee is registered
2. **Write or update your Will** to specify how you want assets ultimately distributed
3. **Appoint an executor** you trust and inform them explicitly
4. **Document everything** in a secure vault so your executor can actually act on your wishes

The combination of nominees + Will + executor + documentation is the complete picture. Each one without the others leaves gaps that your family will pay for.`
  },
  {
    title: "Estate Planning Checklist for Indian Families",
    slug: "estate-planning-checklist-indian-families",
    excerpt: "A practical, actionable checklist covering everything an Indian family needs to have in order — from wills and nominees to digital assets and health directives.",
    author: "Soult Digital",
    tags: ["Estate Planning", "Checklist", "Getting Started"],
    published_at: daysAgo(9),
    content: `## The Complete Estate Planning Checklist for Indian Families

Estate planning is not a single task — it is a set of decisions and documents that together protect your family's future. Use this checklist to understand where you stand and what gaps need filling.

## Section 1: Legal Documents

- [ ] **Will** — Written, signed, witnessed, and dated. Covers all major assets. Updated after any major life change (marriage, birth, divorce, property acquisition).
- [ ] **Registered Will** — Original Will registered at the Sub-Registrar's office for authenticity.
- [ ] **Power of Attorney** — A person authorised to act on your behalf if you become incapacitated. Consider a General POA and a specific POA for property.
- [ ] **Healthcare Proxy** — A person authorised to make medical decisions on your behalf if you cannot.

## Section 2: Financial Assets — Nominee Registration

For each of the following, confirm a nominee is registered:

- [ ] Savings bank accounts (all banks)
- [ ] Current accounts
- [ ] Fixed Deposits (check each FD separately)
- [ ] Recurring Deposits
- [ ] EPF account (via UAN portal)
- [ ] PPF account (at bank or post office)
- [ ] NPS account
- [ ] Mutual funds (via AMC or broker)
- [ ] Demat account (at broker)
- [ ] Life insurance policies (all policies)
- [ ] Term insurance policies
- [ ] Endowment policies
- [ ] ULIP policies

## Section 3: Property and Physical Assets

- [ ] Property sale deed / conveyance deed (for owned property)
- [ ] Society share certificate (for apartments)
- [ ] Property tax receipts
- [ ] Home loan documents and outstanding balance
- [ ] Vehicle registration certificate (RC)
- [ ] Vehicle insurance papers
- [ ] Locker key and locker access details
- [ ] Jewellery inventory with approximate valuations

## Section 4: Insurance Coverage

- [ ] Adequate life insurance (typically 10–15x annual income)
- [ ] Health insurance for all family members
- [ ] Critical illness cover
- [ ] Personal accident cover
- [ ] Property insurance (fire and burglary)

## Section 5: Digital and Business Assets

- [ ] List of email accounts and recovery methods
- [ ] Social media accounts and what should happen to them
- [ ] Cryptocurrency wallets and recovery phrases (stored securely, not in plain text)
- [ ] Online investment accounts (Zerodha, Groww, etc.)
- [ ] Subscription services that should be cancelled
- [ ] Business ownership documents
- [ ] Partnership deeds or shareholder agreements

## Section 6: Health and End-of-Life Wishes

- [ ] Blood group and known allergies documented
- [ ] Emergency contacts list
- [ ] Regular medications list
- [ ] Organ donation wishes stated
- [ ] Preferred hospital or doctor
- [ ] Funeral or last rites preferences (if you want to specify)
- [ ] DNR (Do Not Resuscitate) instructions if applicable

## Section 7: Documents and Records

- [ ] Aadhaar card (original and copies)
- [ ] PAN card
- [ ] Passport
- [ ] Voter ID
- [ ] Birth certificate
- [ ] Marriage certificate
- [ ] Educational certificates
- [ ] Professional licenses

## Section 8: Executor and Nominees

- [ ] Executor appointed in Will and informed personally
- [ ] Alternate executor named in case primary executor is unavailable
- [ ] All nominees know they are nominated
- [ ] Nominees understand the difference between nomination and inheritance
- [ ] Key family members know where to find the Will and other documents

## Section 9: Documentation and Storage

- [ ] All documents scanned and stored in a secure digital vault
- [ ] Physical originals in a fireproof safe or bank locker
- [ ] Executor has access to the digital vault or knows how to request access
- [ ] A trusted family member knows the location of physical documents

## Section 10: Review Schedule

- [ ] Initial review: complete this checklist today
- [ ] Annual review: check all nominees, update Will if needed
- [ ] After major events: marriage, birth, property purchase, job change, major investment

## Using This Checklist

Go through each item and mark it as done or pending. Do not try to complete everything in one day. Prioritise the Will, nominee registrations, and a secure place to store documents — these three alone eliminate the most common problems families face.

A Soult vault gives you a structured space to track every item on this list, store documents securely, and ensure your executor has everything they need when the time comes.`
  },
  {
    title: "What to Do When a Family Member Dies — Financial Steps in India",
    slug: "what-to-do-when-family-member-dies-financial-steps-india",
    excerpt: "Losing a family member is devastating. The last thing you want to deal with is paperwork. But the financial steps matter — and knowing what to do, in what order, makes everything more manageable.",
    author: "Soult Digital",
    tags: ["Estate Planning", "Family", "Legal"],
    published_at: daysAgo(11),
    content: `## First: Take Care of Yourselves

Before anything else — grieve. Give yourself and your family the space to process the loss. The financial steps matter, but they can wait a few days. Nothing in this guide is so urgent that it cannot wait 48–72 hours after the death.

That said, certain steps should happen within the first two weeks. Here is a practical, ordered guide.

## Week 1: Immediate Priorities

### Obtain Multiple Certified Copies of the Death Certificate

The death certificate is the most important document you will need. Get at least 10 certified copies from the municipal corporation or gram panchayat. Every bank, insurer, and government office will ask for one, and they may not return it.

If the death occurred in a hospital, the hospital issues the death certificate. If at home, the municipality must be informed.

### Secure the Home and Valuables

If the deceased lived alone, secure the property. Change locks if necessary. Inventory all physical valuables — jewellery, cash, documents — in the presence of a witness.

### Locate the Will

Check the deceased's personal papers, bank locker, email (if you have access), and any digital vault they may have used. Contact their lawyer if they had one. A Will determines everything that follows.

### Notify the Employer

If the deceased was employed, notify the HR department immediately. This triggers:
- Group life insurance claim
- Gratuity payment (if applicable)
- Provident fund death claims
- Final salary settlement

## Week 2: Financial Notifications

### Banks

Visit each bank with the death certificate and your own ID. Ask the bank to:
- Note the death of the account holder
- Confirm the nominee registered on each account
- Begin the claim process for nominee release

For joint accounts, bring the death certificate and the surviving holder's ID.

### Life Insurance

Contact the insurer with:
- Policy documents
- Death certificate
- Nominee's ID and bank details
- Claim form (available on the insurer's website)

Most claims settle within 30 days of complete documentation for natural deaths. Accidental deaths may take longer due to investigation.

### EPF and Gratuity

File with the EPFO (Employees' Provident Fund Organisation) using Form 20 (PF withdrawal by nominee/legal heir). Gratuity claims go to the employer. If the deceased had an NPS account, the nominee applies via the CRA (Central Record Keeping Agency).

### PPF

Visit the bank or post office where the PPF account is held. The nominee can claim the balance with the death certificate and their ID.

## Month 1: Asset Transfer Process

### Property

Property transfer is the longest process. Depending on the state and whether there is a Will:

**With a Will:** The executor applies for probate (mandatory in some states, optional in others). Once probate is granted, the property can be transferred via a registered deed.

**Without a Will:** Legal heirs apply for a succession certificate or a court order. This takes 6 months to 2 years.

### Vehicles

Vehicle ownership transfer happens at the local RTO. You will need the death certificate, original RC, insurance papers, and the legal heir's ID.

### Investments

For mutual funds, demat accounts, and stocks — contact the AMC or broker directly. With a registered nominee, the process is straightforward. Without one, a succession certificate or court order is required.

## Tax Obligations

### File the Deceased's Final Income Tax Return

If the death occurred during a financial year, the legal representative (usually the executor or heir) must file the deceased's final ITR for the income earned up to the date of death.

### Inherited Assets and Tax

Assets inherited via a Will or succession are not taxable in India (there is no inheritance tax). However, any income generated by inherited assets (rent, interest, dividends) is taxable in the hands of the recipient.

## What Makes This Easier

Everything above is dramatically simpler when the deceased had:
1. A written Will
2. Nominees registered on every account
3. All documents in a secure, accessible location
4. An appointed executor who knows what to do

A Soult digital vault, when set up in advance, gives the executor a complete map of all accounts, nominees, and documents — eliminating the weeks of detective work that most families face.

If you are going through this process now without that preparation, document everything you learn. You are creating the foundation so your own family never has to go through this.`
  },
  {
    title: "NRI Estate Planning in India — A Complete Guide",
    slug: "nri-estate-planning-india-complete-guide",
    excerpt: "As an NRI, your estate spans two jurisdictions. Here's everything you need to know about protecting your Indian assets, managing nominations across countries, and ensuring your family can access what's yours.",
    author: "Soult Digital",
    tags: ["NRI", "Estate Planning", "Legal"],
    published_at: daysAgo(13),
    content: `## The Unique Complexity of NRI Estates

As a Non-Resident Indian, your financial life typically spans two countries. You may have an NRE account in India, a 401(k) in the US, property in Bangalore, and a flat in London. When you are gone, your family needs to navigate multiple legal systems, currencies, and institutions — simultaneously.

The good news: with the right preparation, an NRI estate can be settled just as smoothly as a resident Indian estate. The bad news: without it, it is significantly more complex.

## Types of Bank Accounts and What Happens to Them

### NRE Accounts (Non-Resident External)
Hold foreign earnings converted to INR. Interest is tax-free in India. Upon death, the balance is released to the registered nominee. Repatriation of NRE funds to the foreign country is permitted under FEMA regulations.

### NRO Accounts (Non-Resident Ordinary)
Hold India-sourced income (rent, dividends, pension). Interest is taxable in India. Repatriation is subject to an annual limit of USD 1 million. Estate settlement follows the same nominee/succession certificate process as resident accounts.

### FCNR Accounts (Foreign Currency Non-Resident)
Held in foreign currency. Can be repatriated freely. Nominee claims follow standard banking procedures.

**Action:** Register a nominee on every NRE, NRO, and FCNR account you hold.

## Property in India

Property owned by NRIs in India is governed by Indian succession law. The Foreign Exchange Management Act (FEMA) governs the sale and repatriation of proceeds.

If you own property in India:
- Ensure the title documents are clear and accessible
- Register a Will in India that specifically addresses the property
- Keep the property tax receipts and society documents updated
- Consider adding a trusted family member as a joint owner if appropriate

Repatriation of property sale proceeds is subject to limits and conditions. Consult a CA with FEMA expertise.

## Writing Wills Across Two Countries

Many NRIs wonder: do I need a Will in both countries?

The answer is generally yes — for clarity, efficiency, and to avoid conflicts between legal systems.

**Your Indian Will** should cover all Indian assets: property, bank accounts, investments, jewellery, and business interests.

**Your country of residence Will** should cover assets held abroad.

The two Wills should be drafted to avoid contradicting each other. Specifically, ensure each Will says it does not revoke the other — just the one in its own jurisdiction.

## Nominee Registration for NRIs

EPFO rules changed in 2023 — NRIs who contributed to EPF during Indian employment can still claim their PF balance. Update your nomination at the EPFO portal using your UAN.

For PPF, you can continue an existing account but cannot open a new one once you become an NRI. Nominations can be updated at the branch.

For insurance policies taken before becoming an NRI, most remain valid. Contact your insurer to confirm and update nominations.

## FEMA Compliance for Heirs

Your Indian heirs (who are residents of India) can receive Indian assets without FEMA restrictions. However, if your heirs are also NRIs, they must be mindful of:
- Repatriation limits
- Filing requirements with the RBI for large transfers
- Tax implications in both countries (treaty provisions may apply)

## The Documents Your Family in India Will Need

When the time comes, your family in India will need:
- Multiple copies of your death certificate (apostilled if issued abroad)
- Your original Will (registered in India, if possible)
- Passport copy
- PAN card
- All account and policy numbers
- Nominee registration confirmations

Obtaining a death certificate from abroad and getting it apostilled can take weeks. Prepare your family by keeping a copy of every critical document in your Soult vault — accessible by your executor in India from day one.

## Tax Implications for Inherited NRI Assets

India has no inheritance tax. However:
- Income generated by inherited assets is taxable in India for resident heirs
- Capital gains on subsequent sale of inherited assets are taxable
- Double taxation treaties may affect taxation in your country of residence

Engage a CA in India with international tax experience as soon as the estate process begins.

## What to Do Today as an NRI

1. Write separate Wills for India and your country of residence
2. Register nominees on every Indian financial account
3. Store all critical documents — both Indian and foreign — in a secure vault accessible by your executor
4. Brief your executor in India on what to do
5. Tell your family where to find everything

A Soult vault is particularly valuable for NRIs — your executor in India can access your complete asset map and document library without waiting for documents to travel internationally.

## The Bottom Line

As an NRI, your estate is more complex than average. But complexity is manageable with preparation. The families that face the greatest difficulty are those where the NRI assumed things would sort themselves out. They do not sort themselves out. They become expensive, years-long legal battles.

Start planning today. Your family in India is counting on it.`
  },
  {
    title: "Digital Assets After Death — Crypto, Social Media and Online Accounts in India",
    slug: "digital-assets-after-death-crypto-social-media-india",
    excerpt: "What happens to your Bitcoin, your Instagram, your Netflix subscription, and your Gmail after you die? Digital assets are the new blind spot in Indian estate planning.",
    author: "Soult Digital",
    tags: ["Digital Legacy", "Crypto", "Estate Planning"],
    published_at: daysAgo(15),
    content: `## The Invisible Estate

The average Indian professional today has a richer digital life than any previous generation. They hold cryptocurrency. They have years of photographs on Google Photos. They have a Netflix subscription, an Amazon account with credit, a Zerodha portfolio, and an Instagram account with 10,000 followers.

When they die, all of it is in limbo.

Indian succession law was not written for the digital age. None of these assets transfer automatically. None are covered by standard estate planning. And unlike a bank account or property, most digital assets simply disappear — or worse, get locked forever — if no one knows they exist.

## Types of Digital Assets

### Financial Digital Assets
- Cryptocurrency (Bitcoin, Ethereum, and altcoins held in wallets or exchanges)
- Online brokerage accounts (Zerodha, Groww, Upstox, Angel One)
- Digital gold holdings (PhonePe, Google Pay)
- UPI-linked wallets and payment apps (PhonePe balance, Paytm wallet)
- Loyalty points and reward miles (airline miles, credit card points)

### Personal and Creative Digital Assets
- Email accounts (years of personal and professional communication)
- Social media accounts (Instagram, Facebook, Twitter/X, LinkedIn)
- Photographs and videos (Google Photos, iCloud)
- Digital music or book collections (Spotify playlists, Kindle library)
- Domain names and websites
- Online content (YouTube channels, blogs)

### Subscriptions and Services
- Active subscriptions that will continue billing your card or UPI
- Amazon Prime, Netflix, Hotstar, etc.

## What Happens to Cryptocurrency After Death

Cryptocurrency is the most complex and most high-stakes digital asset in an estate.

Unlike a bank account, cryptocurrency has no central authority. If your private keys or seed phrases are lost, the cryptocurrency is lost — permanently. No court order, no legal process, no blockchain company can recover it.

**If you hold crypto on an exchange (like CoinDCX, WazirX, or Coinbase):**
The exchange holds custody. Your nominees can potentially claim the balance if they can prove identity and death — but the process is not standardised, and exchanges may change their policies.

**If you hold crypto in a self-custody wallet:**
The seed phrase (a 12 or 24-word recovery phrase) is the only way to access the wallet. If your family does not have the seed phrase, the crypto is permanently inaccessible — no matter how much it is worth.

**What to do:**
- Document all cryptocurrency holdings (exchange accounts and wallet addresses)
- Store your seed phrases in a secure, physical, tamper-evident format (NOT in a text file or email)
- Store a reference to where the seed phrases are kept in your Soult vault — not the phrases themselves
- Brief your executor on what cryptocurrency is and what they need to do

## Social Media Accounts

### Meta (Facebook and Instagram)
Meta allows accounts to be memorialised (kept as a tribute page) or removed. You can appoint a "Legacy Contact" on Facebook who can manage your memorialised account. Do this in your Facebook Settings → Memorialization Settings.

### Google (Gmail, YouTube, Google Photos)
Google's Inactive Account Manager allows you to specify what happens after your account is inactive for a set period — you can nominate people to download your data.

### LinkedIn
LinkedIn memorialises profiles upon death notification. Family can also request removal.

### Twitter/X
Twitter does not have a legacy contact system. Family can request account deactivation.

## Email: The Master Key

Your email is linked to almost every other digital account — bank notifications, investment statements, insurance alerts. Whoever controls your email effectively controls a roadmap to your entire digital life.

This is why it is critical that your executor has a way to access or at least inventory your primary email. Consider leaving the email service (Gmail, Outlook) and the recovery method documented in your vault — not the password itself, but enough for your executor to go through the recovery process.

## Subscriptions That Will Keep Charging

After death, recurring subscriptions will continue to charge your bank account or UPI until:
- The bank account is closed
- The card linked to the subscription expires
- The subscription is explicitly cancelled

Document all active subscriptions in your vault so your family can cancel them quickly.

## What Indian Law Says

Indian succession law does not specifically address digital assets. The Information Technology Act has provisions for data protection but not inheritance. Courts have generally treated digital assets as part of the estate, but there is limited case law.

This means your Will should explicitly address digital assets. List them, specify what should happen (memorialise, transfer, delete), and give your executor the information they need to act.

## A Practical Digital Asset Inventory

Document the following for each digital asset:
- The platform or service name
- Your username or registered email
- The type of asset (financial, personal, creative)
- Your wishes (transfer, memorialise, delete, donate)
- Where the access credentials or recovery information can be found

Store this inventory in your Soult vault. Do not store passwords directly — store references to where recovery information is kept.

## The Stakes Are Higher Than You Think

An Indian family discovered their father held ₹80 lakh worth of Bitcoin after his death. He had told no one. The wallet seed phrase was never found. The Bitcoin is lost — permanently.

This is not a theoretical scenario. It is happening to families across India right now.

Your digital assets are real assets. Treat them with the same seriousness as your property and bank accounts.`
  },
  {
    title: "How to Store Important Documents Securely Online in India",
    slug: "store-important-documents-securely-online-india",
    excerpt: "Google Drive is not a document vault. Here's what secure document storage actually means, what to store, and which solution is built for Indian families.",
    author: "Soult Digital",
    tags: ["Security", "Documents", "Getting Started"],
    published_at: daysAgo(17),
    content: `## The Problem With How Most Indians Store Documents

Most Indians store important documents in one of three ways:
1. Physical folders in a drawer or cupboard
2. A WhatsApp message to themselves
3. A Google Drive folder

All three have serious problems for long-term, family-accessible storage.

Physical documents get lost, damaged in floods or fires, and cannot be accessed remotely. WhatsApp messages expire when the phone is lost or the account is gone. Google Drive has no nominee system, no executor workflow, no access controls, and is not designed for this purpose.

When a family member dies and someone needs to find the Will, the insurance policy, and the property documents — a WhatsApp forward from 2019 is not going to cut it.

## What Secure Document Storage Actually Means

Secure document storage for important family documents requires four things:

### 1. Encryption
Your documents must be encrypted — converted into unreadable ciphertext — so that if the storage provider is breached, your documents cannot be read. The industry standard is AES-256 encryption, which is used by banks and governments worldwide.

Google Drive encrypts your files, but Google holds the encryption key. If compelled by a court or if your account is hacked, your files can be accessed.

A zero-knowledge encrypted vault means the provider holds no key. Only you can decrypt your files.

### 2. Access Controls
You need to define who can access what documents, and under what circumstances. A secure document vault lets you:
- Assign nominees to specific documents
- Set access triggers (e.g., "grant executor access only after verification")
- Revoke access at any time

### 3. Audit Trail
Every access should be logged. You should know who viewed your documents, when, and from which device. This protects against unauthorised access and provides a record for legal purposes.

### 4. Designed for Handover
A document vault for families must be designed with the handover scenario in mind. It must have an executor workflow — a guided process that tells your executor exactly what to do when they gain access.

## What Documents Should You Store

### Highest Priority (Store Immediately)
- Will (original scan and certified copy)
- All insurance policies (life, health, term)
- Property documents (sale deed, khata, encumbrance certificate)
- Bank account passbooks and FD receipts
- EPF and PPF account details
- Demat account statement and broker details
- PAN card and Aadhaar
- Passport
- Marriage certificate
- Vehicle RC and insurance

### High Priority
- Investment statements (mutual funds, stocks)
- Loan documents (home loan, car loan)
- Tax returns for the last 3 years
- Professional licenses
- Educational certificates
- Society documents and maintenance receipts
- Utility connection documents

### Good to Have
- Birth certificates (for all family members)
- School and medical records
- Jewellery valuation certificates
- Vehicle service records
- Warranty documents for major appliances

## DigiLocker vs Soult — What's the Difference?

DigiLocker is a government service for storing officially issued documents — Aadhaar, driving license, vehicle RC, mark sheets. It is excellent for what it does.

But DigiLocker is not designed for:
- Self-uploaded documents (your Will, your FD receipts, your property papers)
- Nominee access and executor workflows
- Family legacy planning
- Medical wishes and personal letters

Soult is built specifically for legacy planning. It stores both official and personal documents, has executor and nominee access controls, and is designed for the handover moment — not just day-to-day identity verification.

## How to Organise Your Digital Document Vault

Structure your vault in clear categories:

**Financial Assets** — bank, FD, PF, insurance, investments, property
**Legal Documents** — Will, power of attorney, agreements
**Identity Documents** — PAN, Aadhaar, passport, voter ID
**Medical** — health insurance, medical history, wishes
**Family Records** — marriage certificate, birth certificates
**Personal** — letters, voice notes, family photographs

Within each category, label documents clearly: "SBI Savings Account — Account No. XXXX — Nominee: Anita"

## The Right Way to Store Passwords and Access Information

Do not store passwords directly in your document vault. If your vault is ever compromised, you do not want all your banking passwords exposed.

Instead, store:
- The name of each financial institution
- The username or registered email/mobile
- A reference to where the password or OTP can be obtained
- Instructions for the account recovery process

For example: "HDFC Bank net banking — Username: ramesh.kumar@email.com — Recovery: OTP sent to +91-XXXXX — Branch: Bandra West"

## DPDP Act 2023 and Your Documents

India's Digital Personal Data Protection Act 2023 gives you the right to:
- Know what personal data is stored about you
- Correct inaccurate data
- Erase your data upon request
- Nominate a person to exercise these rights after your death

Choose a document vault provider that complies with DPDP 2023 and is hosted in India.

## Start Small, Build Over Time

You do not need to scan and upload every document in one day. Start with the five most critical: your Will, your main insurance policy, your property document, your PAN, and a list of bank accounts.

Then add more over time. Once a quarter, update the vault with anything new — a new FD, an updated nomination, a new insurance policy.

Your executor will thank you for every document you upload.`
  },
  {
    title: "DPDP Act 2023 — What It Means for Your Personal Data in India",
    slug: "dpdp-act-2023-personal-data-india",
    excerpt: "India's Digital Personal Data Protection Act 2023 is a landmark law that changes how your personal data must be handled. Here's what it means for you — and how to exercise your rights.",
    author: "Soult Digital",
    tags: ["Privacy", "Legal", "DPDP"],
    published_at: daysAgo(19),
    content: `## India's Most Significant Data Privacy Law

The Digital Personal Data Protection (DPDP) Act 2023 was passed by Parliament in August 2023 and represents India's first comprehensive data privacy legislation. For the first time, Indian citizens have codified rights over their personal data — and companies that collect and process that data have codified obligations.

If you use any digital service in India — banking, insurance, shopping, social media — this law affects you.

## What Counts as Personal Data?

Under the DPDP Act, personal data is any data that can identify an individual. This includes:
- Name and address
- Phone number and email
- Aadhaar and PAN details
- IP address and device identifiers
- Financial information
- Health and medical records
- Biometric data

## Your Rights Under the DPDP Act

### Right to Access
You have the right to know what personal data a company holds about you and how it is being used.

### Right to Correction
You have the right to correct inaccurate or incomplete personal data.

### Right to Erasure
You have the right to request deletion of your personal data when it is no longer necessary for the purpose for which it was collected. There are exceptions (legal obligations, national security), but the right exists.

### Right to Grievance Redressal
Every data fiduciary (company handling your data) must have a grievance officer you can contact. Your grievance must be resolved within a specified time.

### Right to Nominate
This is the most unique provision globally. You can nominate a person to exercise your data rights after your death or incapacity. This nominee can request erasure of your personal data, access records, and deal with data fiduciaries on your behalf.

## Obligations on Companies (Data Fiduciaries)

### Purpose Limitation
Companies can only collect data necessary for the specified purpose. They cannot use your data for other purposes without fresh consent.

### Storage Limitation
Data can only be retained as long as necessary for the stated purpose. Once the purpose is fulfilled, data must be erased.

### Data Localisation
Significant data fiduciaries (large companies) must store certain data within India. This is particularly relevant for cloud-based services.

### Security Obligations
Companies must implement reasonable security safeguards. In the event of a breach, they must notify both the Data Protection Board and affected individuals.

### Children's Data
Companies cannot process personal data of minors under 18 without parental consent. Targeted advertising to children is prohibited.

## The Data Protection Board

The DPDP Act establishes a Data Protection Board of India — the regulatory body that will:
- Hear complaints from citizens
- Investigate violations
- Impose penalties (up to ₹250 crore per violation)

## What This Means for Digital Services You Use

Every app, platform, and service you use in India must now:
- Give you a clear, readable privacy notice
- Obtain specific consent before collecting data
- Honor your erasure requests
- Have a grievance process
- Notify you of data breaches

If a service does not do these things, you can file a complaint with the Data Protection Board.

## What This Means for Your Legacy

The DPDP Act's nomination provision is directly relevant to estate planning. You can formally nominate a person who can:
- Request erasure of your personal data after death
- Access your data held by companies
- Deal with data fiduciaries on your behalf

This is separate from (but complementary to) the executor you appoint in your Will. Consider nominating your executor as your DPDP nominee as well.

## How Soult Digital Complies With DPDP 2023

Soult is built to be fully DPDP 2023 compliant:

- All data is stored on AWS infrastructure in the Mumbai, India region — never leaving Indian jurisdiction
- Zero-knowledge encryption means even Soult cannot read your data
- You can request complete data erasure at any time
- Your nominated executor gains access only through defined, consent-based triggers
- A full audit trail logs every access event

The right to nominate someone to manage your data after death is exactly what Soult's executor and nominee system is built for — it is the digital version of what the law now enshrines as your right.

## What You Should Do

1. Review the privacy policies of major services you use — look for DPDP compliance statements
2. Exercise your right to access — request a copy of your data from companies you want to audit
3. Nominate a DPDP nominee — most services will add this feature as the law is implemented
4. Store your data with services that are India-hosted and DPDP compliant

The DPDP Act is a significant step forward for Indian digital citizens. Understanding it gives you power over your personal data — both while you are alive and in your legacy planning.`
  },
  {
    title: "Health Directives and Medical Wishes — Why Every Indian Family Needs One",
    slug: "health-directives-medical-wishes-india",
    excerpt: "What happens if you cannot speak for yourself? A health directive tells your family and doctors exactly what you want — and removes the most agonising decisions from their hands.",
    author: "Soult Digital",
    tags: ["Health", "Family", "Estate Planning"],
    published_at: daysAgo(21),
    content: `## The Question No Family Wants to Face Unprepared

Imagine this: A 52-year-old father is in the ICU after a stroke. He is unconscious. The doctors turn to his wife and children and ask: Should we continue aggressive intervention? Should he be put on a ventilator? What would he want?

The family has no idea. He never said. They must make one of the most consequential decisions of their lives, under extreme stress, with incomplete information, in a matter of hours.

This scenario plays out in Indian hospitals every day. And it is entirely preventable.

## What Is a Health Directive?

A health directive (also called a living will or advance medical directive) is a document that specifies your medical wishes in the event you are unable to communicate them yourself. It answers the question: What do you want done — and not done — in a medical emergency?

The Supreme Court of India, in its 2018 judgment in Common Cause v. Union of India, recognised the legal validity of advance medical directives (passive euthanasia with conditions). An Indian citizen can legally document their end-of-life medical preferences.

## What Should a Health Directive Cover?

### Life-Sustaining Treatment
Do you want to be put on a ventilator if you cannot breathe on your own? For how long? Under what conditions?

### CPR
If your heart stops, do you want cardiopulmonary resuscitation attempted? If so, for how long?

### Artificial Nutrition and Hydration
If you cannot eat or drink, do you want to be fed through a tube? For how long?

### Organ Donation
Do you consent to organ donation after death? Which organs? Under what conditions?

### Pain Management
If you are terminally ill, do you want aggressive pain management even if it might shorten life?

### Preferred Hospital and Doctor
In an emergency, which hospital should you be taken to? Is there a specific doctor you trust?

## Healthcare Proxy — The Most Important Appointment

Beyond documenting your wishes, you should appoint a healthcare proxy — a person who makes medical decisions on your behalf when you cannot.

This is different from an executor (who handles your estate after death). A healthcare proxy acts during your lifetime when you are incapacitated.

Choose someone who:
- Knows your values and wishes
- Can remain calm under pressure
- Is willing to advocate firmly with medical professionals
- Is practically reachable in an emergency (consider time zones if family is abroad)

## What to Include in Your Medical Information Document

Alongside your health directive, maintain a medical information document that includes:

- Blood group and Rh factor
- Known allergies (medications, foods, environmental)
- Current medications with dosages
- Chronic conditions (diabetes, hypertension, heart disease)
- Previous major surgeries
- Name and contact of primary doctor
- Health insurance details (policy number, insurer, cashless hospital list)
- Emergency contact (beyond spouse — a sibling or parent who is locally available)

## Where to Store Health Directives

A health directive is useless if no one can find it in an emergency. It must be:
- Available to your healthcare proxy immediately
- Accessible by the hospital in an emergency
- Known to your immediate family

A digital vault like Soult lets you:
- Store the health directive document
- Share access with your healthcare proxy instantly
- Include your full medical information alongside
- Update it any time your wishes or medical situation changes

## The Indian Context

India does not yet have a standardised legal form for health directives like some Western countries. The Supreme Court's 2018 judgment provides a framework, but implementation at the hospital level is inconsistent.

Practically, the most effective approach is to:
1. Write a clear, detailed health directive document
2. Have it witnessed by two adults
3. Register it with your GP and primary hospital if possible
4. Store it in your Soult vault and share access with your healthcare proxy
5. Tell your immediate family it exists and where to find it

## Starting the Conversation

The hardest part of health directives for most Indian families is not the paperwork — it is the conversation. Discussing death and illness is culturally uncomfortable.

But consider this: the conversation you avoid having now forces your family to have a far harder one in an ICU waiting room, unprepared, in crisis.

Start with something simple: "I want to tell you what I would want if something happened to me. Not because I think it will, but because I love you and I don't want you to have to guess."

That conversation, and the document that follows it, is one of the deepest acts of care you can offer your family.

## The Bottom Line

Medical wishes are the most overlooked part of legacy planning in India. A health directive costs nothing. It takes an hour to write. And it removes one of the heaviest burdens a family can face.

Add it to your Soult vault today. Your family — and your doctors — will be grateful.`
  },
  {
    title: "How to Talk to Your Family About Legacy Planning",
    slug: "how-to-talk-to-family-about-legacy-planning",
    excerpt: "The biggest obstacle to legacy planning in India is not paperwork — it is the conversation. Here's how to have it in a way that brings your family together rather than making things awkward.",
    author: "Soult Digital",
    tags: ["Family", "Getting Started", "Legacy Planning"],
    published_at: daysAgo(23),
    content: `## The Conversation That Doesn't Happen

In most Indian families, legacy planning is never discussed openly. The reasons are familiar:

- It feels morbid to talk about death
- It might upset elderly parents
- It is seen as something only wealthy families need
- Children assume their parents have it handled
- Parents assume their children will sort it out

The result is that the conversation never happens. And then someone dies. And the family is left guessing.

The irony is that the conversation, once had, is almost always described as a relief — not morbid at all, but clarifying, connecting, and even comforting.

## Why This Conversation Matters

Beyond the practical benefits (knowing where documents are, who the nominees are, what the Will says), the legacy conversation does something more important: it tells your family what you value, what you wish for them, and how you want to be remembered.

That is not morbid. That is love expressed in a very specific and useful form.

## When to Have the Conversation

There is no perfect moment. But certain life events create natural openings:

- When you buy a property or take out life insurance
- After a family member or friend of a similar age passes away
- When you start a new job with significant benefits
- Around a milestone birthday (40, 50, 60)
- When a child starts school or college
- When you see a news story about an estate dispute

If none of these apply, the right time is simply now. You can always frame it as something you read or heard about — "I came across this platform for legacy planning and it got me thinking..."

## How to Start the Conversation

### With Your Spouse or Partner
This is the most important conversation and usually the easiest to start. Try:

*"I've been thinking about what would happen to us if something happened to the other. Can we sit down this weekend and go through our finances together? I want to make sure we both know where everything is."*

This frames it as practical (not morbid), mutual (not one-sided), and actionable.

### With Your Parents
This is harder, but more important than most people realise. Adult children often discover after a parent's death that they had no idea what accounts existed, whether a Will was written, or who the nominees were.

Try:
*"Mummy/Papa, I've been doing some financial planning for our family and it made me realise I should know more about your situation too. Not because I'm worried, but so that we can support you if anything ever happens. Can we spend some time together going through the basics?"*

Lead with care, not fear.

### With Your Adult Children
If you are a parent talking to adult children:

*"I've been working on something I want to share with you — a document that tells you everything you'd need to know about our finances and wishes if something happened to us. I'm not going anywhere, but I want you to have this information and I want you to be involved."*

Including them in the process (rather than just informing them) increases buy-in and reduces the shock of discovery.

## The Four Things Your Family Needs to Know

When you have the conversation, aim to cover these four things:

1. **Where the documents are** — Will, insurance policies, property papers, account details
2. **Who the nominees are** — On every account, and whether they know they are nominated
3. **Who the executor is** — Their name, contact, and the fact that they are aware of their role
4. **Where the digital vault is** — If you use Soult, how your executor gets access when needed

You do not need to share the contents of your Will in detail. You just need to ensure the logistics are understood.

## What If the Conversation Gets Emotional?

It often does. This is okay.

If a family member gets upset or resistant, do not push. Say: *"I understand this feels uncomfortable. We can come back to it. But I want you to know I'm doing this because I love you and I want things to be as easy as possible for our family."*

Then come back to it. Legacy planning is a conversation, not a one-time event.

## After the Conversation: Create a Reference Document

Once you've had the key conversations, create a simple one-page reference document (or a section in your Soult vault) that your family can use as a quick guide:

- Where is the Will?
- Who is the executor?
- Which banks do we use?
- Who is the family's lawyer/CA?
- Who is the insurance agent?

This document is not a legal document. It is a practical one. A map.

## The Legacy Is in the Conversation Itself

When families look back after a loss, they often say two things about legacy planning:

If it was done: *"It was hard, but it made everything so much easier. We knew what he/she wanted. We felt connected to their wishes."*

If it was not done: *"We had no idea. We were guessing about everything. We wish we had talked about it."*

The conversation itself — about what matters to you, what you want for your family, how you want to be remembered — is as valuable as the documents it produces.

Have it. Soon.`
  },
  {
    title: "Insurance Policies and Nominations — What Every Indian Must Know",
    slug: "insurance-policy-nomination-india",
    excerpt: "Your insurance policy is only as good as its nomination. An out-of-date or missing nomination can delay — or deny — a claim to your family. Here's everything you need to know.",
    author: "Soult Digital",
    tags: ["Insurance", "Estate Planning", "Legal"],
    published_at: daysAgo(25),
    content: `## The Insurance Claim That Should Have Been Simple

A 45-year-old man in Pune died suddenly of a heart attack. He had ₹1 crore in life insurance. His wife filed a claim. It was denied — not because of a policy technicality, but because the nomination on the policy named his mother, who had predeceased him years earlier. No updated nomination was ever filed.

His wife had to go to court. The case took three years.

This is not an unusual story. It is one of the most common and most preventable financial disasters in India.

## What Is a Nomination in Insurance?

A nomination is the designation of a person who will receive the insurance claim amount upon the policyholder's death. It is mandatory to nominate someone when you purchase a life insurance policy.

The key distinction, clarified by the Insurance Laws (Amendment) Act 2015, is:

**Beneficial nomination:** If you nominate your spouse, children, or parents, they are beneficial nominees. The claim amount is paid directly to them and belongs to them — it does not need to be distributed to other legal heirs.

**Non-beneficial nomination:** If you nominate anyone else (sibling, friend, aunt, uncle), they receive the amount as a trustee. They are legally obligated to distribute it per the Will or succession law.

For most families, naming a spouse or children as beneficial nominees is the cleanest approach.

## Common Nomination Mistakes

### 1. Never Filing a Nomination
Some policies were purchased decades ago when nomination was not mandated. Check policies purchased before 2014 — they may have no nomination at all.

### 2. Outdated Nominations
Marriages, divorces, births, and deaths change who should receive the benefit. A nomination made 20 years ago may name a parent who has since died, an ex-spouse, or simply the wrong person.

### 3. Naming a Minor Without an Appointee
If you name a minor (under 18) as nominee, the claim cannot be paid to them directly. You must also name an "appointee" — an adult who will receive the money on the minor's behalf. Many policyholders miss this.

### 4. Vague or Incorrect Details
The nominee's name, date of birth, and relationship must match exactly what is on their identity documents. Small discrepancies cause delays.

### 5. Not Informing the Nominee
Your nominee should know they are named. They should have the policy number, the insurer's name, and a basic understanding of the claim process.

## How to Update Your Insurance Nomination

Most insurers now allow nominations to be updated online through their customer portal or mobile app. You will need:
- The policy number
- The nominee's full name, date of birth, address, and relationship to you
- A percentage allocation if you are naming multiple nominees (they must total 100%)

For policies purchased through an agent, contact the agent or the insurer's branch directly.

Keep confirmation of the updated nomination in writing and store a copy in your Soult vault.

## Multiple Nominees — Splitting the Benefit

You can name multiple nominees and specify the percentage each receives. For example:
- Spouse: 50%
- Son: 25%
- Daughter: 25%

This can be useful if you want to ensure all dependents are directly covered. Each nominee must be informed and their details must be accurate.

## What Happens Without a Valid Nomination

If there is no valid nomination at the time of death, the insurer pays the claim to the legal heir as determined by a succession certificate. This requires:
- Obtaining a succession certificate from a civil court (6 months to 2 years)
- Legal fees and court costs
- Delays in access to the money

The insurer is legally protected if they follow the succession certificate route. They are not responsible for the delay.

## Term Insurance Specifically

Term insurance is the most efficient form of life cover — high sum assured, low premium. For Indian families, a term insurance policy of 10–15x annual income is typically recommended. If you have a term policy, check its nomination status right now. The stakes are highest here.

Also check: most term policies in India require a medical certificate from the attending physician if the claim is within the first three years of the policy. Make sure your family knows to keep hospital and medical records.

## Group Insurance Through Employer

Many employees have group life and health insurance provided by their employer. Nomination for group life insurance must be filed with the HR department — not the insurer directly. Check with your HR team to confirm:
- The sum assured under group life cover
- The registered nominee
- The process for your family to claim

## Health Insurance and Nominations

Health insurance (hospitalisation/mediclaim) does not typically have a traditional nomination since the insured person is the claimant. However, for family floater policies, confirm:
- Who is the primary insured
- Who can make cashless claims
- What happens to the policy if the primary insured dies

## The Nomination Audit Checklist

Go through every policy and check:
- [ ] Is a nomination registered?
- [ ] Is the nominee still alive?
- [ ] Is the nominee's information current and correct?
- [ ] If the nominee is a minor, is an appointee named?
- [ ] Does the nominee know they are named?
- [ ] Is the policy document stored securely and accessibly?

Store all updated nomination confirmations in your Soult vault alongside the policy documents. When your family needs to file a claim, they should find everything in one place — policy document, nomination confirmation, and the insurer's contact details.

The 15 minutes you spend on a nomination audit today can save your family years of legal proceedings.`
  },
  {
    title: "What Is a Digital Legacy Vault and Why Does Your Family Need One?",
    slug: "what-is-digital-legacy-vault",
    excerpt: "A digital legacy vault is not just cloud storage. It is a purpose-built system for organising, protecting, and passing on your most important information. Here's why every family needs one.",
    author: "Soult Digital",
    tags: ["Digital Legacy", "Getting Started", "Vault"],
    published_at: daysAgo(27),
    content: `## The Problem It Solves

Every year in India, millions of rupees in insurance claims go unclaimed. Properties remain in legal limbo for decades. Bank accounts sit frozen because no one knows they exist. Life savings are lost because the account details died with the account holder.

These are not tragedies caused by lack of money or bad intentions. They are tragedies caused by a lack of organisation. No single place existed where a family could find what they needed, when they needed it most.

A digital legacy vault is designed to solve this problem.

## What Is a Digital Legacy Vault?

A digital legacy vault is a secure, encrypted digital repository where you store and organise all the information your family would need after your death or incapacitation.

Unlike generic cloud storage (Google Drive, Dropbox), a digital legacy vault is built specifically for this purpose. It includes:

**Structured asset documentation** — not just files, but organised records of every bank account, insurance policy, investment, and property with relevant details.

**Nominee and executor management** — you assign specific people to specific assets with defined access conditions.

**Event-based access** — access is granted only when a defined trigger occurs (such as your death being verified), not before.

**Guided executor workflow** — your executor is walked through exactly what to do, in what order, without needing to guess.

**Military-grade encryption** — AES-256 encryption protects everything. Zero-knowledge architecture means even the vault provider cannot read your files.

## What You Store in a Digital Legacy Vault

### Financial Records
- Bank account details (bank name, account number, branch, nominee)
- Fixed deposit receipts
- Mutual fund folios and demat account details
- Insurance policies (all types)
- EPF and PPF account information
- Outstanding loan details

### Legal Documents
- Will (original scan)
- Power of attorney
- Property documents
- Sale deeds and agreements

### Personal and Medical
- Health directives and medical wishes
- Blood group and allergies
- Emergency contacts
- Medication list

### Personal Legacy
- Voice messages for specific family members
- Letters to be delivered after death
- Family photographs and videos
- Personal stories and memories

## How It Differs From Google Drive

| | Google Drive | Digital Legacy Vault |
|---|---|---|
| Purpose | General file storage | Legacy planning and handover |
| Encryption | Google holds key | Zero-knowledge (you hold key) |
| Nominee access | Not available | Built-in, granular control |
| Executor workflow | Not available | Guided step-by-step process |
| Event-based access | Not available | Core feature |
| Audit trail | Basic | Comprehensive, every access logged |
| Designed for India | No | Yes (DPDP 2023 compliant) |

## The Three Moments When a Digital Legacy Vault Matters

### Moment 1: While You Are Alive
You have a single, organised, secure place to find any document in seconds. No searching through old WhatsApp messages or filing cabinet folders.

### Moment 2: If You Become Incapacitated
Your healthcare proxy and trusted family members can access what they need immediately — your insurance details, your health directives, your emergency contacts.

### Moment 3: After Your Death
Your executor has a complete, guided map of your entire estate. Every account, every document, every wish — in one place. The months of detective work that most families face becomes hours of clear, guided process.

## Who Needs a Digital Legacy Vault?

The short answer: anyone who has dependents, assets, or wishes they care about.

Practically:
- **Young families** — life insurance, home loans, and young children create significant estate needs
- **Business owners** — business succession adds complexity that demands clear documentation
- **NRIs** — assets spanning two countries require extra organisation
- **Senior citizens** — the probability of the vault being needed is higher; the peace of mind is immediate
- **Anyone with cryptocurrency** — self-custody digital assets require documented recovery information or they are lost forever

## Why India Specifically Needs This

India has unique estate planning challenges:
- Multiple succession laws (Hindu, Muslim, Christian personal law)
- Nominee system for financial assets that is separate from inheritance
- A historically underdeveloped culture of proactive estate planning
- Large NRI population with assets in multiple jurisdictions
- Rapidly growing digital asset ownership without corresponding planning infrastructure

A digital legacy vault built for India — hosted in India, DPDP 2023 compliant, designed around Indian financial institutions and succession patterns — addresses these challenges specifically.

## Starting Your Vault

The best digital legacy vault is one you actually use. Start with the basics:
- Three bank accounts
- One insurance policy
- Your Will

Upload those documents. Add a nominee. And then build from there, one document at a time.

You will not regret the hour you spend on this. And your family will be grateful for every document you add.`
  },
  {
    title: "How to Choose an Executor for Your Will in India",
    slug: "how-to-choose-executor-will-india",
    excerpt: "The executor of your Will carries enormous responsibility. Choosing the right person — and preparing them properly — is one of the most important decisions in your estate plan.",
    author: "Soult Digital",
    tags: ["Legal", "Will", "Estate Planning"],
    published_at: daysAgo(29),
    content: `## The Most Underappreciated Role in Estate Planning

Most people spend significant time deciding who gets what in their Will. Far fewer spend equivalent time deciding who is responsible for making sure those wishes are actually carried out.

That person — the executor — is arguably more important than any specific bequest. A poorly chosen executor can delay the estate for years, cause family conflict, or fail to carry out your wishes. The right executor can make the difference between a smooth, peaceful handover and a years-long legal and emotional ordeal.

## What Does an Executor Actually Do?

The executor's responsibilities begin at death and end when the estate is fully settled. They typically include:

**Immediate actions (first two weeks):**
- Obtaining multiple copies of the death certificate
- Locating and securing the Will
- Notifying banks, insurers, and government departments
- Securing the deceased's property and valuables
- Notifying the employer (if applicable)

**Estate administration (first six months):**
- Inventorying all assets and liabilities
- Applying for probate (if required)
- Filing the deceased's final income tax return
- Paying outstanding debts
- Collecting dues (insurance claims, EPF, gratuity)
- Managing any ongoing property or business interests

**Final distribution:**
- Transferring assets to beneficiaries as specified in the Will
- Obtaining receipts and releases from beneficiaries
- Closing the estate

This is a significant undertaking. It requires organisation, time, persistence, and sometimes thick skin when dealing with government offices and resistant institutions.

## Qualities to Look For in an Executor

### Trustworthiness
This is non-negotiable. The executor has access to everything and fiduciary duty over the estate. Choose someone whose integrity you trust absolutely.

### Organisational Ability
Estate administration is fundamentally an administrative task. The executor must track dozens of documents, deadlines, and processes simultaneously. Someone who struggles with paperwork will struggle as an executor.

### Availability and Health
The executor must be alive, able-bodied, and available when needed. If you are 60 years old, do not appoint your 80-year-old sibling as executor. Appoint someone likely to outlive you by a meaningful margin.

### Proximity (or Ability to Travel)
Much of estate administration requires physical presence — bank visits, government offices, property inspections. An executor who lives abroad will face additional challenges. Consider a local executor or a professional one.

### Ability to Handle Conflict
Family estate distributions sometimes generate conflict. Your executor may need to deliver news that some beneficiaries do not like, hold firm on the Will's instructions, and deal with difficult personalities calmly.

### Financial and Legal Literacy
The executor does not need to be a CA or lawyer, but basic financial literacy is valuable. They need to understand bank claims processes, insurance claims, and income tax obligations.

## Can a Beneficiary Be the Executor?

Yes. In India, there is no legal prohibition on naming a beneficiary as executor. In fact, naming your spouse or primary child as executor is very common and generally works well for simple estates.

The only risk is conflict of interest in complex estates where multiple beneficiaries may dispute the distribution. In such cases, an independent executor (professional or otherwise) may be preferable.

## Professional Executors

Lawyers and chartered accountants can serve as professional executors. This is worth considering if:
- Your estate is complex (multiple properties, business interests, large investment portfolio)
- Your beneficiaries are likely to have disputes
- You do not have a trusted individual who meets the criteria above
- You want the process managed without burdening your family

Professional executors charge a fee — typically 1–3% of the estate value, or a flat fee for simpler estates. This is often worth it for the expertise and neutrality they bring.

## How to Prepare Your Executor

Choosing the executor is just the first step. Preparing them is equally important.

**Tell them they are appointed.** Many people discover they are executors only after the death, from the Will. This is far from ideal. Your executor should know their role, understand the responsibility, and be willing to accept it.

**Give them access to your vault.** Your executor should know that your Soult vault exists, how to access it, and what is inside. When the time comes, they should have everything they need in one place — account details, documents, insurance policies, your wishes.

**Introduce them to your lawyer and CA.** Your executor will need professional help. An existing relationship with your advisors saves significant time.

**Update them when things change.** New property, new bank accounts, updated Will — your executor should know about major changes.

## Naming an Alternate Executor

Your Will should name at least one alternate executor. If your primary executor predeceases you, is incapacitated, or is unwilling to serve, the alternate takes over. Without an alternate, the court may appoint an administrator — a stranger to your family.

## The Executor and a Digital Vault

The combination of a well-chosen, well-prepared executor and a complete Soult digital vault is the most powerful estate planning tool available. The vault gives the executor:
- An immediate map of all assets
- All critical documents in one place
- Clear records of nominees on every account
- Your health directives and personal wishes
- A guided workflow for what to do at each step

Without the vault, even the best executor faces weeks of detective work. With it, they can begin the actual administration process within days.

## Choosing Is Not Enough — Tell Them

The single most common executor failure in Indian estates is not incompetence. It is that the executor had no idea they were appointed until they read the Will after the death.

Make the call today. Tell your chosen executor that you have named them. Explain what it means. Tell them where the Will is. And tell them about your Soult vault.

That conversation is a gift — to them and to your family.`
  },

  // ── 5 Hyper-specific fast-ranking articles ──────────────────────────────────

  {
    title: "EPF Nomination Update Online 2025 — Step by Step Guide",
    slug: "epf-nomination-update-online-2025",
    excerpt: "Your EPF nomination is one of the most important financial documents you own — and most Indians have never updated it. Here's exactly how to update it online in 2025 using the EPFO member portal.",
    author: "Soult Digital",
    tags: ["EPF", "Nomination", "How To"],
    published_at: daysAgo(2),
    content: `## Why Your EPF Nomination Might Be Wrong Right Now

Most Indians filled out their EPF nomination form on their first day of employment — years or even decades ago. At the time, they may have nominated a parent or sibling. Since then, they may have married, had children, or lost the original nominee.

The EPF balance represents years of savings. If your nominee details are outdated and you pass away, your family faces a bureaucratic nightmare to claim what is rightfully theirs.

Updating your EPF nomination takes under 15 minutes online. Here is exactly how to do it in 2025.

## Who Can Be an EPF Nominee?

Under EPF rules, you can nominate:
- Spouse
- Children (including adopted children)
- Parents
- Siblings (only if you have no family as defined above)

If you are married, you must nominate a family member. You cannot nominate a friend or other relative if you have a spouse, children, or parents alive.

## What You Need Before You Start

- UAN (Universal Account Number) — check your salary slip or previous EPF passbook
- UAN must be KYC-verified (Aadhaar, PAN, and bank account linked)
- Mobile number registered with Aadhaar (for OTP verification)
- Nominee's Aadhaar number
- Nominee's bank account details (account number and IFSC)
- A recent passport-size photograph of yourself (JPEG, under 100KB)
- Signature image (JPEG, under 100KB)

## Step-by-Step: How to Update EPF Nomination Online

### Step 1: Log in to the EPFO Member Portal
Go to **unifiedportal-mem.epfindia.gov.in/memberinterface/**

Enter your UAN and password. If you do not have a password, click "Forgot Password" and reset it using your Aadhaar-linked mobile number.

### Step 2: Complete e-KYC if Not Already Done
Go to **Manage → KYC**. Ensure your Aadhaar, PAN, and bank account are verified (shown in green). If not, add and verify them before proceeding. Nomination cannot be updated without verified KYC.

### Step 3: Go to the e-Nomination Section
Click **Manage → e-Nomination** from the top menu.

### Step 4: Enter Your Family Details
Click **"Provide Details"**. A form opens. Enter:
- Your present address
- Whether you have a family as per EPF definition (spouse, children, or parents)

If yes, you must nominate from that family. Click Save.

### Step 5: Add Nominee Details
Click **"Add Family Details"**. For each nominee:
- Full name (as on Aadhaar)
- Date of birth
- Relationship
- Aadhaar number
- Bank account number and IFSC
- Guardian details (if nominee is a minor — name, relationship, address)

You can add multiple nominees. Assign a percentage share to each (must total 100%).

### Step 6: Upload Photograph and Signature
Upload your photograph and signature as JPEG files. Each must be under 100KB. Use a photo editing app to compress if needed.

### Step 7: Preview and Submit
Click **"Preview"** to review all details. If correct, click **"Submit"**.

### Step 8: e-Sign with Aadhaar OTP
You will be redirected to the Aadhaar e-Sign portal. Enter your Aadhaar number. An OTP will be sent to your registered mobile. Enter it to complete e-signing.

### Step 9: Confirmation
Your nomination is submitted. You will see a confirmation message and can download the nomination certificate as a PDF. **Save this PDF and store it in your Soult vault.**

## What If Your UAN Is Not KYC-Verified?

Visit your employer's HR department. They can initiate KYC verification at the employer level. Once approved by the EPFO, you can proceed with the online nomination.

Alternatively, visit your nearest EPFO regional office with your Aadhaar, PAN, bank passbook, and employment details.

## How to Check If Your Nomination Was Submitted Successfully

Go to **Manage → e-Nomination** and look for the status **"Nomination Registered"** with the date. You can also download the nomination certificate from this page.

## After Updating — What to Do

1. Download the nomination certificate as PDF
2. Upload it to your Soult vault alongside your EPF UAN details
3. Tell your nominee that they are nominated and show them the certificate
4. Set a reminder to review your nomination after any major life event (marriage, birth of child)

## Common Problems and Solutions

**"e-KYC not verified" error:** Contact your employer or visit the EPFO office with original documents.

**"Mobile number not registered with Aadhaar" error:** Update your mobile number at your nearest Aadhaar enrollment centre.

**"UAN not activated" error:** Activate your UAN at the EPFO portal using your member ID (on your salary slip) and Aadhaar.

**Nomination not showing after submission:** Allow 24–48 hours for the EPFO system to update. Check again after that period.

## Your EPF Nomination Is Not Your Will

Updating your EPF nominee does not replace writing a Will. Your EPF nominee receives the balance and is legally obligated to distribute it per your Will or succession law. Ensure your Will is consistent with your nominee instructions to avoid family disputes.`
  },

  {
    title: "How to Add Nominee in SBI Savings Account Online — 2025 Guide",
    slug: "how-to-add-nominee-sbi-savings-account-online",
    excerpt: "Adding a nominee to your SBI account protects your family and ensures your savings reach them without court intervention. Here's the complete step-by-step process online and offline.",
    author: "Soult Digital",
    tags: ["Banking", "SBI", "Nomination", "How To"],
    published_at: daysAgo(4),
    content: `## Why Every SBI Account Must Have a Nominee

State Bank of India is India's largest bank with over 50 crore account holders. Yet a significant percentage of these accounts have no nominee registered — creating unnecessary hardship for families when the account holder passes away.

When a nominee is registered, the claims process takes 15–30 days. Without a nominee, the family must obtain a succession certificate from court — a process that takes 6 months to 2 years.

This guide covers how to add or update a nominee on your SBI savings account in 2025.

## Methods Available

SBI offers three ways to add a nominee:
1. **Online via SBI YONO app** (fastest — under 10 minutes)
2. **Online via SBI Net Banking** (desktop)
3. **Offline at the branch** (for those without internet banking)

## Method 1: SBI YONO App (Recommended)

### Requirements
- SBI YONO app installed and logged in
- Your account linked to YONO
- Nominee's full name, date of birth, relationship, and address

### Steps

**Step 1:** Open the YONO SBI app. Log in with your MPIN or biometric.

**Step 2:** Tap the **Menu** icon (three lines, top left).

**Step 3:** Go to **Services → Account Services → Nomination**.

**Step 4:** Select the account for which you want to add or update a nominee.

**Step 5:** Choose **"Add Nominee"** or **"Update Nominee"**.

**Step 6:** Enter nominee details:
- Full name
- Date of birth
- Relationship to account holder
- Address
- If the nominee is a minor: name of guardian, guardian's relationship, guardian's address

**Step 7:** Review the details and confirm.

**Step 8:** Authenticate with OTP sent to your registered mobile number.

**Step 9:** You will receive a confirmation SMS and can view the nomination in the Services → Nomination section.

## Method 2: SBI Net Banking (Desktop)

**Step 1:** Log in at **onlinesbi.sbi** with your username and password.

**Step 2:** Go to **My Accounts & Profile → Nomination → View/Register**.

**Step 3:** Select the account.

**Step 4:** Click **"Register"** or **"Modify"** next to the account.

**Step 5:** Fill in the nominee's details — name, date of birth, relationship, address.

**Step 6:** Submit. Authenticate with OTP.

**Step 7:** Download the confirmation. Save it to your Soult vault.

## Method 3: Branch Visit (Offline)

If you do not use internet banking, visit your home branch with:
- Filled Form DA-1 (Nomination Registration form — available at the branch or download from SBI website)
- Original passbook
- Your ID proof (Aadhaar or PAN)
- Nominee's ID proof copy

Submit to the counter. The branch updates the nomination and stamps your passbook. Keep the acknowledgement receipt.

## Can You Have More Than One Nominee on an SBI Account?

SBI savings accounts allow **one nominee only**. This is a regulatory limitation under the Banking Companies (Nomination) Rules, 1985 — not SBI-specific.

If you want to distribute funds among multiple people, you need to do this through your Will — the nominee receives the funds and distributes per your Will instructions.

## Nominee Details to Keep Ready

When filling the form, you will need:
- Nominee's full name (exactly as on their Aadhaar/PAN)
- Date of birth
- Relationship (spouse, son, daughter, mother, father)
- Complete address
- If minor: guardian's full name and relationship

## How to Verify Your Nomination Is Registered

**Via YONO app:** Services → Account Services → Nomination → the nominee name will be displayed.

**Via passbook:** Your nomination status may be printed in the passbook after a branch visit.

**Via Net Banking:** My Accounts & Profile → Nomination → View.

## What to Do After Adding a Nominee

1. Screenshot or download the nomination confirmation
2. Upload it to your Soult vault alongside your SBI account details
3. Tell your nominee they are named and which bank to approach
4. Give them the branch address and account number

## Updating a Nominee (If Circumstances Change)

You can update your nominee at any time — there is no limit on the number of changes. If your original nominee has passed away, update immediately. Follow the same steps above and select "Modify" instead of "Register."

## Joint Account Nomination

If your SBI account is a joint account, all account holders must consent to the nominee registration. In joint accounts, the nomination is registered jointly and can only be changed with all holders' consent.

For "Either or Survivor" joint accounts, when one holder passes away, the surviving holder retains full access — nomination comes into effect only when both holders are deceased.

## The 15-Minute Investment That Protects Decades of Savings

Adding a nominee to your SBI account takes 10–15 minutes online. It protects years of savings. It ensures your family can access funds when they need them most, without court intervention.

Do it today. Then document it in your Soult vault so your executor knows it is done.`
  },

  {
    title: "DigiLocker vs Soult Digital — Which Is Better for Storing Important Documents?",
    slug: "digilocker-vs-soult-digital-documents",
    excerpt: "Both DigiLocker and Soult store documents — but for completely different purposes. Here's an honest comparison so you can use each for what it was built for.",
    author: "Soult Digital",
    tags: ["DigiLocker", "Comparison", "Documents"],
    published_at: daysAgo(6),
    content: `## Two Tools, Two Jobs

DigiLocker and Soult Digital are both platforms for storing documents. But comparing them as alternatives is like comparing a government ID card to a home safe — they solve different problems, and most people need both.

Here is an honest, unbiased comparison so you know exactly what to use for what.

## What Is DigiLocker?

DigiLocker is a Government of India initiative under the Ministry of Electronics and Information Technology (MeitY). It is designed to:
- Store **officially issued government documents** (Aadhaar, driving licence, RC, mark sheets, degree certificates)
- Allow these documents to be fetched directly from issuing authorities
- Serve as a legally valid digital alternative to physical documents

DigiLocker is excellent at what it does. Documents stored in DigiLocker are legally equivalent to their physical originals under the IT Act. A traffic police officer can accept your DigiLocker driving licence. A bank can accept your DigiLocker Aadhaar.

**What DigiLocker cannot do:**
- Store self-uploaded personal documents (your Will, property papers, insurance policies, FD receipts)
- Assign nominees or executors
- Create access control (who sees what, when)
- Provide an executor workflow for your family
- Store voice messages, family memories, or personal letters
- Maintain an audit trail for family legacy purposes

## What Is Soult Digital?

Soult is a purpose-built digital legacy vault for Indian families. It is designed to:
- Store **all documents important to your family's future** — both government-issued and personal
- Organise your assets (bank accounts, insurance, investments, property)
- Assign nominees and executors with granular permission controls
- Provide an event-based access system (executor gets access only when needed)
- Preserve memories — voice notes, letters, photographs
- Guide your executor through the handover process step by step

**What Soult cannot do:**
- Issue legally valid equivalents of government documents (DigiLocker does this)
- Replace your Aadhaar or driving licence for verification purposes

## Side-by-Side Comparison

| Feature | DigiLocker | Soult Digital |
|---|---|---|
| Government-issued documents | ✓ Excellent | ✓ Can store copies |
| Self-uploaded personal documents | Limited | ✓ Core feature |
| Will storage | ✗ | ✓ |
| Insurance policy storage | ✗ | ✓ |
| Property document storage | ✗ | ✓ |
| Bank account documentation | ✗ | ✓ |
| Nominee/executor management | ✗ | ✓ |
| Event-based access control | ✗ | ✓ |
| Executor guided workflow | ✗ | ✓ |
| Family memory preservation | ✗ | ✓ |
| Audit trail | Basic | Full |
| Encryption | AES-256 (govt standard) | AES-256 zero-knowledge |
| Legal validity of stored docs | ✓ (govt-issued) | Reference copies |
| Cost | Free | Free tier + paid plans |
| India-hosted | ✓ | ✓ |
| DPDP 2023 compliant | ✓ | ✓ |

## The Right Way to Use Both

**DigiLocker for:**
- Your Aadhaar, PAN, driving licence, vehicle RC
- Degree certificates and mark sheets
- Documents you need to show at traffic stops, banks, or government offices

**Soult for:**
- Your Will, property papers, insurance policies
- Bank account documentation with nominee details
- Asset organisation and family legacy planning
- Executor and nominee management
- Medical wishes and health directives
- Personal letters and voice messages for your family
- Everything your family needs after you are gone

## A Practical Example

Priya, 38, has the following documents:

| Document | Where to Store |
|---|---|
| Aadhaar card | DigiLocker (fetch from UIDAI) |
| Driving licence | DigiLocker (fetch from Parivahan) |
| Vehicle RC | DigiLocker (fetch from Parivahan) |
| Class 12 marksheet | DigiLocker (fetch from board) |
| Will (registered) | Soult (upload scan) |
| LIC policy bond | Soult (upload scan) |
| SBI account details + nominee | Soult (document with details) |
| Property sale deed | Soult (upload scan) |
| Letter to her children | Soult (personal document) |
| Medical wishes | Soult (health directive) |

This is the optimal setup. Each platform does what it is built for.

## What About Google Drive or Dropbox?

Neither is designed for this purpose. They lack:
- Nominee and executor access controls
- Event-based access triggers
- Audit trails
- Zero-knowledge encryption
- Guided executor workflow

Using Google Drive for legacy documents is like keeping your Will in a shared office folder — technically possible, but not secure or structured for the purpose.

## The Verdict

Use DigiLocker for government documents. Use Soult for your family's legacy. They are complementary, not competing. Together, they represent a complete digital document strategy for an Indian family.

The documents in DigiLocker prove who you are. The documents in Soult ensure your family knows what to do after you are gone.`
  },

  {
    title: "How to Claim EPF After Death of Employee in India — Complete Guide",
    slug: "how-to-claim-epf-after-death-of-employee-india",
    excerpt: "When an EPF member passes away, their family can claim the PF balance, pension, and insurance benefit. Here's the complete, step-by-step process for 2025 — with every form you need.",
    author: "Soult Digital",
    tags: ["EPF", "Death Claim", "How To", "Family"],
    published_at: daysAgo(8),
    content: `## What Your Family Can Claim from EPFO

When an EPF member dies, their family or nominee is entitled to three separate benefits:

1. **EPF balance** — the accumulated provident fund balance (employee + employer contributions + interest)
2. **EPS pension** — if the deceased was a member of the Employees' Pension Scheme, their nominee/family may be entitled to a pension
3. **EDLI insurance** — Employees' Deposit Linked Insurance — a death benefit ranging from ₹2.5 lakh to ₹7 lakh

All three claims are processed by the EPFO (Employees' Provident Fund Organisation). You do not need a lawyer. You do need the right forms and documents.

## Who Can Claim the EPF Death Benefit?

### If a Nominee Was Registered:
The registered nominee is the first claimant. They receive the EPF balance and insurance benefit directly.

### If No Nominee Was Registered:
The legal heirs (spouse, children, parents) can claim. They must submit a joint declaration or obtain a legal heir certificate from the appropriate authority.

### For EPS Pension:
The spouse is the primary beneficiary for widow/widower pension. Children under 25 are entitled to children's pension. If there is no spouse or eligible children, parents may be entitled to orphan pension.

## Documents Required

### From the Deceased's Family:
- Death certificate (original + copies)
- Aadhaar card of the deceased (copy)
- Aadhaar card of the claimant/nominee (original + copy)
- PAN card of claimant
- Cancelled cheque or bank passbook (claimant's account — must be in claimant's name)
- Passport-size photograph of claimant

### From the Employer (Last Employer):
- Form 10-C (EPS claim) — to be filled and signed by employer
- Form 20 (EPF withdrawal by nominee/legal heir) — to be signed by employer
- Form 5 IF (EDLI insurance claim) — to be filled and signed by employer

Contact the HR department of the deceased's last employer immediately. They will help fill the employer sections.

### Additional Documents (if applicable):
- Marriage certificate (for spouse claimant)
- Birth certificate of children (for minor children claims)
- Guardianship certificate (if claiming on behalf of a minor)
- Legal heir certificate (if no nominee registered — obtain from tehsildar or municipality)

## The Three Forms You Need

### Form 20 — EPF Balance Claim
This form is used to withdraw the EPF balance on death of the member. It must be filled by the nominee/legal heir and countersigned by the employer.

**Download:** Available on the EPFO member portal and employer portal.

### Form 10-C — EPS Pension Claim
This form claims the pension benefit. If the deceased had less than 10 years of service, the nominee receives a withdrawal benefit. If 10+ years, the spouse gets a monthly widow pension.

### Form 5 IF — EDLI Insurance Claim
This claims the insurance benefit. The maximum benefit is ₹7 lakh (calculated based on salary). The minimum is ₹2.5 lakh.

## Step-by-Step Claim Process

### Step 1: Notify the Last Employer
Contact the HR department immediately. Inform them of the death and request that they:
- Provide the UAN and member ID of the deceased
- Fill and sign the employer sections of Forms 20, 10-C, and 5 IF
- Issue the last salary certificate

### Step 2: Gather All Documents
Collect all documents listed above. Get multiple certified copies of the death certificate.

### Step 3: Activate the UAN (If Not Active)
The nominee may need to activate the deceased member's UAN to check the balance and verify the nomination. Contact the EPFO helpdesk (1800-118-005) for assistance.

### Step 4: Verify Nomination Online
Log into the EPFO member portal (if you have the UAN and password, or can access via Aadhaar OTP) and check the nomination details. This tells you whether you are the registered nominee or if you need a legal heir certificate.

### Step 5: Submit Claim Forms

**If the employer is cooperative (most common):**
Submit all three forms along with supporting documents to the Regional EPFO office covering the deceased's last place of employment. The employer may also submit on your behalf.

**If the employer is not reachable (company closed, etc.):**
Submit directly to the EPFO regional office with a self-certification of employment. The EPFO has a process for orphan accounts (where the employer is not accessible).

### Step 6: Follow Up
The EPFO settlement timeline is 20 days for claims with all documents in order. If delayed:
- File a grievance at **epfigms.gov.in**
- Contact the regional EPFO helpdesk

## EDLI Insurance — Do Not Miss This

Many families claim the EPF balance but forget the EDLI insurance. This is a separate claim (Form 5 IF) and can provide up to ₹7 lakh. It must be claimed separately — it is not automatically included with the EPF balance claim.

The EDLI benefit applies if the deceased was an active EPF member at the time of death (employed and contributing). It does not apply if the member had already withdrawn the PF or was not employed.

## Tax Treatment of EPF Death Claims

EPF withdrawals received by nominees on death of the account holder are **tax-free** in India. There is no TDS on EPF death claims.

## Pension for the Family

If the deceased had completed 10 years of service in an EPS-covered establishment:
- **Widow pension** — spouse receives a monthly pension (minimum ₹1,000/month, actual amount based on salary and service)
- **Children pension** — each child under 25 gets 25% of the widow pension amount
- **Orphan pension** — if spouse is also deceased, children get 75% of widow pension

Pension claims are made through Form 10-D and are processed by the regional EPFO office.

## Store All EPF Information in Your Soult Vault

To help your family avoid weeks of detective work when the time comes:
- Store your UAN number, member ID, and last employer's HR contact
- Upload your EPF passbook screenshot (updated annually)
- Note your registered nominee's name
- Store the claim forms as reference documents so your family knows what is needed

The EPF death claim process is manageable. With the right documents and the right information, a family can complete the process in 4–6 weeks. Without it, it can take years.`
  },

  {
    title: "HDFC Bank FD Nominee Update — Online and Branch Process 2025",
    slug: "hdfc-bank-fd-nominee-update-online-branch-2025",
    excerpt: "An Fixed Deposit without a nominee forces your family to go to court. Here's how to add or update a nominee on your HDFC FD — online in minutes or at the branch.",
    author: "Soult Digital",
    tags: ["HDFC", "Fixed Deposit", "Nomination", "Banking"],
    published_at: daysAgo(10),
    content: `## The Fixed Deposit Most Families Forget

Bank accounts get nominees. Insurance policies get nominees. But fixed deposits — where many Indian families keep their most significant savings — are frequently overlooked.

A Fixed Deposit without a registered nominee means your family must present a succession certificate to claim the amount. That process takes 6 months to 2 years and costs money in legal fees.

An FD with a registered nominee can be claimed in 15–30 days.

Here is how to update the nominee on your HDFC Bank Fixed Deposit in 2025.

## Three Ways to Update Your HDFC FD Nominee

1. **HDFC Bank NetBanking** (fastest, completely online)
2. **HDFC Mobile Banking app**
3. **Branch visit** (offline, if you prefer)

## Method 1: HDFC NetBanking (Desktop)

### Step 1: Log in
Go to **netbanking.hdfcbank.com** and log in with your customer ID and password.

### Step 2: Navigate to Fixed Deposits
From the top menu, click **Accounts → Fixed & Recurring Deposits → View All Fixed Deposits**.

### Step 3: Select the FD
Click on the FD for which you want to update the nominee. This opens the FD details page.

### Step 4: Update Nomination
Look for **"Nomination Details"** or **"Update Nominee"** on the FD details page. Click it.

If no nominee is registered, click **"Add Nominee"**.
If a nominee exists and you want to update, click **"Modify Nominee"**.

### Step 5: Enter Nominee Details
Fill in:
- Nominee's full name
- Date of birth
- Relationship to you
- Address
- If the nominee is a minor: guardian's name, relationship, and address

### Step 6: Authenticate
Confirm with OTP sent to your registered mobile number.

### Step 7: Confirmation
You will see a confirmation message. Download or screenshot this and save it in your Soult vault.

**Note:** If the option to update nominee is not visible in NetBanking, HDFC may require a branch visit for that particular FD type (some older FDs require in-person updates).

## Method 2: HDFC Mobile Banking App

### Step 1: Open the HDFC Bank app
Log in with your MPIN or biometric.

### Step 2: Go to Deposits
Tap **Deposits → Fixed Deposits** from the home screen menu.

### Step 3: Select the FD
Tap on the FD you want to update.

### Step 4: Nomination
Look for **"Nomination"** in the FD detail screen. Tap **"Update Nomination"** or **"Add Nominee"**.

### Step 5: Fill and Confirm
Enter nominee details and authenticate with OTP.

## Method 3: Branch Visit

If you prefer or the online option is not available for your FD:

**Bring:**
- Original FD receipt (if issued as a physical document)
- Your identity proof (Aadhaar/PAN/Passport)
- Nominee's identity proof copy
- Filled **Form DA-1** (Nomination form — available at the branch)

**At the branch:**
- Surrender the form to the customer service desk
- The branch officer will process the nomination and stamp the FD receipt or issue an acknowledgement

## Multiple FDs — Check Each One Separately

If you hold multiple Fixed Deposits with HDFC (or any bank), each FD has its own separate nomination. Adding a nominee to your savings account does not automatically cover your FDs.

Go through each FD individually and verify:
- Is a nominee registered?
- Is the nominee still alive?
- Is the nominee's information current and correct?

## Cumulative vs Non-Cumulative FDs

Both types can have nominees. The nomination update process is the same regardless of the FD type.

## What Happens When the Nominee Claims the FD

When the FD holder passes away, the nominee approaches the HDFC branch with:
- Their own identity proof and photograph
- Death certificate of the FD holder
- Original FD receipt (if physical)
- Claim form (available at the branch)

HDFC processes the claim and pays the maturity amount (plus accrued interest) directly to the nominee. The process typically takes 15–20 working days.

If the nominee is a minor, the guardian appointed at nomination time receives the amount on the minor's behalf.

## Joint FDs and Nomination

For joint FDs, the nomination applies only when all joint holders are deceased. If one joint holder passes away, the surviving holder continues the FD as the sole holder.

When the last surviving holder passes, the registered nominee claims the maturity value.

## FDs at Other Banks

The nomination update process is similar across all banks — SBI, ICICI, Axis, Kotak, and others. The specific steps differ but the principle is the same: log in to NetBanking or visit the branch, navigate to your FD, and add or update the nominee.

Check all your FDs across all banks. Create a list and verify nomination status for each one.

## Document Everything in Your Soult Vault

After updating the nominee on every FD:
1. Download the nomination confirmation from NetBanking
2. Upload it to your Soult vault alongside the FD receipt
3. Note: bank name, FD number, amount, maturity date, nominee name
4. Tell your nominee which bank to approach and what documents to bring

A nominee who knows they are nominated, has the FD receipt, and knows which branch to visit can complete the claim in 2–3 weeks. A nominee who discovers the FD exists months after the fact faces a much longer process.

The 10 minutes you spend on this today is one of the highest-value financial actions you can take for your family.`
  },
];

async function seed() {
  console.log(`Seeding ${ARTICLES.length} blog articles...`);

  for (const article of ARTICLES) {
    const now = new Date().toISOString();
    const payload = {
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      author: article.author,
      tags: article.tags,
      published: true,
      published_at: article.published_at,
      created_at: now,
      updated_at: now,
    };

    const { error } = await supabase
      .from("blog_posts")
      .upsert(payload, { onConflict: "slug" });

    if (error) {
      console.error(`❌ Failed: ${article.slug}`, error.message);
    } else {
      console.log(`✅ Published: ${article.title}`);
    }
  }

  console.log("\nDone.");
}

seed().catch(console.error);
