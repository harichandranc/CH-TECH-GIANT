import { motion } from "framer-motion";

const PageBanner = ({ title, subtitle }) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-16 md:py-20
        px-6 lg:px-10
        border-b border-cyan-500/10
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-gray-400
              text-base md:text-lg
              leading-relaxed
            "
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;