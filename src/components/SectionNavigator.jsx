import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SectionNavigator = ({ sections = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        let active = 0;

        sections.forEach((id, index) => {
        const element = document.getElementById(id);

        if (!element) return;

        if (scrollPosition >= element.offsetTop) {
            active = index;
        }
        });

        setCurrentIndex(active);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;

    const element = document.getElementById(sections[index]);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-3">
      <button
        onClick={() => scrollToSection(currentIndex - 1)}
        disabled={currentIndex === 0}
        className={`w-12 h-12 rounded-full flex items-center justify-center
        backdrop-blur-xl border transition-all duration-300
        ${
          currentIndex === 0
            ? "opacity-40 cursor-not-allowed border-white/10 bg-white/5"
            : "bg-cyan-500/15 border-cyan-400/40 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:scale-110 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
        }`}
      >
        <FaChevronUp />
      </button>

      <button
        onClick={() => scrollToSection(currentIndex + 1)}
        disabled={currentIndex === sections.length - 1}
        className={`w-12 h-12 rounded-full flex items-center justify-center
        backdrop-blur-xl border transition-all duration-300
        ${
          currentIndex === sections.length - 1
            ? "opacity-40 cursor-not-allowed border-white/10 bg-white/5"
            : "bg-cyan-500/15 border-cyan-400/40 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:scale-110 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
        }`}
      >
        <FaChevronDown />
      </button>
    </div>
  );
};

export default SectionNavigator;