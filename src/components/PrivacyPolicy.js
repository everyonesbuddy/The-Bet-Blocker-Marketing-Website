import React from "react";
import Footer from "./Footer";
import "../css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: January 2025</p>
      </div>
      <div className="privacy-content">
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Bet Blocker. Your privacy is critically important to us.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our browser extension and
            associated services. By using Bet Blocker, you agree to the terms of
            this Privacy Policy.
          </p>
          <p>
            If you have any questions or concerns about this policy, please
            contact us at{" "}
            <a href="mailto:info@betblocker.com">info@betblocker.com</a>.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect minimal personal data to provide and improve our
            services. The information we collect includes:
          </p>
          <h3>a. Information You Provide</h3>
          <ul>
            <li>
              <strong>Contact Information:</strong> When you contact us for
              support or inquiries, we may collect your email address and other
              information you provide.
            </li>
            <li>
              <strong>Payment Information:</strong> When you purchase additional
              unblock codes, payment information is processed securely via
              third-party payment processors. Bet Blocker does not store this
              information.
            </li>
          </ul>
          <h3>b. Automatically Collected Information</h3>
          <ul>
            <li>
              Browser Data: We may collect anonymized browser usage data to
              improve the extension's performance and compatibility.
            </li>
            <li>
              Device Information: Information such as your device type,
              operating system, and browser version may be collected to
              troubleshoot issues and enhance the user experience.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Operate and maintain Bet Blocker.</li>
            <li>
              Provide you with 3 free daily unblocks and manage the timer for
              paid unblock codes.
            </li>
            <li>Process payments securely.</li>
            <li>
              Communicate with you regarding support, updates, or promotional
              offers.
            </li>
            <li>
              Analyze anonymized data to improve Bet Blocker’s functionality and
              performance.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Sharing Your Information</h2>
          <p>We only share your data in limited circumstances:</p>
          <h3>a. Third-Party Service Providers</h3>
          <p>
            We work with trusted third-party service providers to process
            payments and manage our website and browser extension. These
            providers are contractually obligated to safeguard your information
            and use it only for services we request.
          </p>
          <h3>b. Legal Requirements</h3>
          <p>
            We may disclose your information if required by law or in response
            to valid legal requests (e.g., court orders or subpoenas).
          </p>
          <h3>c. Anonymized Data</h3>
          <p>
            Aggregated, anonymized usage data may be shared for analytics and
            performance improvements. This data cannot be used to identify you.
          </p>
        </section>

        <section>
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            Bet Blocker does not use cookies or tracking technologies within the
            browser extension itself. However, our website may use cookies for
            functionality, analytics, or marketing purposes. You can manage
            cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to fulfill the
            purposes outlined in this Privacy Policy:
          </p>
          <ul>
            <li>
              Payment data is handled securely by our payment processors and is
              not stored by us.
            </li>
            <li>
              Contact and support records are retained for customer service
              purposes.
            </li>
          </ul>
          <p>
            If you wish to request deletion of your information, contact us at
            <a href="mailto:info@betblocker.com"> info@betblocker.com</a>.
          </p>
        </section>

        <section>
          <h2>6. Security of Your Information</h2>
          <p>
            We take reasonable steps to protect your information from
            unauthorized access, use, or disclosure. This includes encryption,
            secure servers, and compliance with industry best practices.
          </p>
        </section>

        <section>
          <h2>7. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul>
            <li>Access: Request access to the data we collect about you.</li>
            <li>
              Correction: Request corrections to any inaccuracies in your data.
            </li>
            <li>Deletion: Request deletion of your personal data.</li>
            <li>
              Withdrawal of Consent: Withdraw consent where data processing is
              based on your consent.
            </li>
          </ul>
          <p>
            To exercise these rights, email us at{" "}
            <a href="mailto:info@betblocker.com">info@betblocker.com</a>.
          </p>
        </section>

        <section>
          <h2>8. Payment Processing</h2>
          <p>
            When you purchase additional unblock codes, your payment information
            is securely processed by third-party payment processors (e.g.,
            Stripe, PayPal). We do not store or have access to your credit card
            or payment details.
          </p>
        </section>

        <section>
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this page periodically for updates. If significant changes
            are made, we will notify you via the extension or email.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:info@betblocker.com">info@betblocker.com</a>
            </li>
            <li>
              Website:{" "}
              <a href="https://www.betblocker.com">
                https://www.betblocker.com
              </a>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
