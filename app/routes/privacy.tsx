import type { MetaFunction } from "react-router";
import PageHero from "~/components/PageHero";
import {
  sectionStyle,
  contentStyle,
  headingStyle,
  paragraphStyle,
  paragraphSpacingStyle,
  listStyle,
  dividerStyle,
  linkStyle,
  smallTextStyle,
} from "./policyStyles";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy — Kace Technologies" },
  { name: "description", content: "Privacy policy for Kace Technologies. Learn how we handle and protect your personal data." },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        accent="Kace"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        accentColor="var(--cyan)"
      />

      <section style={sectionStyle}>
        <div style={contentStyle}>
          <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <h2 style={headingStyle}>1. Information We Collect</h2>
            <p style={paragraphStyle}>
              We collect information you provide directly to us, such as when you fill out a form, send us an email, or contact us through our website. This may include your name, email address, phone number, company name, and any other information you choose to provide.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>2. How We Use Your Information</h2>
            <p style={paragraphSpacingStyle}>
              We use the information we collect to:
            </p>
            <ul style={listStyle}>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraudulent activity and protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 style={headingStyle}>3. Data Security</h2>
            <p style={paragraphStyle}>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>4. Third-Party Sharing</h2>
            <p style={paragraphStyle}>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>5. Your Rights</h2>
            <p style={paragraphSpacingStyle}>
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul style={listStyle}>
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
          </div>

          <div>
            <h2 style={headingStyle}>6. Contact Us</h2>
            <p style={paragraphStyle}>
              If you have questions about this privacy policy or our privacy practices, please contact us at{" "}
              <a href="mailto:hello@kacetech.ng" style={linkStyle}>
                hello@kacetech.ng
              </a>
            </p>
          </div>

          <div style={dividerStyle}>
            <p style={smallTextStyle}>
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
