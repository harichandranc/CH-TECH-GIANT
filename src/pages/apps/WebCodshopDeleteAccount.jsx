import { motion } from "framer-motion";

const WebCodshopDeleteAccount = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Account Deletion Request – WEB CODSHOP
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: June 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            <section>
              <p>
                WEB CODSHOP is operated by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                We respect your privacy and provide users with the ability
                to request deletion of their WEB CODSHOP account and
                associated personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                How to Request Account Deletion
              </h2>

              <p>
                To request deletion of your WEB CODSHOP account, please send
                an email from your registered email address to:
              </p>

              <div className="mt-4">
                <a
                  href="mailto:support@chtechgiant.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  support@chtechgiant.com
                </a>
              </div>

              <p className="mt-4">
                Please include the subject:
              </p>

              <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-4 mt-4">
                <p className="font-semibold text-cyan-400">
                  Account Deletion Request
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data That Will Be Deleted
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>User account information</li>
                <li>Name and profile details</li>
                <li>Email address associated with the account</li>
                <li>Saved preferences</li>
                <li>Authentication records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data That May Be Retained
              </h2>

              <p>
                Certain information may be retained where required for legal,
                accounting, tax, security, fraud prevention, or regulatory
                compliance purposes.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Purchase history</li>
                <li>Order records</li>
                <li>Invoice records</li>
                <li>Payment transaction references</li>
                <li>Tax-related records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Processing Time
              </h2>

              <p>
                Account deletion requests are typically processed within
                7 business days after verification of account ownership.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <div className="space-y-2">
                  <p className="font-semibold text-cyan-400">
                    CH TECH GIANT (OPC) PRIVATE LIMITED
                  </p>
                  <p>Davangere, Karnataka – 577001</p>
                  <p>Email: info@chtechgiant.com</p>
                  <p>Website: https://chtechgiant.com</p>
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

export default WebCodshopDeleteAccount;