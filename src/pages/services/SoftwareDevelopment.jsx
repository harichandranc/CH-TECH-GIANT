
import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const services = [
  "Desktop Software",
  "ERP Systems",
  "Business Management Tools",
  "Billing Software",
  "Automation Systems",
  "Custom Enterprise Solutions",
];

const softwareServices = [
  {
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed to meet your unique business requirements and workflows.",
  },
  {
    title: "ERP Development",
    description:
      "Enterprise Resource Planning systems that streamline operations and improve productivity.",
  },
  {
    title: "CRM Software",
    description:
      "Customer Relationship Management solutions for better customer engagement and sales management.",
  },
  {
    title: "Billing & Accounting Software",
    description:
      "Automated billing, invoicing, accounting, and financial management systems.",
  },
  {
    title: "Business Automation Tools",
    description:
      "Workflow automation software that reduces manual effort and increases efficiency.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Scalable software platforms designed for organizations and large enterprises.",
  },
];

const technologies = [
  "Java",
  "C#",
  ".NET",
  "Python",
  "Node.js",
  "React",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "REST APIs",
];

const industries = [
  "Healthcare",
  "Education",
  "Finance",
  "Manufacturing",
  "Retail",
  "Logistics",
  "Real Estate",
  "Government",
  "Technology",
];

const SoftwareDevelopment = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Software Development"
        subtitle="Custom software solutions engineered for performance, scalability, automation, and business growth."
      />

      {/* Hero Section */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Professional Software Development Services
            </h1>

            <p className="text-gray-400 leading-relaxed mb-6">
              CH TECH GIANT develops powerful software solutions for startups,
              businesses, institutions, and enterprises. Our software systems
              are built to improve efficiency, automate processes, and support
              long-term business growth.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              From desktop applications and ERP systems to enterprise software
              and automation platforms, we deliver secure, scalable, and
              high-performance solutions tailored to your specific business
              requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-semibold mb-6">
              Software Expertise
            </h2>

            <div className="space-y-5 text-gray-400">
              <p>✔ Modern Scalable Architecture</p>
              <p>✔ Secure Database Integration</p>
              <p>✔ Automation-Focused Workflows</p>
              <p>✔ High-Performance Systems</p>
              <p>✔ Business Productivity Optimization</p>
              <p>✔ Cloud Integration</p>
              <p>✔ Enterprise-Grade Security</p>
              <p>✔ Ongoing Support & Maintenance</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Software Development Services
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            End-to-end software development solutions that help businesses
            automate operations, improve efficiency, and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-cyan-500/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Technologies */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Technologies We Use
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 text-center"
            >
              {tech}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Development Process */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Development Process
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            "Analysis",
            "Planning",
            "Development",
            "Testing",
            "Deployment",
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white/5 border border-cyan-500/10 rounded-3xl p-6 text-center"
            >
              <div className="text-cyan-400 text-3xl font-bold mb-3">
                {index + 1}
              </div>

              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Industries We Serve
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/5 border border-cyan-500/10 rounded-2xl p-5 text-center"
            >
              {industry}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* SEO Content */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Custom Software Development Company
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              CH TECH GIANT is a trusted software development company
              specializing in custom software development, enterprise software
              solutions, ERP systems, CRM platforms, billing applications, and
              business automation tools. We help organizations streamline
              operations and improve productivity through innovative software
              solutions.
            </p>

            <p>
              Our software engineers use modern technologies and industry best
              practices to build scalable, secure, and reliable software
              systems. Every solution is designed to support business growth,
              improve operational efficiency, and deliver long-term value.
            </p>

            <p>
              Whether you need desktop software, cloud-based applications,
              enterprise systems, or workflow automation tools, our team can
              deliver a customized solution that aligns with your business
              objectives and future expansion plans.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-3xl p-6">
            <h3 className="font-semibold mb-3">
              What types of software do you develop?
            </h3>
            <p className="text-gray-400">
              We develop desktop applications, ERP systems, CRM software,
              billing software, automation tools, and enterprise solutions.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6">
            <h3 className="font-semibold mb-3">
              Can you build custom software for my business?
            </h3>
            <p className="text-gray-400">
              Yes. We create fully customized software solutions based on your
              business requirements and workflows.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6">
            <h3 className="font-semibold mb-3">
              Do you provide software maintenance?
            </h3>
            <p className="text-gray-400">
              Yes. We provide ongoing support, updates, monitoring, and
              maintenance services.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready To Build Custom Software?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Partner with CH TECH GIANT to develop secure, scalable, and
            high-performance software solutions that help your business grow.
          </p>

          <a
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition"
          >
            Get Free Consultation
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SoftwareDevelopment;