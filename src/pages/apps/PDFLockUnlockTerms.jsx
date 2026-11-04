
import { motion } from "framer-motion";

const PDFLockUnlockTerms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            Welcome to PDF Lock Unlock, developed by CH TECH GIANT (OPC)
            PRIVATE LIMITED. By downloading, installing, or using this
            application, you agree to these Terms and Conditions.
          </p>
          <p className="mt-4">
            If you do not agree with these terms, please discontinue using
            the application.
          </p>
        </>
      ),
    },
    {
      title: "2. Description of the Application",
      content: (
        <>
          <p>
            PDF Lock Unlock is a utility application designed to help users
            manage PDF documents. Available features may include locking PDF
            files with passwords, unlocking supported PDF files, and other
            PDF processing operations.
          </p>
          <p className="mt-4">
            Features and functionality may vary depending on your device,
            application version, file format, and available services.
          </p>
        </>
      ),
    },
    {
      title: "3. PDF Files and Server Processing",
      content: (
        <>
          <p>
            Certain features may require you to upload PDF files to our
            servers or a processing service to complete the requested
            operation.
          </p>
          <p className="mt-4">
            When you use these features, your selected files may be
            transmitted to the relevant service for processing. File
            handling, temporary storage, and deletion depend on the actual
            processing system and its configuration.
          </p>
          <p className="mt-4">
            You should not upload confidential, sensitive, or legally
            protected documents unless you have the necessary authorization
            and are comfortable with the applicable processing arrangements.
          </p>
        </>
      ),
    },
    {
      title: "4. Passwords and Authorization",
      content: (
        <>
          <p>
            You are responsible for ensuring that you have the legal right
            and authorization to lock, unlock, access, or modify the PDF
            documents you process through the application.
          </p>
          <p className="mt-4">
            You must not use the application to gain unauthorized access
            to documents or bypass access restrictions on files you do not
            have permission to access.
          </p>
          <p className="mt-4">
            We do not guarantee that forgotten passwords can be recovered
            or that every password-protected PDF can be processed successfully.
          </p>
        </>
      ),
    },
    {
      title: "5. User Responsibilities",
      content: (
        <>
          <p>
            You agree to use the application lawfully and responsibly.
            You must not:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Use the application for unlawful activities.</li>
            <li>Process documents without the necessary authorization.</li>
            <li>Upload files that infringe another person's rights.</li>
            <li>Attempt to interfere with, damage, or exploit the application or its services.</li>
            <li>Attempt to reverse engineer the application except where permitted by applicable law.</li>
            <li>Use the application in a way that violates applicable laws or third-party terms.</li>
          </ul>
        </>
      ),
    },
    {
      title: "6. File Integrity and Data Responsibility",
      content: (
        <>
          <p>
            PDF processing may not work with every file. Certain documents
            may be corrupted, incompatible, damaged, or protected in ways
            that prevent successful processing.
          </p>
          <p className="mt-4">
            You are responsible for checking processed files and maintaining
            backups of important documents before using the application.
          </p>
          <p className="mt-4">
            To the extent permitted by applicable law, CH TECH GIANT (OPC)
            PRIVATE LIMITED is not responsible for file loss, unsuccessful
            processing, unexpected formatting changes, or other issues
            resulting from user actions, file conditions, device limitations,
            or technical failures. This does not exclude liability that
            cannot legally be excluded.
          </p>
        </>
      ),
    },
    {
      title: "7. Advertisements and Third-Party Services",
      content: (
        <>
          <p>
            The application may display advertisements provided by
            third-party advertising services, including Unity Ads and
            Unity LevelPlay, where integrated and enabled.
          </p>
          <p className="mt-4">
            Third-party advertising providers may process certain device,
            advertising, usage, or network information according to their
            own privacy policies, terms, and applicable settings.
          </p>
          <p className="mt-4">
            We do not control all third-party advertising content, external
            websites, or services. Your interactions with third-party
            services may be subject to their respective terms and policies.
          </p>
          <a
            href="/apps/pdf-lock-unlock/privacy-policy"
            className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 underline"
          >
            Read our Privacy Policy
          </a>
        </>
      ),
    },
    {
      title: "8. Intellectual Property",
      content: (
        <p>
          The application, including its original design, branding,
          interface, and software components, is owned by or licensed to
          CH TECH GIANT (OPC) PRIVATE LIMITED, except for third-party
          materials. You may not copy, redistribute, or commercially exploit
          protected parts of the application without appropriate
          authorization, except as permitted by applicable law.
        </p>
      ),
    },
    {
      title: "9. Application Availability and Updates",
      content: (
        <>
          <p>
            We may update, modify, suspend, or discontinue features of
            the application to maintain functionality, improve security,
            fix bugs, or comply with legal requirements.
          </p>
          <p className="mt-4">
            We do not guarantee uninterrupted or error-free operation,
            compatibility with every device, or successful processing of
            every PDF document.
          </p>
        </>
      ),
    },
    {
      title: "10. Disclaimer of Warranties",
      content: (
        <p>
          To the extent permitted by applicable law, the application is
          provided on an "as is" and "as available" basis, without guarantees
          that every feature will meet your requirements or operate without
          errors. Nothing in these terms excludes warranties or rights that
          cannot lawfully be excluded.
        </p>
      ),
    },
    {
      title: "11. Limitation of Liability",
      content: (
        <p>
          To the extent permitted by applicable law, CH TECH GIANT (OPC)
          PRIVATE LIMITED shall not be liable for indirect or consequential
          losses arising from the use of the application, including losses
          resulting from failed processing, user error, service interruptions,
          or inability to access a file. These terms do not exclude liability
          that cannot legally be excluded under applicable law.
        </p>
      ),
    },
    {
      title: "12. Children's Use",
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
      title: "13. Changes to These Terms",
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
      title: "14. Governing Law",
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
            Terms and Conditions – PDF Lock Unlock
          </h1>

          <p className="text-gray-400 mb-10">
            Effective Date: November 4, 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                15. Contact Us
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

export default PDFLockUnlockTerms;
