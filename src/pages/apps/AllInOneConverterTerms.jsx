
import { motion } from "framer-motion";

const AllInOneConverterTerms = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Terms of Service – All-in-One Converter
          </h1>

          <p className="text-gray-400 mb-10">
            Last Updated: November 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                These Terms of Service govern your use of the
                All-in-One Converter mobile application ("App"),
                operated by{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>
                ("we", "us", or "our").
              </p>
              <p className="mt-4">
                By purchasing, accessing, or using the App, you
                agree to these Terms. If you do not agree, please
                discontinue use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. About the App
              </h2>
              <p>
                All-in-One Converter provides conversion tools for
                supported formats, units, or other data types as
                made available in the App. Available features may
                vary by version.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Purchases and Payment
              </h2>
              <p>
                The App is offered as a paid application through
                Google Play. The applicable price, payment terms,
                and purchase process are displayed by Google Play
                at the time of purchase.
              </p>
              <p className="mt-4">
                Payments and eligible refunds are handled in
                accordance with applicable Google Play policies
                and applicable law. We do not promise a refund
                outside the terms permitted by those policies or
                law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Permitted Use
              </h2>
              <p>You agree to use the App lawfully and not to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use the App for unlawful purposes.</li>
                <li>Attempt to disrupt or damage the App.</li>
                <li>
                  Reverse engineer or redistribute the App except
                  where permitted by applicable law.
                </li>
                <li>
                  Misuse the App in a way that infringes another
                  person's rights.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Conversion Accuracy
              </h2>
              <p>
                We aim to provide useful and reliable conversion
                results. However, results may depend on the
                selected format, input data, conversion method,
                rounding, and software limitations.
              </p>
              <p className="mt-4">
                You are responsible for checking important results
                before relying on them, particularly for medical,
                financial, engineering, safety-critical, or
                professional purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Your Data and Files
              </h2>
              <p>
                You are responsible for ensuring that you have
                the right to use any files or information you
                submit to the App.
              </p>
              <p className="mt-4">
                The processing, storage, and handling of your
                information depend on the App's actual features
                and are described in its Privacy Policy. Please
                review that policy before using features that
                process personal or confidential information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Intellectual Property
              </h2>
              <p>
                The App, including its software, design, branding,
                and original content, is owned by us or our
                licensors and is protected by applicable
                intellectual property laws.
              </p>
              <p className="mt-4">
                Your purchase grants you a right to use the App
                subject to these Terms and applicable Google Play
                terms. It does not transfer ownership of the App
                or its intellectual property to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Availability and Updates
              </h2>
              <p>
                We may update, improve, modify, suspend, or
                discontinue features where reasonably necessary,
                subject to applicable law and any rights you
                have under applicable consumer protection rules.
              </p>
              <p className="mt-4">
                We do not guarantee uninterrupted or error-free
                operation on every device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Disclaimer and Liability
              </h2>
              <p>
                To the extent permitted by law, the App is
                provided without guarantees that every feature
                will meet every user's requirements or that
                every conversion will be error-free.
              </p>
              <p className="mt-4">
                Nothing in these Terms excludes or limits
                consumer rights, warranties, or liability that
                cannot lawfully be excluded or limited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms from time to time.
                Updated Terms will be published on this page
                with a revised date. Where required, we will
                provide notice or obtain consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Governing Law
              </h2>
              <p>
                These Terms are subject to applicable laws of
                India. Any applicable dispute resolution or
                jurisdiction provisions remain subject to
                mandatory consumer protection laws.
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
                    Email: contact@chtechgiant.com
                  </p>
                  <p>
                    Website: https://chtechgiant.com
                  </p>
                  <p>
                    Location: Davangere, Karnataka – 577001, India
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllInOneConverterTerms;
