
import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, CreditCard, Mail } from "lucide-react";

const sections = [
  {
    title: "1. About Web Codshop",
    content: (
      <>
        <p>
          Web Codshop is a digital marketplace operated by CH TECH GIANT
          (OPC) PRIVATE LIMITED. It provides access to digital products such
          as website templates, UI kits, source code, software resources,
          and other downloadable digital content.
        </p>
        <p>
          By accessing Web Codshop, creating an account, or purchasing a
          product, you agree to these Terms of Service.
        </p>
      </>
    ),
  },
  {
    title: "2. Eligibility and Account Responsibility",
    content: (
      <>
        <p>
          You must have the legal capacity to enter into a binding agreement
          to use paid services. If you use Web Codshop on behalf of a
          business or organization, you confirm that you are authorized to
          accept these terms on its behalf.
        </p>
        <p>
          You are responsible for keeping your account credentials secure
          and for activities carried out through your account.
        </p>
      </>
    ),
  },
  {
    title: "3. Digital Products and Licences",
    content: (
      <>
        <p>
          Products may include React projects, website templates, UI kits,
          source code, design resources, and other digital downloads.
          Product descriptions should explain the features, format, and
          intended use of each item.
        </p>
        <p>
          After purchasing a product, you receive the licence or usage
          rights specified on that product's page or in its accompanying
          licence terms. Purchasing a digital product does not automatically
          transfer ownership of its intellectual property.
        </p>
        <p>
          Unless the applicable product licence expressly permits it, you
          must not resell, redistribute, sublicense, or publicly share the
          original downloadable files.
        </p>
      </>
    ),
  },
  {
    title: "4. Pricing and Payments",
    content: (
      <>
        <p>
          Product prices and applicable taxes, where relevant, will be
          displayed during the purchase process. You agree to pay the
          amount shown at checkout before receiving access to paid products.
        </p>
        <p>
          Web Codshop may accept payments through third-party payment
          providers, including Razorpay and PayPal. Payment processing is
          subject to the applicable provider's terms, conditions, security
          checks, and policies.
        </p>
        <p>
          We do not receive or store your complete payment-card credentials
          through this Terms of Service page. Payment information is handled
          according to the payment provider's processes and applicable
          privacy policies.
        </p>
        <p>
          An order may be delayed or declined if payment is unsuccessful,
          under review, or suspected of being unauthorized.
        </p>
      </>
    ),
  },
  {
    title: "5. All Sales Are Final — Refund Policy",
    content: (
      <>
        <p>
          Because Web Codshop primarily sells digital products that may be
          made available for immediate download or access, <strong>
          all purchases are final, and refunds are not offered as a standard
          policy.</strong>
        </p>
        <p>
          Please review the product description, compatibility requirements,
          included files, and licence terms before making a purchase.
        </p>
        <p>
          This policy does not exclude any refund, cancellation, replacement,
          or other remedy that must be provided under applicable law.
          Payment disputes, duplicate charges, unauthorized transactions,
          and payment-provider requirements will be handled in accordance
          with applicable law and the relevant provider's rules.
        </p>
      </>
    ),
  },
  {
    title: "6. Downloads and Product Availability",
    content: (
      <>
        <p>
          Access to a digital product may depend on successful payment,
          account status, technical availability, and the delivery method
          provided for that product.
        </p>
        <p>
          You are responsible for having compatible hardware, software,
          internet access, and the technical knowledge needed to use the
          product, unless the product listing states otherwise.
        </p>
        <p>
          We may update, maintain, replace, or discontinue products and
          website features when reasonably necessary. We do not guarantee
          uninterrupted availability or permanent availability of every
          listing.
        </p>
      </>
    ),
  },
  {
    title: "7. Acceptable Use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Use Web Codshop for unlawful or fraudulent activities.</li>
          <li>Attempt to access accounts, systems, or data without authorization.</li>
          <li>Upload malicious code or interfere with the platform's operation.</li>
          <li>Violate the intellectual property rights of Web Codshop, its
            contributors, or other rights holders.</li>
          <li>Redistribute purchased digital products contrary to their
            applicable licence terms.</li>
          <li>Misuse payment systems or deliberately submit false payment
            or transaction information.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Intellectual Property",
    content: (
      <>
        <p>
          Web Codshop's website design, branding, logos, original text, and
          platform materials are owned by or licensed to CH TECH GIANT
          (OPC) PRIVATE LIMITED, unless otherwise stated.
        </p>
        <p>
          Individual digital products may be owned by the company or their
          respective creators and rights holders. Your permitted use of
          each product is governed by its applicable licence.
        </p>
      </>
    ),
  },
  {
    title: "9. Third-Party Services",
    content: (
      <>
        <p>
          Web Codshop may rely on third-party services for payment
          processing, hosting, analytics, security, or other functionality.
          Those services may have separate terms and privacy policies.
        </p>
        <p>
          We are not responsible for third-party services beyond the
          responsibilities imposed on us by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "10. Privacy",
    content: (
      <>
        <p>
          Your use of Web Codshop is also subject to our Privacy Policy,
          which explains how personal information is handled.
        </p>
        <p>
          Read our{" "}
          <a
            href="/apps/web-codshop/privacy-policy"
            className="text-cyan-400 underline underline-offset-4"
          >
            Web Codshop Privacy Policy
          </a>.
        </p>
      </>
    ),
  },
  {
    title: "11. Disclaimer and Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Web Codshop is provided
          on an "as available" basis. We do not guarantee that every product
          will meet every user's specific requirements or work with every
          software environment.
        </p>
        <p>
          Nothing in these terms excludes or limits liability, consumer
          rights, or statutory guarantees that cannot lawfully be excluded
          or limited. Subject to that restriction, the company will not be
          liable for indirect or consequential losses arising from use of
          the platform where such exclusion is legally permitted.
        </p>
      </>
    ),
  },
  {
    title: "12. Suspension or Termination",
    content: (
      <>
        <p>
          We may suspend or restrict access to Web Codshop where reasonably
          necessary to address suspected fraud, security risks, unlawful
          activity, or a material violation of these terms.
        </p>
        <p>
          Any suspension or termination will be subject to applicable law
          and will not remove rights that have already accrued to you under
          mandatory legal protections.
        </p>
      </>
    ),
  },
  {
    title: "13. Changes to These Terms",
    content: (
      <p>
        We may revise these Terms of Service from time to time. Updated
        terms will be published on this page with a revised effective date.
        Your continued use of Web Codshop after changes take effect is
        subject to the updated terms, to the extent permitted by law.
      </p>
    ),
  },
  {
    title: "14. Governing Law",
    content: (
      <p>
        These terms are governed by the laws of India. Any disputes will
        be addressed by the competent courts or dispute-resolution
        mechanisms applicable under Indian law, subject to mandatory
        consumer-protection rights and jurisdictional requirements.
      </p>
    ),
  },
  {
    title: "15. Contact Us",
    content: (
      <>
        <p>
          If you have questions about these terms, a product, or a payment,
          contact us using the details below.
        </p>
        <p><strong>CH TECH GIANT (OPC) PRIVATE LIMITED</strong></p>
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

export default function WebCodshopTerms() {
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
            Web Codshop
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Please read these terms carefully before purchasing or using
            digital products on Web Codshop.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Effective date: 4 November 2026
          </p>
        </motion.header>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <ShieldCheck className="mb-3 h-6 w-6 text-cyan-400" />
            <h2 className="font-semibold text-white">Digital Products</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Product use is governed by the applicable licence.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <CreditCard className="mb-3 h-6 w-6 text-cyan-400" />
            <h2 className="font-semibold text-white">Secure Payments</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Payments may be processed by Razorpay or PayPal.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <Mail className="mb-3 h-6 w-6 text-cyan-400" />
            <h2 className="font-semibold text-white">Contact Support</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Contact us if you have questions about a purchase.
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
              transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.2) }}
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
