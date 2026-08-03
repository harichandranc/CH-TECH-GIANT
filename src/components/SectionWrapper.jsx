const SectionWrapper = ({ children, className = "", id }) => {
  return (
    <section
      id={id}
      className={`py-20 px-6 lg:px-10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;