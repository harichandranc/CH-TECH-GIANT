import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SectionNavigator = ({ sections = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id);
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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