import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Section, List, ContactBlock } from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service — Laxis Solutions",
  description:
    "Terms for using Laxis Solutions' website, web design and development services, and software products including Instagram automation tools.",
  alternates: { canonical: "https://laxis.solutions/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These Terms of Service ("Terms") govern your use of ${BUSINESS.website}, the web design and development services provided by ${BUSINESS.name}, and our software products, including our Instagram automation tools (together, the "Services"). By using the Services, you agree to these Terms.`}
    >
      <Section title="1. About us">
        <p>
          The Services are provided by {BUSINESS.name}, a sole proprietorship registered in
          India (Udyam Registration No. {BUSINESS.udyam}), owned by {BUSINESS.owner}.
        </p>
      </Section>

      <Section title="2. Web design and development services">
        <List
          items={[
            "The scope, price, timeline and number of revisions for each project are as listed on our website or agreed with you in writing, including over WhatsApp or email.",
            "Delivery timelines start once we receive the content and details needed from you. Delays in providing content may delay delivery.",
            "Unless agreed otherwise, an advance payment is required to start work and the balance is due before the website goes live.",
            "Work outside the agreed scope is charged separately.",
            "Domain, hosting and third-party service costs are your responsibility unless included in your plan.",
            "Once paid in full, you own the final website content and design delivered to you. We may show the project in our portfolio unless you ask us not to.",
            "You confirm that all content you give us, such as text, images and logos, is yours or that you have the right to use it.",
          ]}
        />
      </Section>

      <Section title="3. Software products and Instagram automation">
        <p>
          Our software products let you connect an Instagram professional account and set up
          automations, such as sending a private message to people who comment a keyword on
          your posts or reels. When using these products you agree that:
        </p>
        <List
          items={[
            "You will connect only Instagram accounts that you own or are authorised to manage.",
            "You will follow Instagram's Terms of Use, Community Guidelines and Meta's policies, including messaging rules and limits.",
            "You will not use the Services to send spam, misleading or harmful content, or messages to people who did not interact with your content.",
            "You are responsible for the messages, links and content you set up in your automations.",
            "Features depend on Meta's API. Instagram may limit, change or stop features at any time, and we cannot guarantee that every message will be delivered.",
            "We may suspend accounts that break these Terms or put the Services or other users at risk.",
          ]}
        />
      </Section>

      <Section title="4. Accounts">
        <p>
          You must provide accurate information, keep your login secure, and tell us about any
          unauthorised use of your account. You are responsible for activity on your account.
          You must be at least 18 years old to use our software products.
        </p>
      </Section>

      <Section title="5. Fees and payments">
        <List
          items={[
            "Prices are shown in Indian Rupees unless stated otherwise. Applicable taxes may be added.",
            "Paid plans for software products renew automatically for the same period unless you cancel before the renewal date.",
            "Payments are processed by third-party payment providers.",
            "Except where required by law or stated otherwise in writing, fees already paid are non-refundable. For web design projects, advance payments are non-refundable once work has started.",
          ]}
        />
      </Section>

      <Section title="6. Acceptable use">
        <p>You must not:</p>
        <List
          items={[
            "Use the Services for anything illegal, fraudulent or harmful.",
            "Try to access other users' data or our systems without permission.",
            "Reverse engineer, copy or resell our software without written permission.",
            "Overload, disrupt or attack the Services.",
          ]}
        />
      </Section>

      <Section title="7. Intellectual property">
        <p>
          Our software, branding, templates and website remain our property. You receive a
          limited, non-transferable right to use our software products while your account is
          active. Your content stays yours; you give us permission to use it only to provide
          the Services.
        </p>
      </Section>

      <Section title="8. Privacy">
        <p>
          Our{" "}
          <Link href="/privacy" className="text-[#818cf8] hover:text-white underline">
            Privacy Policy
          </Link>{" "}
          explains how we handle personal data. You can ask us to delete your data using the
          steps on our{" "}
          <Link href="/data-deletion" className="text-[#818cf8] hover:text-white underline">
            Data Deletion page
          </Link>
          .
        </p>
      </Section>

      <Section title="9. Disclaimers and limitation of liability">
        <p>
          The Services are provided &quot;as is&quot; and &quot;as available&quot;. We do not
          guarantee that they will be uninterrupted, error-free, or produce any particular
          business result, such as sales, leads or followers.
        </p>
        <p>
          To the extent allowed by law, we are not liable for indirect or consequential losses,
          including lost profits, lost data or business interruption. Our total liability for
          any claim is limited to the amount you paid us for the relevant Service in the 3
          months before the claim.
        </p>
      </Section>

      <Section title="10. Termination">
        <p>
          You can stop using the Services and delete your account at any time. We may suspend
          or end access if you break these Terms. Sections that by their nature should continue
          after termination, such as payment, liability and governing law, will continue.
        </p>
      </Section>

      <Section title="11. Changes to these Terms">
        <p>
          We may update these Terms. The &quot;Last updated&quot; date shows when they last
          changed. Continuing to use the Services after a change means you accept the updated
          Terms.
        </p>
      </Section>

      <Section title="12. Governing law">
        <p>
          These Terms are governed by the laws of India. Courts in Andhra Pradesh, India have
          jurisdiction over any disputes, subject to applicable law.
        </p>
      </Section>

      <Section title="13. Contact">
        <ContactBlock />
      </Section>
    </LegalPage>
  );
}
