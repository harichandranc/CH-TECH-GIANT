import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import PageBanner from "../../../../components/PageBanner";
import SectionWrapper from "../../../../components/SectionWrapper";

const services = [
  "Business Website Development",
  "Custom Web Development",
  "E-Commerce Website Development",
  "MERN Stack Development",
  "React.js Development",
  "School ERP Development",
  "Website Redesign Services",
  "Website Maintenance & Support",
];

const technologies = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
];

const faqData = [
  {
    question: "How much does website development cost in Mangalore?",
    answer:
      "The cost depends on project requirements, features, design complexity, and integrations. We provide affordable and customized solutions for every business.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 1–4 weeks, while larger web applications may require additional development time.",
  },
  {
    question: "Do you provide SEO-friendly websites?",
    answer:
      "Yes. Every website we build follows SEO best practices, mobile responsiveness, performance optimization, and clean coding standards.",
  },
  {
    question: "Do you develop e-commerce websites?",
    answer:
      "Yes. We create secure and scalable e-commerce platforms with payment gateway integration and inventory management.",
  },
];

const WebDevelopmentMangalore = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CH TECH GIANT (OPC) PRIVATE LIMITED",
    description:
      "Web Development Company in Mangalore providing website development, e-commerce development, MERN stack development, software development and app development services.",
    telephone: "+91-9980785020",
    email: "info@chtechgiant.com",
  };

  return (
    <>
      <Helmet>
        <title>
          Web Development Company in Mangalore | Website Development
          Services Karnataka | CH TECH GIANT
        </title>

        <meta
          name="description"
          content="CH TECH GIANT is a leading web development company in Karnataka. We provide website development, custom web applications, e-commerce development, MERN stack solutions, React development, and SEO-friendly websites."
        />

        <meta
          name="keywords"
          content="Web Development Company Mangalore, Website Development Mangalore, Website Developers Mangalore, Web Design Company Mangalore, Web Development Karnataka, React Development Company, MERN Stack Development, Website Development Services Karnataka"
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="bg-[#050816] text-white">
        <PageBanner
          title="Web Development Company in Mangalore"
          subtitle="Professional Website Development Services for Businesses, Startups, Schools, and Organizations Across Karnataka."
        />

        {/* HERO */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Leading Web Development Company in Karnataka,
                Karnataka
              </h2>

              <p className="text-gray-400 leading-relaxed mb-5">
                CH TECH GIANT is a trusted web development company in
                Karnataka helping businesses establish a strong online
                presence through modern, responsive, and SEO-friendly
                websites. We develop websites that are visually
                appealing, fast-loading, secure, and optimized for
                search engines.
              </p>

              <p className="text-gray-400 leading-relaxed mb-5">
                Our team specializes in custom website development,
                e-commerce solutions, business websites, educational
                portals, customer management systems, and enterprise
                web applications using the latest technologies.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Whether you are a startup, school, retail business,
                hospital, manufacturer, or service provider, we create
                websites tailored to your business goals and customer
                requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-6">
                Why Choose CH TECH GIANT?
              </h3>

              <div className="space-y-4 text-gray-400">
                <p>✔ Custom Website Development</p>
                <p>✔ SEO Optimized Websites</p>
                <p>✔ Mobile Responsive Design</p>
                <p>✔ React & MERN Stack Experts</p>
                <p>✔ Fast Website Performance</p>
                <p>✔ Affordable Pricing</p>
                
                <p>✔ Ongoing Maintenance & Support</p>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* SERVICES */}
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Website Development Services
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto">
              We provide comprehensive website development services
              for businesses across Davanagere, Karnataka, and India.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-cyan-500/10 rounded-2xl p-5 text-center"
              >
                {service}
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CONTENT */}
        <SectionWrapper>
          <div className="bg-white/5 border border-cyan-500/10 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-6">
              Professional Website Development Services in Mangalore
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                A professional website is the foundation of modern
                business growth. Customers search online before making
                purchasing decisions, and a high-quality website helps
                build trust, credibility, and brand authority.
              </p>

              <p>
                At CH TECH GIANT, we design and develop websites that
                combine attractive user interfaces with powerful
                functionality. Every website is carefully crafted to
                ensure excellent performance, security, and usability.
              </p>

              <p>
                Our development process includes planning, UI/UX
                design, frontend development, backend development,
                testing, deployment, and ongoing support. This ensures
                that every project meets the highest standards of
                quality and reliability.
              </p>

              <p>
                We serve businesses across Davanagere including retail
                stores, educational institutions, hospitals,
                restaurants, startups, service providers, and
                enterprises looking to strengthen their digital
                presence.
              </p>

              <p>
                Our websites are fully responsive and optimized for
                mobile devices, ensuring a seamless experience for
                users regardless of screen size. We also implement
                search engine optimization best practices to improve
                visibility in Google search results.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* TECHNOLOGIES */}
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Technologies We Use
            </h2>

            <p className="text-gray-400">
              Modern technologies for high-performance web solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-cyan-500/10 rounded-2xl p-5 text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* AREAS */}
        <SectionWrapper>
          <div className="bg-white/5 border border-cyan-500/10 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-6">
              Areas We Serve
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              We provide web development services throughout
              Mangalore and surrounding regions across Karnataka.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether your business is local or operates nationally,
              we can help build a professional online presence that
              attracts customers and supports business growth.
            </p>
          </div>
        </SectionWrapper>

        {/* COMPANY */}
        <SectionWrapper>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-6">
              About CH TECH GIANT
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              CH TECH GIANT (OPC) PRIVATE LIMITED is a software,
              website, mobile app, and game development company
              located in Karnataka.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We help businesses leverage technology through
              innovative digital solutions including websites,
              mobile applications, ERP systems, custom software,
              and cloud-based platforms.
            </p>
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper>
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-cyan-500/10 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {faq.question}
                </h3>

                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CONTACT */}
        <SectionWrapper>
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-4">
              Get a Free Consultation
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mb-6">
              Looking for a reliable web development company in
              Karnataka? Contact CH TECH GIANT today and let's
              discuss your project requirements.
            </p>

            <div className="space-y-2 text-gray-300">
              <p>📍 Karnataka </p>
              <p>📞 +91 9980785020</p>
              <p>✉️ info@chtechgiant.com</p>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default WebDevelopmentMangalore;