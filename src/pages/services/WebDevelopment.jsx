import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const features = [
  "Responsive Business Websites",
  "Modern UI/UX Design",
  "Admin Dashboards",
  "E-Commerce Solutions",
  "Custom Web Applications",
  "SEO Friendly Development",
];

const portfolio = [
  {
    title: "Corporate Business Website",
    image: [
      "/services/web development/fashion landing page/thumbnail.webp",
      "/services/web development/fashion landing page/1.webp",
      "/services/web development/fashion landing page/2.webp",
      "/services/web development/fashion landing page/3.webp",
      "/services/web development/fashion landing page/4.webp",
      "/services/web development/fashion landing page/5.webp",
      "/services/web development/fashion landing page/6.webp",
    ],
    category: "Business",
    tech: "HTML • CSS • JavaScript",
    description:
      "Modern corporate website designed for business growth with responsive UI and premium animations.",
  },
  
  {
    title: "Fashion Store Landing Page",
    image: [
      "/services/web development/fashion landing page/thumbnail.webp",
      "/services/web development/fashion landing page/1.webp",
      "/services/web development/fashion landing page/2.webp",
      "/services/web development/fashion landing page/3.webp",
      "/services/web development/fashion landing page/4.webp",
      "/services/web development/fashion landing page/5.webp",
      "/services/web development/fashion landing page/6.webp",
    ],
    category: "E-Commerce",
    tech: "React • Tailwind CSS",
    description:
      "Premium fashion e-commerce landing page with modern shopping experience.",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Firebase",
  "AWS",
  "Vercel",
  "TypeScript",
  "REST APIs",
];

const services = [
  {
    title: "Business Website Development",
    description:
      "Professional responsive websites for businesses, startups, and organizations.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Scalable web applications tailored to your business requirements.",
  },
  {
    title: "E-Commerce Development",
    description:
      "Online shopping websites with secure payment gateway integration.",
  },
  {
    title: "Admin Dashboard Development",
    description:
      "Powerful dashboards with analytics, user management, and reporting.",
  },
  {
    title: "CMS Development",
    description:
      "Content management systems for easy website administration.",
  },
  {
    title: "Website Maintenance",
    description:
      "Regular updates, security monitoring, backups, and technical support.",
  },
];

const processSteps = [
  "Discovery",
  "Planning",
  "Design",
  "Development",
  "Launch",
];

const industries = [
  "Healthcare",
  "Education",
  "Finance",
  "E-Commerce",
  "Real Estate",
  "Logistics",
  "Travel",
  "Manufacturing",
  "Technology",
];

const WebDevelopment = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Web Development"
        subtitle="We build premium modern websites, scalable web applications, business platforms, and high-performance digital solutions."
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
              Professional Web Development Services
            </h1>

            <p className="text-gray-400 leading-relaxed mb-6">
              CH TECH GIANT develops high-performance websites and advanced web
              applications tailored for startups, businesses, organizations,
              and enterprises. We focus on creating fast, scalable, secure,
              and user-friendly digital solutions.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you need a corporate website, e-commerce platform,
              customer portal, SaaS application, or custom web solution, our
              experienced development team can transform your vision into a
              powerful online platform.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300">{feature}</p>
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
              Why Choose CH TECH GIANT?
            </h2>

            <div className="space-y-5 text-gray-400">
              <p>✔ Modern Responsive Architecture</p>
              <p>✔ Scalable Frontend & Backend Systems</p>
              <p>✔ Fast Loading Optimized Websites</p>
              <p>✔ Premium UI/UX Experience</p>
              <p>✔ SEO Friendly Development</p>
              <p>✔ Business-Focused Solutions</p>
              <p>✔ Secure & Reliable Infrastructure</p>
              <p>✔ Long-Term Support & Maintenance</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Web Development Services
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            End-to-end web development solutions designed to help businesses
            establish a strong digital presence and achieve sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((service, index) => (
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

      {/* Process */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Development Process
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
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
            Leading Web Development Company
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              CH TECH GIANT is a professional web development company offering
              custom website development, web application development,
              e-commerce solutions, and enterprise digital platforms. Our team
              creates responsive, SEO-friendly, and performance-optimized
              websites that help businesses attract customers and grow online.
            </p>

            <p>
              We use modern technologies and industry best practices to build
              websites that deliver excellent user experiences across desktop,
              tablet, and mobile devices. Every project is developed with
              scalability, security, and future growth in mind.
            </p>

            <p>
              From startups and small businesses to large enterprises, we help
              organizations establish a strong online presence through modern
              web development solutions tailored to their unique requirements.
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
              How much does website development cost?
            </h3>
            <p className="text-gray-400">
              Website development costs depend on project complexity,
              features, design requirements, and integrations.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6">
            <h3 className="font-semibold mb-3">
              Do you develop responsive websites?
            </h3>
            <p className="text-gray-400">
              Yes. All websites are fully responsive and optimized for mobile,
              tablet, and desktop devices.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-6">
            <h3 className="font-semibold mb-3">
              Do you provide website maintenance?
            </h3>
            <p className="text-gray-400">
              Yes. We provide updates, security monitoring, backups, and
              performance optimization services.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready To Build Your Website?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Partner with CH TECH GIANT to create a modern, scalable, and
            SEO-friendly website that helps your business grow online.
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

export default WebDevelopment;