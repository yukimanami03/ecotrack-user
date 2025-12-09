import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-page-container">
      <div className="terms-header">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: December 1, 2025</p>
      </div>

      <div className="terms-card">
        <div className="terms-content">
          <p className="intro-text">
            Welcome to EcoTrack. By accessing or using our website and mobile application, you agree
            to be bound by these Terms of Service.
          </p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using EcoTrack, you agree to comply with and be bound by these Terms. If you do not
              agree to these Terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2>2. User Conduct</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Submit false or misleading environmental reports.</li>
              <li>Harass, abuse, or harm another person or group.</li>
              <li>Upload malicious code or viruses.</li>
              <li>Attempt to gain unauthorized access to our systems.</li>
            </ul>
          </section>

          <section>
            <h2>3. User Content</h2>
            <p>
              You retain ownership of the photos and descriptions you submit. However, by submitting content, you
              grant EcoTrack a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your
              content in connection with the Service.
            </p>
          </section>

          <section>
            <h2>4. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at our sole discretion, without notice, for
              conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any
              other reason.
            </p>
          </section>

          <section>
            <h2>5. Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" and "as available" without warranties of any kind, either express or
              implied.
            </p>
          </section>

          <section>
            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall EcoTrack be liable for any indirect, incidental, special, consequential, or punitive
              damages arising out of or related to your use of the Service.
            </p>
          </section>

          <hr className="terms-divider" />

          <section className="contact-section">
            <p>
              Questions about the Terms of Service should be sent to us at <a href="mailto:legal@ecotrack.org">legal@ecotrack.org</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;