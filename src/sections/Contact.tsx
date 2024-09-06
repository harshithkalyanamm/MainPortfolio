import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const containerVariants = {
    visible: { opacity: 1, y: -50 },
    hidden: { opacity: 0, y: 0 },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission (e.g., send formData to an API or email service)
    console.log("Form Submitted: ", formData);
  };

  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I&apos;m always looking for new opportunities, and my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button
            text="Send"
            link=""
          />
      </form>
    </motion.div>
  );
};

export default Contact;

