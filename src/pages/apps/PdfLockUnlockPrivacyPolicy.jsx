import { motion } from "framer-motion";

const PDFLockUnlockPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – PDF Lock Unlock
          </h1>

          <p className="text-gray-400 mb-10">
            Effective Date: July 26, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                Welcome to <span className="text-cyan-400 font-semibold">PDF Lock Unlock</span> ("the App"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Information We Collect
              </h2>

              <p>
                Our app is designed to protect and unlock PDF documents securely.
                We collect only the information necessary to provide these
                services.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">
                PDF Files
              </h3>

              <p>
                When you choose to lock or unlock a PDF, the selected file is
                temporarily uploaded to our secure server for processing.
              </p>

              <p className="mt-4">
                The uploaded file is used solely to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Protect a PDF with a password</li>
                <li>Remove a password from a PDF</li>
                <li>Generate the processed PDF for download</li>
              </ul>

              <p className="mt-4">
                We do not use your files for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Temporary File Processing
              </h2>

              <p>
                Uploaded PDF files are processed temporarily to complete your
                requested operation.
              </p>

              <p className="mt-4">
                Files are automatically deleted from our server after processing
                and are not permanently stored.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Advertising
              </h2>

              <p>
                Our app uses <strong>Google AdMob</strong> to display
                advertisements.
              </p>

              <p className="mt-4">
                AdMob may collect certain information such as:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device identifiers</li>
                <li>Advertising ID</li>
                <li>App interaction information</li>
                <li>Approximate diagnostics required for ad delivery</li>
              </ul>

              <p className="mt-4">
                For more information, please review Google's Privacy Policy:
              </p>

              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                https://policies.google.com/privacy
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Security
              </h2>

              <p>
                We take reasonable security measures to protect your
                information.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Secure HTTPS connections are used for all communications.</li>
                <li>PDF files are processed securely.</li>
                <li>We do not permanently retain uploaded documents.</li>
              </ul>

              <p className="mt-4">
                However, no method of transmission over the Internet is 100%
                secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Permissions
              </h2>

              <p>
                The app may request permissions required to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>Select PDF files from your device</li>
                <li>Save processed PDF files</li>
                <li>Access the internet for processing documents</li>
                <li>Display advertisements</li>
              </ul>

              <p className="mt-4">
                The app does not access unnecessary personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Children's Privacy
              </h2>

              <p>
                Our app is not directed toward children under the age of 13.
              </p>

              <p className="mt-4">
                We do not knowingly collect personal information from children.
              </p>

              <p className="mt-4">
                If you believe a child has provided personal information, please
                contact us so that we can remove it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Third-Party Services
              </h2>

              <p>
                Our application uses the following third-party services:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Google AdMob</li>
                <li>Google Play Services</li>
              </ul>

              <p className="mt-4">
                These services may collect information according to their own
                privacy policies.
              </p>

              <div className="mt-4 space-y-2">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Google Privacy Policy
                </a>

                <a
                  href="https://support.google.com/admob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Google AdMob
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Your Rights
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Stop using the app at any time.</li>
                <li>Delete processed files from your device.</li>
                <li>Contact us with privacy-related questions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time.
              </p>

              <p className="mt-4">
                Any changes will be posted on this page with an updated
                Effective Date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>Email: support@chtechgiant.com</p>
                  <p>Website: https://chtechgiant.com</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PDFLockUnlockPrivacyPolicy;