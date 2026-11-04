
import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, RefreshCw, Mail } from "lucide-react";

const sections = [
  {
    title: "1. About the App",
    content: (
      <p>
        File Converter is a free application provided by
        CH TECH GIANT (OPC) PRIVATE LIMITED. It is designed to help
        users convert supported files between available formats.
        The app may display advertisements to support its operation.
      </p>
    ),
  },
  {
    title: "2. Free Use and Advertisements",
    content: (
      <p>
        The app is provided free of charge and may display advertisements
        from third-party advertising providers. Ad availability and content
        may vary by device, region, and provider. We do not guarantee that
        advertisements will always be available or that the app will remain
        free of advertisements in future versions.
      </p>
    ),
  },
  {
    title: "3. File Conversion and Accuracy",
    content: (
      <p>
        Conversion results depend on the input file, supported formats,
        file size, device capabilities, and the conversion method used.
        We do not guarantee that every file will convert successfully or
        that formatting, quality, metadata, or other file properties will
        always be preserved. You should review converted files before
        relying on them.
      </p>
    ),
  },
  {
    title: "4. Your Files and Responsibilities",
    content: (
      <p>
        You are responsible for the files you select, convert, save, or
        share using the app. Only convert files you are authorized to use.
        Keep backup copies of important files before conversion. Do not
        use the app to violate copyright, privacy, or other applicable laws.
      </p>
    ),
  },
  {
    title: "5. Privacy and File Handling",
    content: (
      <p>
        File handling depends on how the app performs each conversion.
        Some processing may occur on your device, while features that use
        online services may transmit files or related information to those
        services. Please consult the app's Privacy Policy for the actual
        processing method, data practices, retention details, and
        information about third-party providers.
      </p>
    ),
  },
  {
    title: "6. Third-Party Advertising",
    content: (
      <p>
        Advertising providers may process information such as device
        identifiers, advertising IDs, IP addresses, or ad interaction data,
        depending on the provider, your settings, and applicable law.
        Their processing is subject to their own policies. Please review
        our Privacy Policy for the advertising services used by the app.
        We do not guarantee or endorse the products or services advertised
        by third parties.
      </p>
    ),
  },
  {
    title: "7. Acceptable Use",
    content: (
      <p>
        You must not use the app for unlawful activities, attempt to
        interfere with its operation, circumvent security measures, or
        use it to infringe another person's rights. You must not attempt
        unauthorized access to any service associated with the app.
      </p>
    ),
  },
  {
    title: "8. Intellectual Property",
    content: (
      <p>
        The app's branding, interface, and original materials are owned
        by or licensed to CH TECH GIANT (OPC) PRIVATE LIMITED, unless
        otherwise stated. You retain whatever rights you hold in your
        original files. These terms do not transfer ownership of your
        files or grant rights that are not expressly provided.
      </p>
    ),
  },
  {
    title: "9. Availability and Updates",
    content: (
      <p>
        We may update, modify, suspend, or discontinue features to maintain
        or improve the app. Availability may depend on your device,
        operating system, supported formats, and third-party services.
        We do not guarantee uninterrupted or error-free operation.
      </p>
    ),
  },
  {
    title: "10. Disclaimer and Liability",
    content: (
      <p>
        To the extent permitted by applicable law, the app is provided
        on an "as available" basis without a guarantee that every conversion
        will meet your requirements. Nothing in these terms excludes or
        limits any consumer rights or liability that cannot legally be
        excluded or limited. You remain responsible for checking important
        converted files and keeping backups.
      </p>
    ),
  },
  {
    title: "11. Changes to These Terms",
    content: (
      <p>
        We may revise these terms from time to time. Updated terms will
        be published on this page with a revised effective date. Continued
        use of the app after changes take effect is subject to the updated
        terms, to the extent permitted by applicable law.
      </p>
    ),
  },
  {
    title: "12. Governing Law",
    content: (
      <p>
        These terms are governed by the laws of India, subject to applicable
        legal requirements and consumer-protection rights.
      </p>
    ),
  },
  {
    title: "13. Contact Us",
    content: (
      <>
        <p>
          <strong>CH TECH GIANT (OPC) PRIVATE LIMITED</strong>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:info@chtechgiant.com"
            className="text-cyan-400 underline underline-offset-4"
          >
            info@chtechgiant.com
          </a>
        </p>
        <p>Phone: +91 9980785020</p>
        <p>Location: Davangere, Karnataka 577001, India</p>
        <p>
          Website:{" "}
          <a
            href="https://chtechgiant.com"
            className="text-cyan-400 underline underline-offset-4"
          >
            chtechgiant.com
          </a>
        </p>
      </>
    ),
  },
];

export default function FileConverterTerms() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <FileText className="h-8 w-8 text-cyan-400" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            File Converter
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Terms governing your use of our free file-conversion app.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Effective date: 4 November 2026
          </p>
        </motion.header>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <ShieldCheck className="mb-3 h-6 w-6 text-cyan-400" />
            <h2 className="font-semibold text-white">Free to Use</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Core app access is free and supported by ads.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <RefreshCw className="mb-3 h-6 w-6 text-cyan-400" />
            <h2 className="font-semibold text-white">File Conversion</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Results depend on supported formats and file properties.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <Mail className="mb-3 h-6 w-6 text-cyan-400" />
            <h2 className="font-semibold text-white">Contact Support</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Contact us with questions about these terms.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.3,
                delay: Math.min(index * 0.02, 0.2),
              }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
            >
              <h2 className="mb-4 text-xl font-semibold text-cyan-400">
                {section.title}
              </h2>
              <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        <footer className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CH TECH GIANT (OPC) PRIVATE LIMITED.
          All rights reserved.
        </footer>
      </div>
    </main>
  );
}
