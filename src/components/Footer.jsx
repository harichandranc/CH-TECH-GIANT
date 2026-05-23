import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

const serviceLinks = [
  {
    name: "Web Development",
    path: "/services/web-development",
  },
  {
    name: "App Development",
    path: "/services/app-development",
  },
  {
    name: "Software Development",
    path: "/services/software-development",
  },
  {
    name: "Game Development",
    path: "/services/game-development",
  },
  {
    name: "IT Consulting",
    path: "/services/it-consulting",
  },
  {
    name: "Pamphlet Design",
    path: "/services/pamphlet-design",
  },
  {
    name: "Invoice Design",
    path: "/services/invoice-design",
  },
];

function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 bg-[#050816] pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COMPANY */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">
              CH TECH GIANT
            </h2>

            <p className="text-gray-400 leading-7 mb-6">
              Premium software company delivering modern websites,
              mobile apps, software solutions, and digital experiences
              for startups and businesses.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">

              <a
                href="https://www.facebook.com/CHTECHGIANT/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11 h-11 rounded-xl
                  border border-cyan-500/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-300
                  hover:bg-cyan-500
                  hover:text-black
                  transition-all duration-300
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/chtechgiant/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11 h-11 rounded-xl
                  border border-cyan-500/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-300
                  hover:bg-cyan-500
                  hover:text-black
                  transition-all duration-300
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11 h-11 rounded-xl
                  border border-cyan-500/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-300
                  hover:bg-cyan-500
                  hover:text-black
                  transition-all duration-300
                "
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/919980785020"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11 h-11 rounded-xl
                  border border-cyan-500/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-300
                  hover:bg-cyan-500
                  hover:text-black
                  transition-all duration-300
                "
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <NavLink
                to="/"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                About
              </NavLink>

              <NavLink
                to="/portfolio"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                Portfolio
              </NavLink>

              <NavLink
                to="/contact"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                Contact
              </NavLink>

              <NavLink
                to="/privacy-policy"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                Privacy Policy
              </NavLink>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <NavLink
                  key={service.name}
                  to={service.path}
                  className="text-gray-400 hover:text-cyan-300 transition"
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-5 text-gray-400">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-cyan-400" />

                <p>
                  Davanagere,
                  Karnataka - 577001
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400" />

                <a
                  href="tel:+919980785020"
                  className="hover:text-cyan-300 transition"
                >
                  +91 9980785020
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400" />

                <a
                  href="mailto:info@chtechgiant.com"
                  className="hover:text-cyan-300 transition"
                >
                  info@chtechgiant.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © 2026 CH TECH GIANT (OPC) PRIVATE LIMITED.
            All Rights Reserved.
          </p>

          <p>
            Designed & Developed by CH TECH GIANT
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;