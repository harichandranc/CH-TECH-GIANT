import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          CH Tech Giant
        </h1>

        <div className="flex gap-8 text-white font-medium">

          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link to="/" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link to="/" className="hover:text-blue-400 transition">
            Services
          </Link>

          <Link to="/" className="hover:text-blue-400 transition">
            Portfolio
          </Link>

          <Link to="/" className="hover:text-blue-400 transition">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;