import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: December 1, 2025</p>
      </div>

      <div className="privacy-card">
        <div className="privacy-content">
          <p>
            At EcoTrack, we take your privacy seriously. This policy describes how we collect, use, and handle your data when you use our environmental tracking services.
          </p>

          <section>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, submit a report, or contact customer support. This may include:
            </p>
            <ul>
              <li>Account information (name, email address, password)</li>
              <li>Profile information (profile photo, bio)</li>
              <li>Report data (photos, geolocation data, descriptions)</li>
              <li>Communications (feedback, support queries)</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, including:
            </p>
            <ul>
              <li>Verifying and displaying environmental reports</li>
              <li>Analyzing trends in pollution and waste</li>
              <li>Communicating with you about updates and community events</li>
              <li>Preventing fraud and abuse of our platform</li>
            </ul>
          </section>

          <section>
            <h2>3. Location Information</h2>
            <p>
              EcoTrack is a location-based service. When you submit a report, we collect the precise location of the issue to display it on our public map. You can control location permissions through your device settings.
            </p>
          </section>

          <section>
            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share aggregated, non-personally identifiable data with:
            </p>
            <ul>
              <li>Local municipalities for cleanup coordination</li>
              <li>Environmental research organizations</li>
              <li>Partner NGOs working on conservation</li>
            </ul>
          </section>

          <section>
            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@ecotrack.org">privacy@ecotrack.org</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;