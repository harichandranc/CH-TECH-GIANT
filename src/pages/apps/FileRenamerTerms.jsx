
import { motion } from "framer-motion";

const FileRenamerTerms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            Welcome to File Renamer – Bulk Rename, developed by
            CH TECH GIANT (OPC) PRIVATE LIMITED. By downloading,
            installing, or using this application, you agree to these
            Terms and Conditions.
          </p>
          <p className="mt-4">
            If you do not agree with these terms, please discontinue
            using the application.
          </p>
        </>
      ),
    },
    {
      title: "2. Description of the Application",
      content: (
        <>
          <p>
            File Renamer – Bulk Rename is a utility application designed
            to help users rename files on their devices. Available
            functionality may include selecting files, applying rename
            rules, and saving files with updated names.
          </p>
          <p className="mt-4">
            Features may vary depending on your device, operating system,
            file permissions, and application version.
          </p>
        </>
      ),
    },
    {
      title: "3. File Access and Permissions",
      content: (
        <>
          <p>
            The application may request access to files or storage
            permissions necessary to perform file-renaming operations.
            You are responsible for granting only the permissions you
            are comfortable providing.
          </p>
          <p className="mt-4">
            File-renaming operations are intended to be performed locally
            on your device. You should verify the selected files and
            proposed names before confirming a rename operation.
          </p>
          <p className="mt-4">
            File access and renaming may be limited by Android permissions,
            system restrictions, read-only locations, or other technical
            limitations.
          </p>
        </>
      ),
    },
    {
      title: "4. User Responsibilities",
      content: (
        <>
          <p>You agree to use the application lawfully and responsibly. You must not:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Use the application for unlawful activities.</li>
            <li>Attempt to interfere with or damage the application.</li>
            <li>Use the application to infringe another person's rights.</li>
            <li>Attempt to reverse engineer or exploit the application except where permitted by applicable law.</li>
            <li>Use the application in a manner that violates applicable laws or third-party terms.</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. File Changes and Data Responsibility",
      content: (
        <>
          <p>
            Renaming files can affect how you identify, organize, or access
            them. You are responsible for reviewing file selections, rename
            rules, and resulting filenames before and after an operation.
          </p>
          <p className="mt-4">
            We recommend maintaining backups of important files before
            performing bulk-renaming operations.
          </p>
          <p className="mt-4">
            To the extent permitted by applicable law, CH TECH GIANT
            (OPC) PRIVATE LIMITED is not responsible for file loss,
            unintended renaming, accessibility issues, or other damage
            resulting from user actions, incorrect settings, device
            restrictions, or technical failures.
          </p>
        </>
      ),
    },
    {
      title: "6. Advertisements and Third-Party Services",
      content: (
        <>
          <p>
            The application may display advertisements provided by
            third-party advertising services, including Level Play and Unity.
            Advertisements help support the availability and maintenance
            of the application.
          </p>
          <p className="mt-4">
            Third-party advertising providers may process certain device,
            advertising, usage, or network information according to their
            own policies and applicable settings.
          </p>
          <p className="mt-4">
            We do not control all third-party advertising content,
            external websites, or services. Any interaction with an
            advertiser or third-party service is subject to that
            provider's applicable terms and privacy policy.
          </p>
          <p className="mt-4">
            You can review our Privacy Policy for more information
            about data handling and advertising.
          </p>
          <a
            href="/apps/file-renamer/privacy-policy"
            className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 underline"
          >
            Read our Privacy Policy
          </a>
        </>
      ),
    },
    {
      title: "7. Intellectual Property",
      content: (
        <p>
          The application, including its original design, branding,
          interface, and software components, is owned by or licensed to
          CH TECH GIANT (OPC) PRIVATE LIMITED, except for third-party
          materials. You may not copy, redistribute, or commercially
          exploit protected parts of the application without appropriate
          authorization, except as permitted by applicable law.
        </p>
      ),
    },
    {
      title: "8. Application Availability and Updates",
      content: (
        <>
          <p>
            We may update, modify, suspend, or discontinue features of
            the application to maintain functionality, improve security,
            fix bugs, or comply with legal requirements.
          </p>
          <p className="mt-4">
            We do not guarantee uninterrupted or error-free operation
            on every device or Android version.
          </p>
        </>
      ),
    },
    {
      title: "9. Disclaimer of Warranties",
      content: (
        <p>
          To the extent permitted by applicable law, the application is
          provided on an "as is" and "as available" basis, without
          guarantees that every feature will meet your requirements or
          operate without errors. Nothing in these terms excludes
          warranties or rights that cannot lawfully be excluded.
        </p>
      ),
    },
    {
      title: "10. Limitation of Liability",
      content: (
        <p>
          To the extent permitted by applicable law, CH TECH GIANT
          (OPC) PRIVATE LIMITED shall not be liable for indirect or
          consequential losses arising from the use of the application,
          including losses resulting from user error, interrupted
          operation, or inability to access a file. These terms do not
          exclude liability that cannot legally be excluded under
          applicable law.
        </p>
      ),
    },
    {
      title: "11. Children's Use",
      content: (
        <p>
          The application is not specifically directed at children under
          13. If you are a minor under applicable law, you should use the
          application with the involvement of a parent or legal guardian
          where required. Applicable age restrictions and privacy
          protections continue to apply.
        </p>
      ),
    },
    {
      title: "12. Changes to These Terms",
      content: (
        <p>
          We may revise these Terms and Conditions from time to time.
          Updated terms will be published on this page with a revised
          effective date. Your continued use of the application after
          updated terms take effect is subject to applicable law.
        </p>
      ),
    },
    {
      title: "13. Governing Law",
      content: (
        <p>
          These terms are governed by the laws of India, subject to
          applicable consumer protection laws and other mandatory legal
          requirements. Any disputes shall be handled by the competent
          courts or authorities having jurisdiction under applicable law.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Terms and Conditions – File Renamer – Bulk Rename
          </h1>

          <p className="text-gray-400 mb-10">
            Effective Date: November 4, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            {sections.map((section, index) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>Davangere, Karnataka 577001, India</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@chtechgiant.com"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      info@chtechgiant.com
                    </a>
                  </p>
                  <p>Phone: +91 9980785020</p>
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
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FileRenamerTerms;
