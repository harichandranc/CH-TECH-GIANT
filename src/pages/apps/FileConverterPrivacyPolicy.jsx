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

          <p className="text-gray-400">
            File Converter
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Last Updated: September 17, 2026
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
              We respect your privacy and are committed to protecting your
              information. This Privacy Policy explains how information is
              handled when you use the File Converter application and its
              related services.
            </p>

            <p className="mt-4">
              By using File Converter, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-10">
            <h2 className="section-title">2. Information We Collect</h2>

            <p>
              File Converter does not require you to create an account or
              provide your name, email address, phone number, or other
              registration information to use its main features.
            </p>

            <p className="mt-4">
              Depending on the features you use, the application may process
              files and technical information necessary to provide the
              requested functionality.
            </p>

            <h3 className="sub-title">2.1 Files You Select</h3>

            <p>
              You may select files for conversion or processing, including
              documents, PDFs, images, videos, audio files, text files, and
              other supported file formats.
            </p>

            <p className="mt-4">
              Some operations are performed directly on your device. Certain
              advanced conversion tools may require files to be temporarily
              transmitted to our conversion server so that the requested
              operation can be completed.
            </p>

            <h3 className="sub-title">2.2 Technical Information</h3>

            <p>
              The application and third-party advertising services may process
              certain technical information required for advertising,
              security, diagnostics, and service operation.
            </p>

            <p className="mt-4">
              Depending on the service and configuration, this may include
              information such as:
            </p>

            <ul className="privacy-list">
              <li>IP address</li>
              <li>Operating system information</li>
              <li>Device information</li>
              <li>Application information</li>
              <li>Network information</li>
              <li>Advertising identifiers</li>
              <li>Advertising interaction information</li>
            </ul>
          </section>

          {/* File Processing */}
          <section className="mb-10">
            <h2 className="section-title">3. File Processing</h2>

            <p>
              File Converter provides both local and server-based file
              processing.
            </p>

            <h3 className="sub-title">3.1 Local Processing</h3>

            <p>
              Where supported, files are processed directly on your device.
              Such processing does not require the file to be uploaded to our
              servers.
            </p>

            <h3 className="sub-title">3.2 Server Processing</h3>

            <p>
              Certain high-end or resource-intensive conversion tools may
              require temporary server processing.
            </p>

            <p className="mt-4">
              When you use these features, the selected file may be securely
              transmitted to our conversion server, processed, and returned
              to your device.
            </p>

            <p className="mt-4">
              Our conversion infrastructure may use technologies such as
              FFmpeg, LibreOffice, Sharp, PDF processing libraries, and other
              software required to perform file conversions.
            </p>
          </section>

          {/* File Storage */}
          <section className="mb-10">
            <h2 className="section-title">4. File Storage and Retention</h2>

            <p>
              Files uploaded for server-based conversion are intended only for
              performing the requested conversion or processing operation.
            </p>

            <p className="mt-4">
              We do not permanently store uploaded files as part of the normal
              conversion process. Temporary files may exist on the server
              while processing is being performed.
            </p>

            <p className="mt-4">
              Temporary files are deleted after processing according to our
              server cleanup procedures whenever technically possible.
            </p>

            <p className="mt-4">
              Users should avoid uploading files containing highly sensitive
              or confidential information unless they are comfortable with
              temporary server processing.
            </p>
          </section>

          {/* Advertising */}
          <section className="mb-10">
            <h2 className="section-title">5. Advertising</h2>

            <p>
              File Converter may display advertisements through third-party
              advertising services.
            </p>

            <p className="mt-4">
              Our application currently uses{" "}
              <strong className="text-white">Start.io</strong> for
              advertising services.
            </p>

            <p className="mt-4">
              Advertising providers may process certain technical information
              such as advertising identifiers, IP address, device information,
              application information, network information, and advertising
              interaction data for purposes such as delivering and measuring
              advertisements, subject to their own privacy policies and
              applicable laws.
            </p>

            <p className="mt-4">
              For more information about Start.io's privacy practices, please
              review their privacy policy.
            </p>

            <a
              href="https://www.start.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 underline"
            >
              Start.io Privacy Policy
            </a>
          </section>

          {/* Permissions */}
          <section className="mb-10">
            <h2 className="section-title">6. App Permissions</h2>

            <p>
              File Converter may request permissions necessary to provide
              certain features.
            </p>

            <ul className="privacy-list">
              <li>
                <strong>Files / Media:</strong> Used to allow you to select,
                read, save, or manage supported files.
              </li>

              <li>
                <strong>Internet:</strong> Required for server-based
                conversions, downloading processed files, advertisements,
                and other online functionality.
              </li>
            </ul>

            <p className="mt-4">
              Permissions are used only when required by the relevant feature
              or service.
            </p>
          </section>

          {/* Third Party Services */}
          <section className="mb-10">
            <h2 className="section-title">7. Third-Party Services</h2>

            <p>
              File Converter may use third-party technologies and services to
              provide specific functionality.
            </p>

            <ul className="privacy-list">
              <li>Start.io — advertising services</li>
              <li>FFmpeg — multimedia processing</li>
              <li>LibreOffice — document conversion</li>
              <li>Sharp — image processing</li>
              <li>PDF processing libraries — PDF-related operations</li>
            </ul>

            <p className="mt-4">
              Third-party services may process information according to their
              own privacy policies and terms.
            </p>
          </section>

          {/* Security */}
          <section className="mb-10">
            <h2 className="section-title">8. Data Security</h2>

            <p>
              We take reasonable technical and organizational measures to
              protect information processed through our services.
            </p>

            <p className="mt-4">
              Server-based file transfers are intended to be performed through
              secure network connections where supported.
            </p>

            <p className="mt-4">
              However, no electronic transmission or storage system can be
              guaranteed to be completely secure.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="section-title">9. Children's Privacy</h2>

            <p>
              File Converter is a general-purpose utility application and is
              not specifically directed toward children.
            </p>

            <p className="mt-4">
              We do not knowingly request or collect personal information from
              children for account registration because the application does
              not require user accounts.
            </p>
          </section>

          {/* User Responsibility */}
          <section className="mb-10">
            <h2 className="section-title">10. User Responsibility</h2>

            <p>
              You are responsible for the files and information that you
              choose to process using File Converter.
            </p>

            <p className="mt-4">
              Please do not upload or process confidential information through
              server-based conversion tools unless you understand and accept
              the temporary server processing involved.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="section-title">11. Data Sharing</h2>

            <p>
              We do not sell your uploaded files or use the contents of your
              files for advertising purposes.
            </p>

            <p className="mt-4">
              Files may be transmitted to our conversion infrastructure when
              you specifically use a server-based conversion feature.
            </p>

            <p className="mt-4">
              Technical information may also be processed by third-party
              services, such as advertising providers, when required to
              provide their services.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-10">
            <h2 className="section-title">12. Changes to This Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to the application, services, legal requirements, or
              privacy practices.
            </p>

            <p className="mt-4">
              When changes are made, the updated version will be published on
              this page with a revised "Last Updated" date.
            </p>
          </section>

          {/* Consent */}
          <section className="mb-10">
            <h2 className="section-title">13. Your Consent</h2>

            <p>
              By continuing to use File Converter after reviewing this Privacy
              Policy, you acknowledge the practices described in this policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="section-title">14. Contact Us</h2>

            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy, you can contact us at:
            </p>

            <div className="mt-5 bg-[#07101c] border border-cyan-500/10 rounded-xl p-5">
              <p className="text-white font-semibold">
                CH TECH GIANT (OPC) PRIVATE LIMITED
              </p>

              <p className="mt-2">
                Davanagere, Karnataka – 577001
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