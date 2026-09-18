import { motion } from "framer-motion";

const ImageToPDFPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – Image to PDF
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: May 24, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            {/* Introduction */}
            <section>
              <p>
                Welcome to{" "}
                <span className="text-cyan-400 font-semibold">
                  Image to PDF
                </span>{" "}
                developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how our app handles user information.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                Image to PDF does not directly collect, store, or share
                personal information from users.
              </p>

              <p className="mt-4">
                The app does not require account registration or login.
              </p>

              <p className="mt-4">
                All image processing and PDF generation are performed locally
                on your device whenever possible.
              </p>

              <p className="mt-4">
                However, third-party advertising services integrated into the
                app may process certain technical or advertising-related
                information as described below.
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Storage / Photos Access</li>
                <li>Select images from your device</li>
                <li>Save generated PDF files</li>
                <li>Share exported PDF documents</li>
              </ul>

              <p className="mt-4">
                The app only accesses files and photos selected or authorized
                by the user for the requested operation.
              </p>
            </section>

            {/* File Handling */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                File Handling
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your images remain on your device</li>
                <li>We do not upload your files to our servers</li>
                <li>We do not sell or share your files</li>
                <li>PDF generation is performed locally on your device</li>
              </ul>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertising
              </h2>

              <p>
                This app may display advertisements provided by the
                third-party advertising service{" "}
                <span className="text-cyan-400 font-semibold">
                  Start.io
                </span>.
              </p>

              <p className="mt-4">
                Start.io may collect and process certain information from your
                device for advertising, analytics, fraud prevention, and
                related purposes. Depending on applicable settings and
                regulations, this information may include:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device information</li>
                <li>Advertising ID or other device identifiers</li>
                <li>IP address</li>
                <li>App usage and interaction information</li>
                <li>Approximate location information</li>
              </ul>

              <p className="mt-4">
                This information may be used to provide advertisements,
                measure advertising performance, perform analytics, prevent
                fraud, and improve advertising services.
              </p>

              <p className="mt-4">
                The collection and processing of information by Start.io is
                subject to Start.io's own privacy policy and applicable laws.
              </p>

              <p className="mt-4">
                For more information, please review Start.io's Privacy Policy:
              </p>

              <a
                href="https://www.start.io/policy/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                Start.io Privacy Policy
              </a>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                Since image processing and PDF generation are performed
                locally on the device, your files remain under your control.
              </p>

              <p className="mt-4">
                We do not upload or store your images or generated PDF files on
                our external servers.
              </p>

              <p className="mt-4">
                Information processed by third-party advertising services is
                handled according to their respective privacy policies.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                This app is not specifically directed toward children under
                the age of 13.
              </p>

              <p className="mt-4">
                We do not knowingly collect personal information directly from
                children.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any
                updates will be posted on this page with a revised update date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <div className="space-y-2">
                  <p>CH TECH GIANT (OPC) PRIVATE LIMITED</p>
                  <p>Davangere, Karnataka – 577001</p>
                  <p>Email: info@chtechgiant.com</p>
                  <p>Phone: +91 9980785020</p>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageToPDFPrivacyPolicy;