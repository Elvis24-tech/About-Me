import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-3">Get In Touch With Me</h2>
        <p className="text-gray-600 text-base md:text-lg">
          I'd love to hear from you! Whether it's a project, collaboration, project design or just to say hi, drop me a message.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-blue-100 transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm bg-white text-gray-800 placeholder-gray-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm bg-white text-gray-800 placeholder-gray-400"
          />
        </div>

        <input
          type="tel"
          name="user_phone"
          placeholder="Your Phone Number"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm bg-white text-gray-800 placeholder-gray-400"
        />

        <textarea
          name="user_message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm bg-white text-gray-800 placeholder-gray-400"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-semibold px-5 py-2.5 rounded-lg text-white text-sm md:text-base transition-all duration-300 ${
            loading
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105'
          }`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {success && (
        <p className="mt-6 text-center text-green-600 text-base font-medium animate-fade-in">
           Message sent successfully! I’ll get back to you soon.
        </p>
      )}

      <p className="mt-6 text-center text-blue-800 text-sm md:text-base font-medium">
        I look forward to work with you. Thanks!
      </p>
    </section>
  );
};

export default Contact;
