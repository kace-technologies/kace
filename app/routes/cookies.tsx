import type { MetaFunction } from "react-router";
import PageHero from "~/components/PageHero";
import {
  sectionStyle,
  contentStyle,
  headingStyle,
  paragraphStyle,
  paragraphSpacingStyle,
  listStyle,
  featureListStyle,
  subheadingStyle,
  dividerStyle,
  linkStyle,
  smallTextStyle,
} from "./policyStyles";

export const meta: MetaFunction = () => [
  { title: "Cookie Policy — Kace Technologies" },
  { name: "description", content: "Cookie policy for Kace Technologies. Learn how we use cookies and similar technologies." },
];

export default function CookiePolicy() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Cookie Policy"
        accent="Kace"
        description="This policy explains what cookies are and how we use them on our website."
        accentColor="var(--cyan)"
      />

      <section style={sectionStyle}>
        <div style={contentStyle}>
          <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <h2 style={headingStyle}>1. What Are Cookies?</h2>
            <p style={paragraphStyle}>
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site. Cookies allow us to recognize you and remember your preferences.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>2. Types of Cookies We Use</h2>
            <p style={paragraphSpacingStyle}>
              We use the following types of cookies on our website:
            </p>
            <div style={featureListStyle}>
              <div>
                <h3 style={subheadingStyle}>Essential Cookies</h3>
                <p style={paragraphStyle}>
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. These cookies cannot be disabled without affecting site functionality.
                </p>
              </div>
              <div>
                <h3 style={subheadingStyle}>Performance Cookies</h3>
                <p style={paragraphStyle}>
                  These cookies collect information about how you use our website, such as which pages you visit and if you encounter any errors. This information is used solely to help us improve the performance and design of our website.
                </p>
              </div>
              <div>
                <h3 style={subheadingStyle}>Functional Cookies</h3>
                <p style={paragraphStyle}>
                  These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personalized features.
                </p>
              </div>
              <div>
                <h3 style={subheadingStyle}>Marketing Cookies</h3>
                <p style={paragraphStyle}>
                  These cookies are used to track visitors across websites and display relevant advertising. We only use these cookies if you have consented to their use.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 style={headingStyle}>3. Third-Party Cookies</h2>
            <p style={paragraphStyle}>
              Some cookies on our website are set by third parties to provide analytics, advertising, and other services. These include cookies from Google Analytics and other analytics providers that help us understand how users interact with our website.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>4. How Long Do Cookies Last?</h2>
            <p style={paragraphStyle}>
              Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a specified period or until you delete them. The duration varies depending on the purpose of the cookie.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>5. Your Cookie Choices</h2>
            <p style={paragraphSpacingStyle}>
              You can control and manage cookies in several ways:
            </p>
            <ul style={listStyle}>
              <li>Browser settings: Most web browsers allow you to refuse cookies or alert you when cookies are being sent</li>
              <li>Cookie preferences: You can manage your cookie preferences on our website</li>
              <li>Opt-out tools: You can use industry opt-out tools to disable tracking cookies</li>
            </ul>
            <p style={{ ...paragraphStyle, marginTop: "1rem" }}>
              Please note that disabling cookies may affect the functionality of our website.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>6. Updates to This Policy</h2>
            <p style={paragraphStyle}>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>7. Contact Us</h2>
            <p style={paragraphStyle}>
              If you have questions about our use of cookies or this Cookie Policy, please contact us at{" "}
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
