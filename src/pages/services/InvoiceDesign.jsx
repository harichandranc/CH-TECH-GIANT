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
];

const InvoiceDesign = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Invoice Design"
        subtitle="Premium invoice and billing designs tailored for modern businesses, startups, and professional services."
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart Billing Design Solutions
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              We create professional invoice systems and elegant
              billing layouts that improve brand identity and
              streamline financial documentation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {invoiceServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300">{service}</p>
                </div>
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
              Invoice Design Benefits
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>✔ Professional business appearance</p>

              <p>✔ Easy-to-read billing structure</p>

              <p>✔ Brand-integrated invoice layouts</p>

              <p>✔ Print & digital compatibility</p>

              <p>✔ Clean modern typography</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default InvoiceDesign;