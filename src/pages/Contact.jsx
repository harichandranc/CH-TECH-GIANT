import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl"
      >
        <h1 className="text-5xl font-black mb-4 text-center">
          Contact <span className="text-cyan-400">Us</span>
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Let’s build something amazing together.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 resize-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 rounded-xl font-bold text-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <p className="text-green-400 text-center">
              Message sent successfully.
            </p>
          )}

        </form>
      </motion.div>
    </div>
  );
};

export default Contact;