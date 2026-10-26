import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Section, List, ContactBlock } from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy — Laxis Solutions",
  description:
    "How Laxis Solutions collects, uses, stores and deletes personal data, including data from Instagram through our automation tools.",
  alternates: { canonical: "https://laxis.solutions/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This Privacy Policy explains how ${BUSINESS.name} ("we", "us", "our") collects, uses, shares and protects personal data when you visit ${BUSINESS.website}, contact us, hire us for web design and development, or use our software products, including our Instagram automation tools. We process personal data in line with India's Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.`}
    >
      <Section title="1. Who we are">
        <p>
          {BUSINESS.name} is a sole proprietorship registered in India (Udyam Registration
          No. {BUSINESS.udyam}). We build websites and software for businesses and creators.
          You can contact us using the details at the end of this policy.
        </p>
      </Section>

      <Section title="2. Data we collect">
        <p className="text-white font-medium">a) When you contact us or hire us</p>
        <List
          items={[
            "Your name, business name, phone or WhatsApp number and email address.",
            "The service you are interested in and any message you send us.",
            "Content you share for your project, such as text, images, logos and product details.",
            "Billing details needed to issue invoices and receive payments. Payments are processed by third-party payment providers; we do not store your card or bank account numbers.",
          ]}
        />

        <p className="text-white font-medium pt-2">
          b) When you use our Instagram automation tools
        </p>
        <p>
          Our tools connect to Instagram only through Meta&apos;s official Instagram API, and
          only after you log in with Instagram and grant permission. We receive and store:
        </p>
        <List
          items={[
            "Your Instagram professional account ID, username and profile name.",
            "Access tokens issued by Meta, stored encrypted, used only to run the automations you set up.",
            "Your automation settings: selected posts or reels, trigger keywords, message text and links.",
            "IDs of your posts and reels that you choose to automate.",
          ]}
        />
        <p>
          When someone comments on a post or reel you have automated, Meta sends us that
          comment. For each such comment we process the commenter&apos;s Instagram-scoped ID
          and username, the comment text and its ID, and a record of whether a reply was sent.
          We use this only to check for your trigger keyword and send the reply you configured.
        </p>

        <p className="text-white font-medium pt-2">c) When you browse this website</p>
        <List
          items={[
            "Basic technical information such as browser type, device and pages visited, collected by our hosting provider for security and performance.",
            "We do not use advertising cookies or sell browsing data.",
          ]}
        />
      </Section>

      <Section title="3. How we use your data">
        <List
          items={[
            "To respond to enquiries and provide the services you ask for.",
            "To build, host and maintain websites and software for our clients.",
            "To run the Instagram automations you configure, such as sending a private reply to people who comment a keyword.",
            "To show you activity in your dashboard, such as how many replies were sent.",
            "To keep our services secure, prevent abuse and fix problems.",
            "To meet legal, tax and accounting obligations.",
          ]}
        />
        <p>
          We do not sell personal data. We do not use data received from Instagram for
          advertising, profiling or any purpose other than providing the features you
          enabled, and we follow Meta&apos;s Platform Terms and Developer Policies.
        </p>
      </Section>

      <Section title="4. Who we share data with">
        <p>We share data only with service providers that help us run our services:</p>
        <List
          items={[
            "Meta Platforms (Instagram), to send replies and messages you have configured.",
            "Vercel, for website and application hosting.",
            "Supabase, for database storage.",
            "Payment providers such as Razorpay, when you pay us.",
            "Email delivery providers, for account and service emails.",
          ]}
        />
        <p>
          These providers process data on our behalf. Some may store data outside India with
          appropriate safeguards. We may also disclose data if required by law or a valid
          order from a government authority.
        </p>
      </Section>

      <Section title="5. How long we keep data">
        <List
          items={[
            "Enquiries and leads: up to 2 years, unless you become a client.",
            "Client project and invoice records: as long as required by Indian tax and accounting laws.",
            "Instagram access tokens and automation settings: until you disconnect your account, delete your account, or remove our app from your Instagram settings.",
            "Comment and reply logs from automations: up to 90 days, then deleted automatically.",
          ]}
        />
      </Section>

      <Section title="6. Security">
        <p>
          We use HTTPS for all traffic, encrypt access tokens at rest, restrict database access
          to authorised systems, and give each user access only to their own data. No method
          of storage or transmission is completely secure, but we work to protect your data and
          will notify you as required by law if a breach affects you.
        </p>
      </Section>

      <Section title="7. Your rights">
        <p>Subject to applicable law, you can:</p>
        <List
          items={[
            "Access the personal data we hold about you.",
            "Correct inaccurate or incomplete data.",
            "Withdraw consent, for example by disconnecting your Instagram account.",
            "Ask us to delete your data.",
            "Raise a grievance with us, and if unresolved, with the Data Protection Board of India.",
          ]}
        />
        <p>
          To delete your data, follow the steps on our{" "}
          <Link href="/data-deletion" className="text-[#818cf8] hover:text-white underline">
            Data Deletion page
          </Link>
          . We respond to requests within 30 days.
        </p>
      </Section>

      <Section title="8. Children">
        <p>
          Our services are not directed at children under 18, and we do not knowingly collect
          their personal data. If you believe a child has given us personal data, contact us
          and we will delete it.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date at the
          top shows when it last changed. Significant changes will be communicated on this
          page or by email to active users.
        </p>
      </Section>

      <Section title="10. Contact and grievance officer">
        <p>
          For privacy questions, requests or complaints, contact our grievance officer,{" "}
          {BUSINESS.owner}:
        </p>
        <ContactBlock />
      </Section>
    </LegalPage>
  );
}
