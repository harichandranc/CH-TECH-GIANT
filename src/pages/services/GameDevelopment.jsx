import { motion } from "framer-motion";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const services = [
  "2D Game Development",
  "3D Game Development",
  "Unity Game Development",
  "Unreal Engine Development",
  "Mobile Game Development",
  "Multiplayer Game Development",
  "AR & VR Game Development",
  "Educational & Simulation Games",
];

const platforms = [
  "Android",
  "iOS",
  "Windows",
  "macOS",
  "Web Games",
  "Cross-Platform Solutions",
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
        subtitle="Professional game development services for mobile, PC, multiplayer, and cross-platform gaming experiences."
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
              CH TECH GIANT provides professional game development services
              for startups, businesses, educational institutions, and gaming
              companies. We create engaging, scalable, and visually impressive
              games designed to deliver smooth gameplay and memorable user
              experiences across multiple platforms.
            </p>

            <p className="text-gray-400 leading-relaxed mb-5">
              Our game development expertise covers mobile games, Unity
              projects, Unreal Engine development, multiplayer gaming,
              educational games, simulation games, casual games, and custom
              gaming solutions. We combine creative design with reliable
              technology to build games that meet specific business and
              audience requirements.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              From an initial game concept and prototype to development,
              testing, deployment, and ongoing support, we help turn your idea
              into a polished and market-ready gaming product.
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
              <p>✔ Unity & Unreal Engine Development</p>
              <p>✔ Multiplayer & Online Game Systems</p>
              <p>✔ Performance & Gameplay Optimization</p>
              <p>✔ Cross-Platform Development</p>
              <p>✔ Game Monetization Integration</p>
              <p>✔ Backend & Cloud Infrastructure</p>
              <p>✔ Testing, Deployment & Technical Support</p>
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
            We provide end-to-end game development services covering game
            concept, design, prototyping, programming, testing, deployment,
            monetization, and ongoing technical support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-3xl p-8 border border-cyan-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              Mobile Game Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Develop engaging Android and iOS games with responsive controls,
              optimized performance, smooth gameplay, cloud integration,
              leaderboards, achievements, and monetization features.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-cyan-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              Multiplayer Game Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Build online multiplayer experiences with real-time networking,
              matchmaking, player synchronization, chat systems, rankings,
              player accounts, and scalable backend infrastructure.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-cyan-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              3D Game Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Create immersive 3D games with detailed environments, realistic
              physics, character animations, interactive gameplay systems,
              optimized graphics, and smooth rendering performance.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-cyan-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              AR & VR Game Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Develop interactive augmented and virtual reality experiences
              for entertainment, education, simulation, training, marketing,
              and immersive digital applications.
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
            Our structured development process helps transform your concept
            into a reliable, engaging, and market-ready gaming product.
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
          Technologies & Tools
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
            Custom Game Development Solutions for Different Industries
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              Our custom game development services help startups, businesses,
              educational institutions, and gaming companies create engaging
              interactive experiences. We develop action games, puzzle games,
              strategy games, educational games, simulation games, racing
              games, adventure games, multiplayer games, and other custom
              gaming solutions.
            </p>

            <p>
              By combining creative game design, modern programming
              technologies, game engines, backend infrastructure, and
              performance optimization, we build gaming products that provide
              smooth experiences and support long-term growth.
            </p>

            <p>
              Our solutions can be developed for entertainment, education,
              marketing, employee training, simulations, customer engagement,
              and other interactive use cases. Every project is planned around
              the target audience, gameplay requirements, platform, and
              business objectives.
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
            Looking for a professional game development company? Contact
            CH TECH GIANT to discuss your mobile game, multiplayer game,
            Unity project, Unreal Engine project, or custom gaming solution.
          </p>

          <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold">
            Get a Free Consultation
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default GameDevelopment;