import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const features = [
  "Android App Development",
  "iOS App Development",
  "Flutter App Development",
  "Cross Platform Apps",
  "Enterprise App Solutions",
  "Custom Mobile Applications",
  "App UI/UX Design",
  "Backend API Integration",
];

const services = [
  {
    title: "Android App Development",
    description:
      "Custom Android applications built for startups, businesses, and enterprises using modern technologies.",
  },
  {
    title: "iOS App Development",
    description:
      "Premium iPhone and iPad applications optimized for performance, security, and user experience.",
  },
  {
    title: "Flutter App Development",
    description:
      "Single codebase mobile applications for Android and iOS with faster development and lower costs.",
  },
  {
    title: "Enterprise Mobile Apps",
    description:
      "Secure enterprise-grade applications designed to improve workflows and productivity.",
  },
  {
    title: "App UI/UX Design",
    description:
      "Modern interfaces and seamless user experiences that increase engagement and retention.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, bug fixing, and performance optimization.",
  },
];

const AppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>
          Mobile App Development Company | Android, iOS & Flutter Apps | CH
          TECH GIANT
        </title>

        <meta
          name="description"
          content="CH TECH GIANT provides Android app development, iOS app development, Flutter app development, enterprise mobile applications, UI/UX design, and custom software solutions."
        />

        <meta
          name="keywords"
          content="mobile app development company, android app development, ios app development, flutter app development, custom mobile apps, enterprise app development"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com/app-development"
        />
      </Helmet>

      <div className="bg-[#050816] text-white">
        <PageBanner
          title="Mobile App Development"
          subtitle="Building scalable Android, iOS, and Flutter applications for startups, businesses, and enterprises."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Mobile App Development Company
              </h1>

              <p className="text-gray-400 leading-relaxed mb-6">
                CH TECH GIANT specializes in creating powerful mobile
                applications that help businesses grow, engage customers,
                streamline operations, and generate revenue. Our team develops
                modern Android, iOS, and Flutter applications tailored to your
                unique business requirements.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you're launching a startup MVP, building an enterprise
                platform, or modernizing an existing application, our experts
                deliver secure, scalable, and high-performing mobile solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 hover:border-cyan-400/30 transition"
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
              className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">
                Why Choose CH TECH GIANT?
              </h2>

              <div className="space-y-4 text-gray-400">
                <p>✔ Android & iOS Specialists</p>
                <p>✔ Flutter Cross-Platform Experts</p>
                <p>✔ Modern UI/UX Design</p>
                <p>✔ Secure Backend Integration</p>
                <p>✔ Cloud-Based Architecture</p>
                <p>✔ Fast Development Cycles</p>
                <p>✔ App Store & Play Store Publishing</p>
                <p>✔ Long-Term Support & Maintenance</p>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Services */}
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our App Development Services
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto">
              End-to-end mobile application development solutions designed for
              startups, SMEs, and enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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

        {/* Process */}
        <SectionWrapper>
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Discovery",
              "Design",
              "Development",
              "Testing",
              "Launch",
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

        {/* SEO Content */}
        <SectionWrapper>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Professional Mobile App Development Solutions
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Mobile applications have become essential tools for businesses
                looking to improve customer engagement, automate processes, and
                increase revenue. At CH TECH GIANT, we create innovative mobile
                applications that deliver measurable business results.
              </p>

              <p>
                Our development team uses the latest technologies including
                Flutter, Android, iOS, Firebase, Node.js, and cloud platforms
                to build secure and scalable applications. Every project is
                designed with performance, usability, and future growth in
                mind.
              </p>

              <p>
                From healthcare and education to fintech, logistics,
                e-commerce, and enterprise solutions, we help organizations
                leverage mobile technology to stay competitive in today's
                digital marketplace.
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
                How much does mobile app development cost?
              </h3>
              <p className="text-gray-400">
                The cost depends on features, complexity, platforms, and
                integrations required. We provide custom quotes based on your
                project requirements.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-6">
              <h3 className="font-semibold mb-3">
                Do you develop both Android and iOS apps?
              </h3>
              <p className="text-gray-400">
                Yes. We develop Android applications, iOS applications, and
                Flutter cross-platform apps.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-6">
              <h3 className="font-semibold mb-3">
                Do you provide post-launch support?
              </h3>
              <p className="text-gray-400">
                Yes. We offer maintenance, updates, monitoring, bug fixes, and
                feature enhancements after launch.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper>
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 rounded-3xl p-10 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready To Build Your App?
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              Partner with CH TECH GIANT to transform your idea into a
              powerful mobile application.
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
    </>
  );
};

export default AppDevelopment;