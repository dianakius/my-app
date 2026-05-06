import { useState } from "react";

const inputClass = "w-full box-border px-4 py-3 rounded-xl border border-brown-border bg-cream text-sm font-sans text-brown outline-none";
const labelClass = "block text-[0.7rem] font-medium tracking-[0.12em] uppercase text-brown-mid mb-1.5";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center font-sans p-8 bg-cream">
        <div className="text-5xl mb-4">🐾</div>
        <h1 className="font-serif text-4xl font-bold text-brown mb-2">Thank you!</h1>
        <p className="text-brown-mid text-base mb-8">
          We'll get back to you at <strong>{form.email}</strong>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="px-8 py-3 rounded-full bg-brown text-cream font-sans text-sm font-medium cursor-pointer border-none transition-colors duration-200"
          onMouseEnter={function(e) { e.currentTarget.style.background = "#c97d4e"; }}
          onMouseLeave={function(e) { e.currentTarget.style.background = "#3d2b1f"; }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-full py-20 px-6 font-sans">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-terracotta mb-3 font-medium">
          We'd love to hear from you
        </p>
        <h1 className="font-serif font-bold text-brown leading-tight m-0" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
          Get in <em className="italic text-terracotta">Touch</em>
        </h1>
      </div>

      {/* Form card */}
      <form
        onSubmit={handleSubmit}
        className="max-w-[580px] mx-auto bg-white rounded-3xl border border-brown-border p-10"
        style={{ boxShadow: "0 8px 40px rgba(61,43,31,0.08)" }}
      >
        {/* Name + Email */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div>
            <label className={labelClass}>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
          </div>
        </div>

        <div className="mb-5">
          <label className={labelClass}>Subject</label>
          <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" className={inputClass} />
        </div>

        <div className="mb-8">
          <label className={labelClass}>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Write your message here..." rows={6} className={`${inputClass} resize-none`} />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-brown-border" />
          <span className="text-terracotta">✦</span>
          <div className="flex-1 h-px bg-brown-border" />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-brown text-cream border-none text-base font-medium cursor-pointer font-sans tracking-wide transition-colors duration-200"
          onMouseEnter={function(e) { e.currentTarget.style.background = "#c97d4e"; }}
          onMouseLeave={function(e) { e.currentTarget.style.background = "#3d2b1f"; }}
        >
          Send Message →
        </button>
      </form>
    </div>
  );
}