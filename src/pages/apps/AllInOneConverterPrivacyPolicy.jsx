import { motion } from "framer-motion";

const AllInOneConverterPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Privacy Policy – All In One Converter
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: October 14, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                Welcome to the{" "}
                <span className="text-cyan-400 font-semibold">
                  All In One Converter
                </span>{" "}
                app developed by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>.
              </p>

              <p className="mt-4">
                Your privacy is important to us. This Privacy Policy explains
                how information may be handled when you use our app and its
                conversion features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Collection
              </h2>

              <p>
                The app provides tools for converting files and other supported
                formats. Depending on the features you use, files and
                information you provide may be processed on your device or by
                services required to provide a particular feature.
              </p>

              <p className="mt-4">
                We do not intentionally collect personal information directly
                through the app unless a feature specifically requires it.
                Third-party services integrated into the app may process
                technical or usage information as described in their respective
                privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Files and Conversion Data
              </h2>

              <p>
                All In One Converter may let you select files from your device
                for supported conversion tasks, including documents, images,
                videos, and audio files.
              </p>

              <p className="mt-4">
                Selected files are processed according to the implementation
                of each conversion feature. Files selected through a system
                picker are accessed only as permitted by the operating system
                and the access you grant.
              </p>

              <p className="mt-4">
                Do not use the app to process confidential or sensitive files
                unless you understand how the specific conversion feature
                handles them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Permissions
              </h2>

              <p>
                The app may use system file pickers to let you select files
                for conversion. Access to selected files depends on the
                permission granted through your device's operating system.
              </p>

              <p className="mt-4">
                Certain features may require additional permissions. Where
                applicable, these permissions are used to provide the
                requested functionality.
              </p>
            </section>


            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Services
              </h2>

              <p>
                The app may use third-party libraries or services to support
                file conversion, advertising, analytics, crash reporting, or
                other functionality.
              </p>

              <p className="mt-4">
                These services may process technical or usage information
                according to their own privacy policies. The services used
                may vary depending on the app version and enabled features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security and Retention
              </h2>

              <p>
                We take reasonable steps to protect information handled by
                the app. The storage and retention of converted files depend
                on the features used and the storage location selected by you.
              </p>

              <p className="mt-4">
                You are responsible for managing exported files and removing
                files you no longer need from your device or other storage
                locations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children's Privacy
              </h2>

              <p>
                The app is intended for general use. We do not knowingly
                collect personal information directly from children without
                the required legal basis or consent.
              </p>

              <p className="mt-4">
                Third-party services, including advertising providers, may
                have separate age-related requirements and data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Choices
              </h2>

              <p>
                You can choose which files to select for conversion and can
                manage app permissions through your device settings. You may
                also be able to manage advertising preferences through your
                device or the relevant service settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be published on this page with a revised update
                date.
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
                  <p>Davangere, Karnataka – 577001</p>
                  <p>
                    Email: info@chtechgiant.com
                  </p>
                  <p>Phone: +91 9980785020</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Consent
              </h2>

              <p>
                By using All In One Converter, you acknowledge that you have
                read this Privacy Policy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllInOneConverterPrivacyPolicy;