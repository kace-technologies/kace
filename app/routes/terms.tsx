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
  smallTextStyle,
} from "./policyStyles";

export const meta: MetaFunction = () => [
  { title: "Terms of Service — Kace Technologies" },
  { name: "description", content: "Terms of service for Kace Technologies. Review our terms before using our services." },
];

export default function TermsOfService() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        accent="Kace"
        description="These terms govern your use of our website and services. Please read them carefully."
        accentColor="var(--cyan)"
      />

      <section style={sectionStyle}>
        <div style={contentStyle}>
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h2 style={headingStyle}>1. Acceptance of Terms</h2>
            <p style={paragraphStyle}>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>2. Use License</h2>
            <p style={paragraphSpacingStyle}>
              Permission is granted to temporarily download one copy of the materials (information or software) on Kace Technologies's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul style={listStyle}>
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </div>

          <div>
            <h2 style={headingStyle}>3. Disclaimer</h2>
            <p style={paragraphStyle}>
              The materials on Kace Technologies's website are provided on an 'as is' basis. Kace Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>4. Limitations</h2>
            <p style={paragraphStyle}>
              In no event shall Kace Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kace Technologies's website, even if Kace Technologies or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>5. Accuracy of Materials</h2>
            <p style={paragraphStyle}>
              The materials appearing on Kace Technologies's website could include technical, typographical, or photographic errors. Kace Technologies does not warrant that any of the materials on its website are accurate, complete, or current. Kace Technologies may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>6. Links</h2>
            <p style={paragraphStyle}>
              Kace Technologies has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kace Technologies of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>7. Modifications</h2>
            <p style={paragraphStyle}>
              Kace Technologies may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>8. Governing Law</h2>
            <p style={paragraphStyle}>
              These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
