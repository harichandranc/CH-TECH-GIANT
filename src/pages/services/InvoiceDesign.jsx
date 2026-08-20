import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const invoiceServices = [
  "Professional Invoice Templates",
  "GST Invoice Design",
  "Business Billing Layouts",
  "Custom Branding",
  "Print Ready Invoices",
  "Digital Invoice Systems",
  "Quotation & Estimate Designs",
  "Receipt & Payment Templates",
];

const invoiceBenefits = [
  "Professional business appearance",
  "Easy-to-read billing structure",
  "Brand-integrated invoice layouts",
  "Print & digital compatibility",
  "Clean modern typography",
  "Clear tax and payment information",
];

const invoiceFeatures = [
  {
    title: "Custom Branding",
    description:
      "We design invoices that match your company logo, brand colors, typography, and overall visual identity.",
  },
  {
    title: "GST Ready Layouts",
    description:
      "Create clean invoice layouts with organized GST, tax, subtotal, discount, and total sections.",
  },
  {
    title: "Digital & Print",
    description:
      "Our invoice designs are optimized for both digital sharing and professional printing.",
  },
  {
    title: "Business Friendly",
    description:
      "Every section is structured for easy reading so customers can quickly understand products, services, and payment details.",
  },
];

const invoiceGallery = [
  {
    image: "/images/invoices/invoice-1.png",
    size: "large",
  },
  {
    image: "/images/invoices/invoice-2.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-3.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-4.png",
    size: "normal",
  },
  {
    image: "/images/invoices/invoice-5.png",
    size: "large",
  },
  {
    image: "/images/invoices/invoice-6.png",
    size: "normal",
  },
];

const designProcess = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We understand your business, billing requirements, products or services, and the information that needs to appear on your invoice.",
  },
  {
    number: "02",
    title: "Create the Layout",
    description:
      "Our designers organize your invoice structure with clear sections for customer details, products, taxes, totals, and payment information.",
  },
  {
    number: "03",
    title: "Apply Your Branding",
    description:
      "Your logo, colors, typography, and brand identity are integrated into the invoice design.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "After final approval, we provide the completed invoice design in suitable formats for digital use and printing.",
  },
];

const InvoiceDesign = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Invoice Design"
        subtitle="Premium invoice and billing designs tailored for modern businesses, startups, and professional services."
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Professional Invoice Solutions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart Billing Design Solutions
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              A professional invoice is more than a billing document. It is
              also an important part of your business identity. We create
              clean, modern, and professional invoice designs that make your
              billing documents easier to understand while maintaining a
              strong brand presence.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you need a GST invoice, service invoice, corporate
              invoice, quotation, estimate, or custom billing document, we
              create layouts tailored to your business requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {invoiceServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-cyan-400/5 transition"
                >
                  <p className="text-gray-300">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Why Professional Invoice Design Matters
            </h3>

            <p className="text-gray-400 leading-relaxed mb-7">
              Your invoice is one of the documents your customers interact
              with after purchasing your product or service. A well-designed
              invoice improves readability, builds trust, and creates a
              consistent professional image for your business.
            </p>

            <div className="space-y-5">
              {invoiceBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span className="text-cyan-400 text-lg">✓</span>

                  <p className="text-gray-400">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* =====================================================
          INVOICE GALLERY
      ====================================================== */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Our Invoice Designs
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            Invoice Design Gallery
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Explore our collection of professional invoice layouts designed
            for different business requirements, industries, and branding
            styles.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {invoiceGallery.map((invoice, index) => {
            const isLarge = invoice.size === "large";

            return (
              <motion.div
                key={invoice.image}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                className={`
                  group relative
                  ${isLarge ? "lg:col-span-6" : "lg:col-span-3"}
                `}
              >
                <div
                  className={`
                    relative overflow-hidden
                    rounded-[2rem]
                    bg-white/[0.025]
                    border border-white/10
                    p-3
                    transition-all duration-500
                    group-hover:border-cyan-400/40
                    group-hover:bg-cyan-400/[0.025]
                    group-hover:-translate-y-2
                    ${
                      isLarge
                        ? "h-[620px]"
                        : "h-[460px]"
                    }
                  `}
                >
                  {/* Glow */}
                  <div className="absolute -inset-1 bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                  {/* Invoice */}
                  <div className="relative z-10 w-full h-full rounded-[1.5rem] overflow-hidden bg-[#0a0f1f] flex items-center justify-center">
                    <img
                      src={invoice.image}
                      alt=""
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-contain
                        transition-all
                        duration-700
                        ease-out
                        group-hover:scale-[1.035]
                      "
                    />

                    {/* Shine */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-tr
                        from-transparent
                        via-white/10
                        to-transparent
                        -translate-x-full
                        group-hover:translate-x-full
                        transition-transform
                        duration-1000
                        pointer-events-none
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* =====================================================
          DESIGN FEATURES
      ====================================================== */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Design Features
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            Everything Your Invoice Needs
          </h2>

          <p className="text-gray-400 leading-relaxed">
            We combine professional visual design with practical billing
            requirements to create invoice layouts that work for your
            business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {invoiceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white/5 border border-cyan-500/10 rounded-3xl p-7 hover:border-cyan-400/30 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5">
                <span className="text-cyan-400 font-bold">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* =====================================================
          DESIGN PROCESS
      ====================================================== */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Our Process
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            How We Create Your Invoice
          </h2>

          <p className="text-gray-400 leading-relaxed">
            From understanding your requirements to delivering the final
            design, we follow a simple and structured invoice design process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designProcess.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="relative bg-white/5 border border-cyan-500/10 rounded-3xl p-7 hover:border-cyan-400/30 transition"
            >
              <span className="text-4xl font-bold text-cyan-400/30">
                {step.number}
              </span>

              <h3 className="text-xl font-semibold mt-5 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* =====================================================
          CTA
      ====================================================== */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-transparent p-10 md:p-14 text-center"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-400/10 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Get Started
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
              Need a Professional Invoice Design?
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Give your business a professional edge with a clean, branded,
              and easy-to-use invoice design tailored to your requirements.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default InvoiceDesign;