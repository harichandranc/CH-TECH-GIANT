import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const services = [
  "2D Game Development",
  "3D Game Development",
  "Unity Game Development",
  "Unreal Engine Development",
  "Android Game Development",
  "iOS Game Development",
  "Multiplayer Game Development",
  "AR & VR Game Development",
];

const platforms = [
  "Android",
  "iOS",
  "Windows",
  "MacOS",
  "Web Games",
  "Cross Platform Solutions",
];

const technologies = [
  "Unity",
  "Unreal Engine",
  "C#",
  "C++",
  "Photon Multiplayer",
  "Firebase",
  "Node.js",
  "MongoDB",
];

const process = [
  "Game Concept & Planning",
  "Game Design & Prototyping",
  "Development & Testing",
  "Deployment & Support",
];

const GameDevelopment = () => {
  return (
    <div className="bg-[#050816] text-white">
      <PageBanner
        title="Game Development Services"
        subtitle="Professional game development company delivering high-performance mobile, PC, multiplayer, and cross-platform gaming solutions."
      />

      {/* INTRO */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Professional Game Development Company
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              CH TECH GIANT provides professional game development
              services for startups, enterprises, educational
              institutions, and gaming brands. We create engaging,
              scalable, and visually stunning games that deliver
              exceptional user experiences across multiple platforms.
            </p>

            <p className="text-gray-400 leading-relaxed mb-5">
              Our game developers specialize in mobile game development,
              Unity game development, Unreal Engine projects,
              multiplayer gaming systems, educational games,
              simulation games, casual games, and custom gaming
              solutions designed to meet business goals.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you need a simple mobile game, a multiplayer
              gaming platform, or a large-scale commercial game,
              our experienced team can transform your concept into
              a market-ready product.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 backdrop-blur-xl hover:border-cyan-400/30 transition"
                >
                  <p className="text-gray-300">{service}</p>
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
            <h3 className="text-2xl font-semibold mb-6">
              Why Choose Our Game Development Services?
            </h3>

            <div className="space-y-5 text-gray-400">
              <p>✔ Custom Game Development Solutions</p>
              <p>✔ Advanced Unity & Unreal Expertise</p>
              <p>✔ Multiplayer & Online Game Systems</p>
              <p>✔ High Performance Optimization</p>
              <p>✔ Cross Platform Compatibility</p>
              <p>✔ Monetization Integration</p>
              <p>✔ Cloud & Backend Infrastructure</p>
              <p>✔ Long-Term Technical Support</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* SERVICES */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Complete Game Development Services
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto">
            We provide end-to-end game development services from
            concept design and prototyping to development,
            testing, deployment, monetization, and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-3xl p-8 border border-cyan-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              Mobile Game Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Build engaging Android and iOS games with optimized
              performance, smooth gameplay, cloud integration,
              leaderboards, achievements, and monetization systems.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-cyan-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              Multiplayer Game Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Create real-time multiplayer games with matchmaking,
              networking, player synchronization, chat systems,
              ranking systems, and scalable server architecture.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-cyan-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              3D Game Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Develop immersive 3D gaming experiences using modern
              graphics technologies, realistic physics systems,
              advanced animations, and optimized rendering.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-cyan-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              AR & VR Game Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Deliver next-generation augmented reality and virtual
              reality gaming experiences for entertainment,
              education, simulation, and training applications.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* PROCESS */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Game Development Process
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            A structured development workflow ensures quality,
            scalability, and successful project delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-cyan-500/10 rounded-3xl p-6 text-center"
            >
              <div className="text-cyan-400 text-3xl font-bold mb-4">
                0{index + 1}
              </div>

              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* PLATFORMS */}
      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center mb-12">
          Platforms We Support
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-5 border border-cyan-500/10 text-center"
            >
              {platform}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* TECHNOLOGY */}
      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center mb-12">
          Technologies & Game Engines
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-5 border border-cyan-500/10 text-center"
            >
              {tech}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* SEO CONTENT */}
      <SectionWrapper>
        <div className="bg-white/5 border border-cyan-500/10 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-6">
            Custom Game Development Solutions for Every Industry
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              Our custom game development services help businesses,
              startups, educational institutions, and gaming companies
              create innovative digital experiences. We build action
              games, puzzle games, strategy games, educational games,
              simulation games, racing games, adventure games,
              multiplayer games, and custom gaming platforms.
            </p>

            <p>
              By combining creative game design, advanced programming,
              cloud infrastructure, and modern game engines, we deliver
              gaming products that engage players, improve retention,
              and generate revenue through effective monetization
              strategies.
            </p>

            <p>
              Whether your goal is entertainment, education, marketing,
              employee training, or customer engagement, our expert
              game developers can create solutions tailored to your
              unique requirements and target audience.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Game Development Project Today
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Looking for a trusted game development company? Contact
            CH TECH GIANT to build high-quality mobile games,
            multiplayer games, Unity projects, Unreal Engine games,
            and custom gaming solutions.
          </p>

          <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold">
            Get Free Consultation
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default GameDevelopment;