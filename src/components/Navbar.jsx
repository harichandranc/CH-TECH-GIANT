import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  HiMenuAlt3,
  HiX,
  HiChevronDown,
} from "react-icons/hi";

const supportedLanguages = ["zh", "es", "pt", "de", "ko", "ja"];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
  { name: "Services", path: "/services" },
  { name: "Our Apps", path: "/apps" },
];

const serviceLinks = [
  {
    name: "Web Development",
    path: "/web-development",
  },
  {
    name: "App Development",
    path: "/app-development",
  },
  {
    name: "Software Development",
    path: "/software-development",
  },
  {
    name: "Game Development",
    path: "/game-development",
  },
  {
    name: "IT Consulting",
    path: "/it-consulting",
  },
  {
    name: "Pamphlet Design",
    path: "/pamphlet-design",
  },
  {
    name: "Invoice Design",
    path: "/invoice-design",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  /*
   * Detect the current language from the URL.
   *
   * Examples:
   * /services              -> en
   * /zh/services           -> zh
   * /es/services           -> es
   * /pt/services           -> pt
   * /de/services           -> de
   * /ko/services           -> ko
   * /ja/services           -> ja
   */
  const pathParts = location.pathname.split("/").filter(Boolean);

  const currentLang = supportedLanguages.includes(pathParts[0])
    ? pathParts[0]
    : "en";

  /*
   * Add the current language to internal links.
   *
   * English:
   * /app-development
   *
   * Chinese:
   * /zh/app-development
   *
   * Spanish:
   * /es/app-development
   */
  const localizedPath = (path) => {
    if (currentLang === "en") {
      return path;
    }

    return `/${currentLang}${path}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 backdrop-blur-xl bg-black/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to={localizedPath("/")}
            className="flex items-center"
          >
            <span className="text-2xl font-bold tracking-wide text-white">
              CH TECH GIANT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={localizedPath(link.path)}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">

              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-cyan-300 transition-all duration-300">
                Services
                <HiChevronDown className="text-lg" />
              </button>

              <div className="absolute top-12 right-0 w-72 rounded-2xl border border-cyan-500/10 bg-[#0b1120]/95 backdrop-blur-xl shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                <div className="flex flex-col gap-1">

                  {serviceLinks.map((service) => (
                    <NavLink
                      key={service.name}
                      to={localizedPath(service.path)}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "text-gray-300 hover:bg-white/5 hover:text-cyan-300"
                        }`
                      }
                    >
                      {service.name}
                    </NavLink>
                  ))}

                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-cyan-500/10 bg-[#0b1120]/95 backdrop-blur-xl max-h-[calc(100vh-5rem)] overflow-y-auto">

          <div className="flex flex-col px-6 py-6 pb-10 gap-3">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={localizedPath(link.path)}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "text-gray-300 hover:bg-white/5 hover:text-cyan-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Services */}
            <div className="pt-2">

              <p className="text-cyan-400 text-sm font-semibold mb-3 px-2">
                Services
              </p>

              <div className="flex flex-col gap-2">

                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.name}
                    to={localizedPath(service.path)}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "text-gray-300 hover:bg-white/5 hover:text-cyan-300"
                      }`
                    }
                  >
                    {service.name}
                  </NavLink>
                ))}

              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;