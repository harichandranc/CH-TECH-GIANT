
import React from "react";
import { motion } from "framer-motion";

const FileConverterPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050b14] text-gray-300 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-400">File Converter</p>

          <p className="text-sm text-gray-500 mt-2">
            Last Updated: November 4, 2026
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-[#0b1422] border border-cyan-500/20 rounded-2xl p-6 md:p-10 shadow-xl"
        >
          {/* Introduction */}
          <section className="mb-10">
            <h2 className="section-title">1. Introduction</h2>

            <p>
              File Converter is a file conversion and file management
              application developed by{" "}
              <strong className="text-white">
                CH TECH GIANT (OPC) PRIVATE LIMITED
              </strong>
              .
            </p>

            <p className="mt-4">
              We respect your privacy and are committed to explaining how
              information is handled when you use File Converter and its
              related services, including file processing and advertising.
            </p>

            <p className="mt-4">
              Please read this Privacy Policy to understand our data
              practices and the role of third-party service providers.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-10">
            <h2 className="section-title">2. Information We Collect</h2>

            <p>
              File Converter does not require you to create an account
              or provide registration details to use its main features.
              However, some features and third-party services may process
              information as described in this policy.
            </p>

            <h3 className="sub-title">2.1 Files You Select</h3>

            <p>
              You may select documents, PDFs, images, videos, audio files,
              text files, and other supported file formats for conversion
              or processing.
            </p>

            <p className="mt-4">
              Some operations are performed directly on your device.
              Certain advanced conversion features may require selected
              files to be transmitted temporarily to our conversion server.
            </p>

            <h3 className="sub-title">2.2 Technical and Advertising Information</h3>

            <p>
              The application and its integrated third-party services may
              process technical information necessary for advertising,
              diagnostics, security, performance, and service operation.
            </p>

            <p className="mt-4">
              Depending on the services and configurations used, this
              information may include:
            </p>

            <ul className="privacy-list">
              <li>IP address</li>
              <li>Device and operating system information</li>
              <li>Application information and diagnostic data</li>
              <li>Network information</li>
              <li>Advertising IDs and other device identifiers</li>
              <li>Ad impressions, clicks, and advertising interactions</li>
              <li>Information used for fraud prevention and ad measurement</li>
            </ul>
          </section>

          {/* File Processing */}
          <section className="mb-10">
            <h2 className="section-title">3. File Processing</h2>

            <p>
              File Converter supports local and server-based file processing,
              depending on the conversion feature you select.
            </p>

            <h3 className="sub-title">3.1 Local Processing</h3>

            <p>
              Where supported, files are processed directly on your device.
              Local processing does not require the file to be uploaded
              to our conversion servers.
            </p>

            <h3 className="sub-title">3.2 Server-Based Processing</h3>

            <p>
              Certain advanced or resource-intensive conversion tools may
              require server-based processing.
            </p>

            <p className="mt-4">
              When you use these features, your selected file may be
              transmitted to our conversion server, processed, and returned
              to your device.
            </p>

            <p className="mt-4">
              Our conversion infrastructure may use software and libraries
              such as FFmpeg, LibreOffice, Sharp, PDF processing libraries,
              and other technologies required for supported conversions.
            </p>
          </section>

          {/* File Storage */}
          <section className="mb-10">
            <h2 className="section-title">4. File Storage and Retention</h2>

            <p>
              Files submitted for server-based conversion are intended
              to be used to complete the requested processing operation.
            </p>

            <p className="mt-4">
              Uploaded files may be stored temporarily on our conversion
              infrastructure while processing takes place. We do not
              intend to retain uploaded files permanently as part of the
              normal conversion process.
            </p>

            <p className="mt-4">
              Temporary files are subject to our server cleanup procedures.
              The actual deletion time may depend on the technical
              implementation and applicable retention requirements.
            </p>

            <p className="mt-4">
              Please avoid uploading highly sensitive or confidential files
              unless you are comfortable with the temporary server processing
              required by the feature you choose.
            </p>
          </section>

          {/* Advertising */}
          <section className="mb-10">
            <h2 className="section-title">
              5. Advertising and Advertising Mediation
            </h2>

            <p>
              File Converter may display advertisements to support the
              application and its services.
            </p>

            <p className="mt-4">
              The application uses{" "}
              <strong className="text-white">Unity LevelPlay</strong>,
              an advertising mediation platform, to manage and serve
              advertisements through supported advertising networks.
            </p>

            <p className="mt-4">
              Our advertising setup may include{" "}
              <strong className="text-white">Unity Ads</strong> and{" "}
              <strong className="text-white">ironSource</strong>,
              depending on the SDK integrations, network adapters,
              and configurations enabled in the application.
            </p>

            <p className="mt-4">
              Depending on the advertising services enabled, your device
              settings, applicable consent choices, and local requirements,
              advertising partners may collect or process information such as:
            </p>

            <ul className="privacy-list">
              <li>Device information and device identifiers</li>
              <li>Advertising ID, where available and permitted</li>
              <li>IP address and approximate location information</li>
              <li>Ad impressions, clicks, and advertising interactions</li>
              <li>Application usage, diagnostics, and performance information</li>
              <li>Information used for advertising measurement and fraud prevention</li>
              <li>Consent and privacy preference signals, where applicable</li>
            </ul>

            <p className="mt-4">
              The specific information processed depends on the SDKs and
              advertising networks enabled, their configuration, your device
              settings, and your privacy choices. We do not control every
              data-processing activity carried out independently by
              third-party advertising providers.
            </p>

            <p className="mt-4">
              Advertising providers may process information according to
              their own privacy policies and applicable laws. Where required,
              advertising consent and privacy choices should be handled
              through the appropriate consent mechanisms.
            </p>

            <p className="mt-4">
              You can review the relevant providers' privacy policies below:
            </p>

            <ul className="privacy-list">
              <li>
                <a
                  href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  Unity Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="https://www.is.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  ironSource Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          {/* Permissions */}
          <section className="mb-10">
            <h2 className="section-title">6. App Permissions</h2>

            <p>
              File Converter may request permissions needed to provide
              particular features.
            </p>

            <ul className="privacy-list">
              <li>
                <strong>Files and Media:</strong> Used to select, read,
                convert, download, or save supported files.
              </li>

              <li>
                <strong>Internet:</strong> Used for server-based conversions,
                downloading processed files, advertisements, and other
                online functionality.
              </li>
            </ul>

            <p className="mt-4">
              The permissions required depend on your device, operating
              system, and the features you use.
            </p>
          </section>

          {/* Third Party Services */}
          <section className="mb-10">
            <h2 className="section-title">7. Third-Party Services</h2>

            <p>
              File Converter may use third-party software, libraries,
              and services to provide conversion functionality and
              advertising.
            </p>

            <ul className="privacy-list">
              <li>
                <strong>Unity LevelPlay:</strong> Advertising mediation.
              </li>
              <li>
                <strong>Unity Ads:</strong> Advertising, if enabled.
              </li>
              <li>
                <strong>ironSource:</strong> Advertising services, if enabled.
              </li>
              <li>
                <strong>FFmpeg:</strong> Multimedia processing, where used.
              </li>
              <li>
                <strong>LibreOffice:</strong> Document conversion, where used.
              </li>
              <li>
                <strong>Sharp:</strong> Image processing, where used.
              </li>
              <li>
                <strong>PDF processing libraries:</strong> PDF-related
                functionality, where used.
              </li>
            </ul>

            <p className="mt-4">
              The actual third-party services used may vary by application
              version and configuration. These providers may process
              information according to their own terms and privacy policies.
            </p>
          </section>

          {/* Security */}
          <section className="mb-10">
            <h2 className="section-title">8. Data Security</h2>

            <p>
              We take reasonable technical and organizational measures
              intended to protect information processed through our services.
            </p>

            <p className="mt-4">
              Server-based file transfers are intended to use secure
              network connections where supported by our infrastructure.
            </p>

            <p className="mt-4">
              However, no electronic transmission, processing, or storage
              system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="section-title">9. Children's Privacy</h2>

            <p>
              File Converter is a general-purpose utility application.
              Its intended audience and applicable age restrictions are
              determined by its actual distribution settings and applicable
              laws.
            </p>

            <p className="mt-4">
              We do not knowingly collect personal information directly
              from children in violation of applicable law. Advertising
              and analytics SDKs must be configured appropriately for
              the application's declared target audience.
            </p>
          </section>

          {/* User Responsibility */}
          <section className="mb-10">
            <h2 className="section-title">10. User Responsibility</h2>

            <p>
              You are responsible for the files and information you choose
              to process using File Converter.
            </p>

            <p className="mt-4">
              Please avoid uploading confidential or highly sensitive
              information through server-based conversion tools unless
              you understand and accept the processing involved.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="section-title">11. Data Sharing</h2>

            <p>
              We do not sell uploaded file contents. We do not use the
              contents of your files for advertising purposes as part
              of the intended conversion service.
            </p>

            <p className="mt-4">
              Files may be transmitted to our conversion infrastructure
              when you specifically use a server-based conversion feature.
            </p>

            <p className="mt-4">
              Technical and advertising-related information may be processed
              by third-party providers when necessary to provide their
              services, subject to applicable settings and laws.
            </p>
          </section>

          {/* Privacy Choices */}
          <section className="mb-10">
            <h2 className="section-title">12. Your Privacy Choices</h2>

            <p>
              Where supported, you may manage advertising and privacy
              preferences through the application's consent options
              or your device settings.
            </p>

            <p className="mt-4">
              Depending on applicable law, you may have rights to request
              access to, correction of, or deletion of certain personal
              information. Requests relating to information independently
              processed by third-party providers may need to be directed
              to those providers.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-10">
            <h2 className="section-title">
              13. Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy to reflect changes to the
              application, conversion services, advertising integrations,
              legal requirements, or our privacy practices.
            </p>

            <p className="mt-4">
              The updated version will be published on this page with
              a revised "Last Updated" date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="section-title">14. Contact Us</h2>

            <p>
              If you have questions, concerns, or requests regarding
              this Privacy Policy, please contact us:
            </p>

            <div className="mt-5 bg-[#07101c] border border-cyan-500/10 rounded-xl p-5">
              <p className="text-white font-semibold">
                CH TECH GIANT (OPC) PRIVATE LIMITED
              </p>

              <p className="mt-2">
                Davanagere, Karnataka – 577001, India
              </p>

              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:info@chtechgiant.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  info@chtechgiant.com
                </a>
              </p>

              <p className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+919980785020"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  +91 9980785020
                </a>
              </p>
            </div>
          </section>
        </motion.div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} CH TECH GIANT (OPC) PRIVATE LIMITED.
          All rights reserved.
        </div>
      </div>

      {/* Page Styles */}
      <style>{`
        .section-title {
          color: #22d3ee;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .sub-title {
          color: #e5e7eb;
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .privacy-list {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-top: 1rem;
        }

        .privacy-list li {
          margin-bottom: 0.5rem;
        }

        p {
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

export default FileConverterPrivacyPolicy;
