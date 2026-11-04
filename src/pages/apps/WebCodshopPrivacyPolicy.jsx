
import { motion } from "framer-motion";

const WebCodshopPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – WEB CODSHOP
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: November 4, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                WEB CODSHOP is owned and operated by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                This Privacy Policy explains how we collect, use, store, and
                protect your information when you use WEB CODSHOP, our website,
                mobile applications, and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information We Collect
              </h2>

              <p>Depending on how you use our services, we may collect:</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Full name, if provided</li>
                <li>Email address</li>
                <li>Phone number, if provided</li>
                <li>Billing and transaction information</li>
                <li>Purchase history</li>
                <li>Download history</li>
                <li>Device and technical information</li>
                <li>IP address and approximate location derived from it</li>
                <li>Usage and diagnostic information</li>
                <li>Advertising identifiers, where available</li>
                <li>Advertising impressions and interactions</li>
              </ul>

              <p className="mt-4">
                The information collected depends on the features you use,
                your device settings, and the third-party services integrated
                into our website or applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Create and manage user accounts</li>
                <li>Process payments and orders</li>
                <li>Deliver digital products</li>
                <li>Generate invoices and maintain purchase records</li>
                <li>Provide customer support</li>
                <li>Improve our services and user experience</li>
                <li>Display and measure advertisements</li>
                <li>Analyze service performance and diagnose errors</li>
                <li>Prevent fraud, misuse, and unauthorized activity</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Payment Processing
              </h2>

              <p>
                WEB CODSHOP may use third-party payment providers, including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Razorpay</li>
                <li>PayPal</li>
              </ul>

              <p className="mt-4">
                Payments are processed according to the relevant provider's
                terms and privacy policy. We do not intentionally store
                complete payment card details on our own servers. Payment
                providers may process information required to complete
                transactions, prevent fraud, and comply with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Digital Product Delivery
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Purchased products may be made available for download.</li>
                <li>
                  Download links or order confirmations may be sent to your
                  registered email address.
                </li>
                <li>
                  Purchase and download records may be retained to support
                  order management and access to purchased products.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Advertising and Analytics
              </h2>

              <p>
                Our mobile applications or other services may use third-party
                advertising and analytics services, depending on the
                integrations enabled. These may include:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Unity Ads</li>
                <li>Unity LevelPlay (ironSource)</li>
                <li>Google Analytics, if integrated</li>
                <li>Firebase Analytics, if integrated</li>
                <li>Firebase Crashlytics, if integrated</li>
              </ul>

              <p className="mt-4">
                Unity Ads and Unity LevelPlay may facilitate the delivery,
                mediation, measurement, and optimization of advertisements.
                Depending on the SDKs, advertising networks, and settings
                enabled, these services and their partners may process
                information such as:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device identifiers and advertising IDs</li>
                <li>Device model, operating system, and technical details</li>
                <li>IP address and approximate location</li>
                <li>Advertising impressions, clicks, and interactions</li>
                <li>App activity or session information, where enabled</li>
                <li>Diagnostic, fraud prevention, and performance data</li>
              </ul>

              <p className="mt-4">
                This information may be used to deliver advertisements,
                measure advertising performance, limit repeated ads, support
                fraud prevention, and personalize advertising where permitted
                and configured.
              </p>

              <p className="mt-4">
                Advertising partners may receive information needed to provide
                their services. Their processing is governed by their own
                privacy policies and applicable privacy settings.
              </p>

              <p className="mt-4">
                You may be able to manage personalized advertising through
                your device's privacy or advertising settings and any consent
                or privacy controls provided in the application or ads.
                Available choices depend on your location, device, and the
                services used.
              </p>

              <p className="mt-4">
                Learn more about Unity's data practices:
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <a
                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Unity Ads and App User Privacy Policy
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

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Email Communications
              </h2>

              <p>We may send service-related emails concerning:</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Purchase confirmations</li>
                <li>Invoices and receipts</li>
                <li>Product delivery notifications</li>
                <li>Customer support responses</li>
                <li>Important account and security updates</li>
              </ul>

              <p className="mt-4">
                Promotional emails, if sent, will be handled according to
                applicable law and any relevant subscription preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Cookies and Similar Technologies
              </h2>

              <p>
                Our website may use cookies and similar technologies to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Maintain sessions and support account sign-in</li>
                <li>Remember preferences</li>
                <li>Improve website functionality</li>
                <li>Analyze website traffic and usage</li>
                <li>Support advertising and performance measurement, where enabled</li>
              </ul>

              <p className="mt-4">
                You can manage cookies through your browser settings.
                Disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Sharing and Third Parties
              </h2>

              <p>
                We may share relevant information with service providers
                when necessary to operate WEB CODSHOP, including payment
                processors, digital product delivery services, hosting
                providers, customer support tools, and advertising or
                analytics partners.
              </p>

              <p className="mt-4">
                Information may also be disclosed when required by law,
                to protect our rights, to prevent fraud, or as part of a
                legitimate business transaction, subject to applicable law.
              </p>

              <p className="mt-4">
                We do not control the independent privacy practices of
                third-party providers. Please review their policies for
                details about how they handle information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security and Retention
              </h2>

              <p>
                We use reasonable technical and organizational measures
                intended to protect information against unauthorized access,
                loss, misuse, alteration, or disclosure.
              </p>

              <p className="mt-4">
                We retain information for as long as reasonably necessary
                to provide our services, maintain relevant business records,
                resolve disputes, prevent fraud, and comply with legal
                obligations.
              </p>

              <p className="mt-4">
                No method of online transmission or electronic storage can
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children's Privacy
              </h2>

              <p>
                WEB CODSHOP is not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13 in violation of applicable law.
              </p>

              <p className="mt-4">
                If you believe a child has provided personal information
                inappropriately, please contact us so that we can review
                the matter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Privacy Rights
              </h2>

              <p>
                Subject to applicable law, you may have the right to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of information where applicable</li>
                <li>Ask questions about how your information is processed</li>
                <li>Exercise available advertising privacy choices</li>
              </ul>

              <p className="mt-4">
                To submit a privacy-related request, contact us using the
                details below. We may need to verify your identity before
                responding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time.
                Changes will be posted on this page along with the revised
                update date. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:contact@chtechgiant.com"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      contact@chtechgiant.com
                    </a>
                  </p>

                  <p>
                    Website:{" "}
                    <a
                      href="https://chtechgiant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      chtechgiant.com
                    </a>
                  </p>

                  <p>Location: Davangere, Karnataka – 577001, India</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebCodshopPrivacyPolicy;
