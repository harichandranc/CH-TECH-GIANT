import { motion } from "framer-motion";

const ImageToPDFTerms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            Welcome to Image to PDF, developed by CH TECH GIANT (OPC)
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
            Image to PDF is a utility application designed to help users
            convert selected images into PDF documents. Depending on the
            available features, you may be able to select images, arrange
            them, generate PDF files, save documents, and share exported files.
          </p>
          <p className="mt-4">
            Features may vary depending on your device, operating system,
            application version, and available functionality.
          </p>
        </>
      ),
    },
    {
      title: "3. Image Processing and File Storage",
      content: (
        <>
          <p>
            Image selection and PDF generation are performed locally on your
            device wherever supported by the application.
          </p>
          <p className="mt-4">
            As part of local conversion, we do not upload your selected images
            or generated PDF documents to our own servers.
          </p>
          <p className="mt-4">
            You are responsible for selecting the correct images, reviewing
            the generated PDF, choosing an appropriate save location, and
            maintaining backups of important files.
          </p>
        </>
      ),
    },
    {
      title: "4. Permissions",
      content: (
        <>
          <p>
            The application may request access to photos, images, media, or
            files when needed for its features.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Select images from your device.</li>
            <li>Generate PDF documents from selected images.</li>
            <li>Save exported PDF files to a location you select or authorize.</li>
            <li>Share generated PDF files when requested by you.</li>
            <li>Access the internet for advertisements or supported online services.</li>
          </ul>
          <p className="mt-4">
            Permissions depend on your device, operating system, and app
            version. You can manage available permissions through your device
            settings.
          </p>
        </>
      ),
    },
    {
      title: "5. User Responsibilities",
      content: (
        <>
          <p>
            You agree to use Image to PDF lawfully and responsibly. You must
            not:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Convert or distribute images without the necessary rights or authorization.</li>
            <li>Use the application to facilitate unlawful activities.</li>
            <li>Infringe another person's copyright, privacy, or other legal rights.</li>
            <li>Attempt to disrupt, damage, or exploit the application or its services.</li>
            <li>Reverse engineer the application except where permitted by applicable law.</li>
            <li>Use the application in violation of applicable laws or third-party terms.</li>
          </ul>
        </>
      ),
    },
    {
      title: "6. Copyright and Ownership of Files",
      content: (
        <>
          <p>
            You retain responsibility for the images and other content you
            select or process using the application. Using Image to PDF does
            not transfer ownership of your images or documents to us.
          </p>
          <p className="mt-4">
            You must ensure that you have the necessary rights or permission
            to use, convert, reproduce, or share the images you process.
          </p>
        </>
      ),
    },
    {
      title: "7. File Accuracy and Data Loss",
      content: (
        <>
          <p>
            We aim to provide reliable image-to-PDF conversion, but we cannot
            guarantee that every image, file format, or conversion will work
            correctly on every device.
          </p>
          <p className="mt-4">
            Conversion may fail, formatting or image quality may change, and
            files may be lost because of device problems, software errors,
            insufficient storage, or user actions.
          </p>
          <p className="mt-4">
            You should verify generated PDFs and keep backups of important
            images and documents. To the extent permitted by law, we are not
            responsible for losses caused by these circumstances, except
            where liability cannot legally be excluded.
          </p>
        </>
      ),
    },
    {
      title: "8. Advertisements and Third-Party Services",
      content: (
        <>
          <p>
            Image to PDF may display advertisements through Unity LevelPlay
            mediation and advertising partners, including Unity Ads and
            ironSource, where integrated and enabled.
          </p>
          <p className="mt-4">
            Third-party advertising providers may process device, advertising,
            usage, network, or diagnostic information in accordance with their
            own policies and applicable law.
          </p>
          <p className="mt-4">
            We do not control all third-party advertisements, external websites,
            or services. Your interactions with those services may be subject
            to their respective terms and privacy policies.
          </p>
          <a
            href="/apps/image-to-pdf/privacy-policy"
            className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 underline"
          >
            Read our Privacy Policy
          </a>
        </>
      ),
    },
    {
      title: "9. Intellectual Property",
      content: (
        <p>
          The application's original design, branding, interface, and software
          components are owned by or licensed to CH TECH GIANT (OPC) PRIVATE
          LIMITED, except for third-party materials. You may not copy,
          redistribute, or commercially exploit protected parts of the
          application without appropriate authorization, except as permitted
          by applicable law.
        </p>
      ),
    },
    {
      title: "10. Updates and Availability",
      content: (
        <>
          <p>
            We may update, modify, suspend, or discontinue features of the
            application to improve functionality, address security issues,
            fix errors, or comply with legal requirements.
          </p>
          <p className="mt-4">
            We do not guarantee uninterrupted operation, compatibility with
            every device, or permanent availability of every feature.
          </p>
        </>
      ),
    },
    {
      title: "11. Disclaimer of Warranties",
      content: (
        <p>
          To the extent permitted by applicable law, the application is
          provided on an "as is" and "as available" basis. We do not guarantee
          that it will be error-free, meet every user's requirements, or
          successfully convert every image. Nothing in these terms excludes
          rights or warranties that cannot legally be excluded.
        </p>
      ),
    },
    {
      title: "12. Limitation of Liability",
      content: (
        <p>
          To the extent permitted by applicable law, CH TECH GIANT (OPC)
          PRIVATE LIMITED shall not be liable for indirect or consequential
          losses arising from the use of the application, including file loss,
          failed conversions, or device-related issues. This provision does
          not exclude liability that cannot legally be excluded.
        </p>
      ),
    },
    {
      title: "13. Children's Use",
      content: (
        <p>
          Image to PDF is not specifically directed at children under the age
          of 13. If you are a minor under applicable law, you should use the
          application with the involvement of a parent or legal guardian
          where required. Applicable age restrictions and privacy protections
          continue to apply.
        </p>
      ),
    },
    {
      title: "14. Changes to These Terms",
      content: (
        <p>
          We may revise these Terms and Conditions from time to time. Updated
          terms will be published on this page with a revised effective date.
          We encourage you to review this page periodically.
        </p>
      ),
    },
    {
      title: "15. Governing Law",
      content: (
        <p>
          These terms are governed by the laws of India, subject to applicable
          consumer protection laws and other mandatory legal requirements.
          Disputes shall be handled by the competent courts or authorities
          having jurisdiction under applicable law.
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
            Terms and Conditions – Image to PDF
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
                16. Contact Us
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>Davangere, Karnataka – 577001, India</p>

                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@chtechgiant.com"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      info@chtechgiant.com
                    </a>
                  </p>

                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+919980785020"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      +91 9980785020
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
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageToPDFTerms;