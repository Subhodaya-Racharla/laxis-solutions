import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Section, List, ContactBlock } from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Data Deletion — Laxis Solutions",
  description:
    "How to delete your data from Laxis Solutions, including data received through Instagram.",
  alternates: { canonical: "https://laxis.solutions/data-deletion" },
};

const mailSubject = encodeURIComponent("Data deletion request");
const mailBody = encodeURIComponent(
  "Hi Laxis Solutions,\n\nPlease delete all data you hold about me.\n\nName:\nInstagram username (if applicable):\nPhone or email used with you:\n\nThank you."
);

export default function DataDeletionPage() {
  return (
    <LegalPage
      title="Data Deletion Instructions"
      intro={`You can ask ${BUSINESS.name} to delete your personal data at any time. This page explains how, for clients, website visitors, users of our Instagram automation tools, and people who received a message from an account that uses our tools.`}
    >
      <Section title="Option 1: Remove our app from Instagram">
        <p>If you connected your Instagram account to one of our tools:</p>
        <List
          items={[
            "Open Instagram and go to Settings and privacy.",
            "Tap Website permissions → Apps and websites.",
            "Find our app under Active and tap Remove.",
          ]}
        />
        <p>
          When you remove the app, Meta notifies us. We then stop all automations for your
          account and delete your access tokens, automation settings and related logs within
          30 days.
        </p>
      </Section>

      <Section title="Option 2: Disconnect or delete your account in our app">
        <p>
          In your dashboard, choose Disconnect Instagram to remove your Instagram connection,
          or Delete account to remove your account and all associated data. Deletion is
          completed within 30 days.
        </p>
      </Section>

      <Section title="Option 3: Email us">
        <p>
          Send a deletion request to{" "}
          <a
            href={`mailto:${BUSINESS.email}?subject=${mailSubject}&body=${mailBody}`}
            className="text-[#818cf8] hover:text-white underline"
          >
            {BUSINESS.email}
          </a>{" "}
          with the subject &quot;Data deletion request&quot;. Include:
        </p>
        <List
          items={[
            "Your name.",
            "Your Instagram username, if your request relates to Instagram.",
            "The phone number or email you used with us.",
          ]}
        />
        <p>
          We may ask you to confirm your identity before deleting data. We will confirm by
          email once deletion is complete, within 30 days of your request.
        </p>
      </Section>

      <Section title="If you received a message from an account using our tools">
        <p>
          If you commented on a creator&apos;s post and received an automated reply, we may hold
          your Instagram-scoped ID, username and comment text for up to 90 days. You can ask us
          to delete it sooner using Option 3 above.
        </p>
      </Section>

      <Section title="What we delete and what we keep">
        <List
          items={[
            "Deleted: account details, Instagram access tokens, automation settings, comment and message logs, and enquiry data.",
            "Kept only where required by law: invoices and payment records that Indian tax and accounting laws require us to retain.",
          ]}
        />
        <p>
          Read our{" "}
          <Link href="/privacy" className="text-[#818cf8] hover:text-white underline">
            Privacy Policy
          </Link>{" "}
          for more details.
        </p>
      </Section>

      <Section title="Contact">
        <ContactBlock />
      </Section>
    </LegalPage>
  );
}
