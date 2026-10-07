"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-stone rounded-lg focus:outline-none focus:border-clay bg-white text-ink"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-stone rounded-lg focus:outline-none focus:border-clay bg-white text-ink"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
          Subject
        </label>
        <select
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 border border-stone rounded-lg focus:outline-none focus:border-clay bg-white text-ink"
        >
          <option value="">Select a topic</option>
          <option value="general">General inquiry</option>
          <option value="research">Research collaboration</option>
          <option value="products">Product inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="careers">Careers</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-stone rounded-lg focus:outline-none focus:border-clay bg-white text-ink resize-none"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 text-base font-medium text-white bg-clay rounded-lg hover:bg-clay-deep transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
