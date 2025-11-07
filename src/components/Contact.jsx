import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

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

    setStatus("✅ Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
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
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 rounded-md bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-400 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 rounded-md bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-400 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-2 rounded-md bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-400 outline-none resize-none"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-all duration-300"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-sm text-gray-400 mt-2">{status}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
