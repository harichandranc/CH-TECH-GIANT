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

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                Image to PDF does not collect, store, or share personal
                information from users.
              </p>

              <p className="mt-4">
                All image processing and PDF generation are performed locally
                on your device whenever possible.
              </p>
            </section>

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
                The app only accesses files selected by the user.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                File Handling
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your images remain on your device</li>
                <li>We do not upload files to servers</li>
                <li>We do not share user data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertising
              </h2>

              <p>
                This app may display advertisements provided by Google AdMob.
              </p>

              <div className="mt-4">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300"
                >
                  Google Privacy Policy
                </a>

                <a
                  href="https://support.google.com/admob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 mt-2"
                >
                  AdMob Policy
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>

              <p>
                Since processing occurs locally on the device, your files
                remain under your control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children’s Privacy
              </h2>

              <p>
                This app is not directed toward children under the age of 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time.
              </p>
            </section>

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