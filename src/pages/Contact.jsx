import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif",
          padding: "2rem",
          background: "#fdf8f2",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🐾</div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
            color: "#3d2b1f",
            marginBottom: "0.5rem",
            fontWeight: 700,
          }}
        >
          Thank you!
        </h1>
        <p style={{ color: "#7a5c4a", fontSize: "1rem", marginBottom: "2rem" }}>
          We'll get back to you at <strong>{form.email}</strong>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          style={{
            padding: "0.75rem 2rem",
            borderRadius: "999px",
            background: "#3d2b1f",
            color: "#fdf8f2",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 500,
          }}
          onMouseEnter={function(e) { e.currentTarget.style.background = "#c97d4e"; }}
          onMouseLeave={function(e) { e.currentTarget.style.background = "#3d2b1f"; }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "0.8rem 1.1rem",
    borderRadius: "12px",
    border: "1px solid #e8d8cc",
    background: "#fdf8f2",
    fontSize: "0.9rem",
    fontFamily: "'DM Sans', sans-serif",
    color: "#3d2b1f",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.7rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#7a5c4a",
    marginBottom: "0.4rem",
  };

  return (
    <div
      style={{
        background: "#fdf8f2",
        minHeight: "100%",
        padding: "5rem 1.5rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c97d4e",
            marginBottom: "0.75rem",
            fontWeight: 500,
          }}
        >
          We'd love to hear from you
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#3d2b1f",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Get in{" "}
          <em style={{ fontStyle: "italic", color: "#c97d4e" }}>Touch</em>
        </h1>
      </div>

      {/* Form card */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "580px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "24px",
          border: "1px solid #e8d8cc",
          padding: "2.5rem",
          boxShadow: "0 8px 40px rgba(61,43,31,0.08)",
        }}
      >
        {/* Name + Email side by side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.25rem",
            marginBottom: "1.25rem",
          }}
        >
          <div>
            <label style={labelStyle}>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              style={inputStyle}
            />
          </div>
        </div>

        <div style={{ marginBottom: "1.25rem" }}>
          <label style={labelStyle}>Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            rows={6}
            style={{ ...inputStyle, resize: "none" }}
          />
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#e8d8cc" }} />
          <span style={{ color: "#c97d4e", fontSize: "1rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "#e8d8cc" }} />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.9rem",
            borderRadius: "999px",
            background: "#3d2b1f",
            color: "#fdf8f2",
            border: "none",
            fontSize: "0.95rem",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.03em",
          }}
          onMouseEnter={function(e) { e.currentTarget.style.background = "#c97d4e"; }}
          onMouseLeave={function(e) { e.currentTarget.style.background = "#3d2b1f"; }}
        >
          Send Message →
        </button>
      </form>
    </div>
  );
}