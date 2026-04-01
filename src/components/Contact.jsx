import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields ❗");
      return;
    }

    setIsSending(true);
    setStatus("Sending message... ⏳");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("❌ Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-950 text-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto text-center mb-6">
        <p className="text-gray-400">
          Got a project or want to connect? Drop me a message!
        </p>
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
      >
        <label className="sr-only" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 rounded-md bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-400 outline-none"
        />

        <label className="sr-only" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Your Email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 rounded-md bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-400 outline-none"
        />

        <label className="sr-only" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-2 rounded-md bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-400 outline-none resize-none"
        />

        <button
          type="submit"
          disabled={isSending}
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-all duration-300 ${isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-sm text-gray-400 mt-2" role="status" aria-live="polite">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
