import { motion } from "framer-motion";

const FileConverterPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – File Converter
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: May 25, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            {/* Intro */}
            <section>
              <p>
                Welcome to{" "}
                <span className="text-cyan-400 font-semibold">
                  File Converter
                </span>{" "}
                developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how our app handles information and files when you use our
                services.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                File Converter does not collect personally identifiable
                information from users.
              </p>

              <p className="mt-4">
                The app may temporarily process files selected by users for
                conversion purposes. These files are processed either locally on
                the device or securely transmitted to our conversion server
                depending on the tool being used.
              </p>

              <p className="mt-4">
                We do not permanently store uploaded files on our servers.
              </p>
            </section>

            {/* File Processing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                File Processing
              </h2>

              <p>
                Some conversion features require server-side processing using
                secure conversion technologies such as:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>FFmpeg</li>
                <li>LibreOffice</li>
                <li>Sharp</li>
                <li>PDF processing tools</li>
              </ul>

              <p className="mt-4">
                Uploaded files are automatically deleted after processing
                whenever possible.
              </p>

              <p className="mt-4">
                We do not access, read, sell, or share your personal files.
              </p>
            </section>

            {/* Internet Requirement */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Internet Requirement
              </h2>

              <p>
                Certain tools in File Converter require an active internet
                connection for server-based conversion features.
              </p>

              <p className="mt-4">
                If no internet connection is available, some features may not
                function properly.
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions Used
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold">
                    Storage / Media Access
                  </h3>

                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Selecting files</li>
                    <li>Saving converted files</li>
                    <li>
                      Accessing images, videos, audio, and documents
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold">
                    Internet Access
                  </h3>

                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Uploading files for server-side conversion</li>
                    <li>Downloading converted files</li>
                    <li>Loading advertisements</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Advertisements */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertisements
              </h2>

              <p>
                File Converter uses Google AdMob to display advertisements.
              </p>

              <p className="mt-4">
                AdMob may collect:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device identifiers</li>
                <li>Usage data</li>
                <li>Advertising data</li>
              </ul>

              <p className="mt-4">
                This information is handled according to Google&apos;s privacy
                policies.
              </p>

              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition"
              >
                Google Privacy Policy
              </a>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                We take reasonable security measures to protect processed files
                and app functionality.
              </p>

              <p className="mt-4">
                However, no method of electronic transmission or storage is
                completely secure.
              </p>
            </section>

            {/* Third Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Services
              </h2>

              <p>
                File Converter may use third-party services including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Google AdMob</li>
                <li>FFmpeg</li>
                <li>LibreOffice</li>
                <li>Google Play Services</li>
              </ul>

              <p className="mt-4">
                These services may have their own privacy policies.
              </p>
            </section>

            {/* Children Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children&apos;s Privacy
              </h2>

              <p>
                File Converter is not directed toward children under the age of
                13.
              </p>

              <p className="mt-4">
                We do not knowingly collect personal information from children.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Changes
                will be reflected on this page with an updated revision date.
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
                  <p>Davanagere, Karnataka – 577001</p>
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

export default FileConverterPrivacyPolicy;