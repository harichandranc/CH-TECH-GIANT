import { motion } from "framer-motion";

const features = [
  {
    title: "Modern Technologies",
    description:
      "React, Flutter, MERN Stack, Firebase, AI tools and modern scalable technologies.",
  },

  {
    title: "Premium UI/UX",
    description:
      "Clean futuristic interfaces with smooth responsive user experiences.",
  },

  {
    title: "Custom Solutions",
    description:
      "Tailored software, mobile apps, and websites designed for businesses and startups.",
  },

  {
    title: "Reliable Support",
    description:
      "Professional support and continuous improvements for long-term growth.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >

          <p className="text-gray-400 uppercase tracking-[5px] mb-4">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Building Modern
            <span className="block text-white/80">
              Digital Solutions
            </span>
          </h1>

          <p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
            CH TECH GIANT (OPC) PRIVATE LIMITED is a modern software company
            focused on developing premium websites, mobile applications,
            software systems, and futuristic digital experiences for
            businesses and startups.
          </p>

        </motion.div>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <img
              src="/about/about.jpg"
              alt="About CH TECH GIANT"
              className="rounded-3xl border border-white/10 shadow-2xl object-cover"
            />

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Premium Software Solutions
              For Modern Businesses
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We specialize in creating high-performance websites,
              mobile applications, business software, and scalable
              digital systems using modern technologies and clean UI design.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Our goal is to help businesses establish a strong digital
              presence with premium technology solutions that combine
              performance, aesthetics, and user experience.
            </p>

          </motion.div>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
            >

              <h3 className="text-2xl font-bold mb-5">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default About;