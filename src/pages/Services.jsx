import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "App Development",
    description:
      "Android and cross-platform mobile app development with premium UI and smooth performance.",
    image: "/services/app.webp",
    link: "/../app-development",
  },

  {
    title: "Software Development",
    description:
      "Custom desktop and enterprise software development solutions.",
    image: "/services/software.jpg",
    link: "/../software-development",
  },

  {
    title: "Web Development",
    description:
      "Modern responsive websites and scalable web applications.",
    image: "/services/web.jpg",
    link: "/web-development",
  },

  {
    title: "Game Development",
    description:
      "Interactive 2D & 3D gaming experiences with immersive gameplay.",
    image: "/services/game.jpeg",
    link: "/game-development",
  },

  {
    title: "IT Consulting",
    description:
      "Professional technology consulting and business digital transformation solutions.",
    image: "/services/itconsult.jpg",
    link: "/it-consulting",
  },

  {
    title: "Pamphlet Design",
    description:
      "Modern futuristic Pamphlets and flyers with premium templates.",
    image: "/services/pamphlet.png",
    link: "/pamphlet-design",
  },
  {
    title: "Invoice Design",
    description:
      "Modern futuristic Invoice templates with premium designs.",
    image: "/services/invoice.png",
    link: "/invoice-design",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            Our Services
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            What We <span className="text-cyan-400">Provide</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            CH TECH GIANT delivers premium software solutions,
            modern applications, futuristic websites, and
            scalable digital experiences for businesses.
          </p>

        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer h-full"
              >

                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                </div>

                {/* CONTENT */}
                <div className="relative p-8 -mt-20 z-10">

                  <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6">

                    <h2 className="text-3xl font-bold mb-4">
                      {service.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                  </div>

                </div>

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-500"></div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Services;