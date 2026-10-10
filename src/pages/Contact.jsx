import { useState } from "react";
import "./Contact.css";

const contactDetails = [
  {
    number: "01",
    label: "Visit",
    title: "FITCORE STUDIO",
    text: "Your premium training environment for focused work, better movement and long-term progress.",
  },
  {
    number: "02",
    label: "Call",
    title: "+92 300 0000000",
    text: "Speak with our team about memberships, programs and personal coaching.",
  },
  {
    number: "03",
    label: "Email",
    title: "hello@fitcore.com",
    text: "Send us your questions and we'll help you find the right starting point.",
  },
];

const hours = [
  { day: "Monday — Friday", time: "05:30 AM — 11:00 PM" },
  { day: "Saturday", time: "07:00 AM — 10:00 PM" },
  { day: "Sunday", time: "08:00 AM — 08:00 PM" },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=2200&q=90"
            alt="Athlete training in a premium fitness studio"
          />
        </div>

        <div className="contact-hero-overlay"></div>

        <div className="contact-container contact-hero-content">
          <div className="contact-eyebrow">
            <span></span>
            Start a conversation
          </div>

          <h1>
            LET'S GET
            <br />
            <span>STARTED.</span>
          </h1>

          <div className="contact-hero-bottom">
            <p>
              Have a question, want to tour the studio or ready to choose
              your membership? Tell us what you need.
            </p>

            <div className="contact-hero-index">
              CONTACT
              <strong>05 / 05</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="contact-intro">
        <div className="contact-container">
          <div className="contact-section-label">
            <span>01</span>
            Talk to FITCORE
          </div>

          <div className="contact-intro-grid">
            <h2>
              HAVE A
              <br />
              <span>QUESTION?</span>
            </h2>

            <div className="contact-intro-copy">
              <p>
                Whether you're completely new to training or already know
                exactly what you're looking for, our team can help you take
                the next step.
              </p>

              <p>
                Fill out the form and tell us a little about your goals.
                We'll use your information to understand what kind of
                training and support makes sense for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-form-layout">
            <div className="contact-form-side">
              <div className="contact-section-label">
                <span>02</span>
                Send an enquiry
              </div>

              <h2>
                TELL US
                <br />
                <span>WHAT YOU NEED.</span>
              </h2>

              <p>
                Looking for a membership, personal coaching or simply want
                to visit the studio? Start here.
              </p>

              <div className="contact-form-note">
                <span>FITCORE / 2026</span>
                <strong>TRAIN WITH PURPOSE.</strong>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitted && (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>

                  <div>
                    <strong>Message received.</strong>
                    <p>
                      Thanks for contacting FITCORE. Our team will get back
                      to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <label>
                    <span>Your name</span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    <span>Email address</span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <div className="contact-form-row">
                  <label>
                    <span>Phone number</span>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                    />
                  </label>

                  <label>
                    <span>I'm interested in</span>

                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="membership">
                        Membership
                      </option>
                      <option value="personal-training">
                        Personal Training
                      </option>
                      <option value="programs">
                        Training Programs
                      </option>
                      <option value="studio-tour">
                        Studio Tour
                      </option>
                      <option value="general">
                        General Question
                      </option>
                    </select>
                  </label>
                </div>

                <label className="contact-form-message">
                  <span>Message</span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what you're looking for..."
                    rows="6"
                    required
                  ></textarea>
                </label>

                <div className="contact-form-bottom">
                  <p>
                    By submitting this form, you agree to be contacted by
                    the FITCORE team regarding your enquiry.
                  </p>

                  <button type="submit" className="contact-submit">
                    Send enquiry
                    <span>↗</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section className="contact-details-section">
        <div className="contact-container">
          <div className="contact-details-heading">
            <div className="contact-section-label">
              <span>03</span>
              Find us
            </div>

            <p>
              Everything you need to know before your first visit.
            </p>
          </div>

          <div className="contact-details-grid">
            {contactDetails.map((item) => (
              <article
                className="contact-detail-card"
                key={item.number}
              >
                <span className="contact-detail-number">
                  {item.number}
                </span>

                <span className="contact-detail-label">
                  {item.label}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="contact-detail-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDIO IMAGE
      ===================================================== */}

      <section className="contact-studio">
        <div className="contact-studio-image">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2200&q=90"
            alt="Modern FITCORE training floor"
          />

          <div className="contact-studio-overlay"></div>

          <div className="contact-container contact-studio-content">
            <div className="contact-section-label">
              <span>04</span>
              The studio
            </div>

            <h2>
              COME SEE
              <br />
              <span>THE SPACE.</span>
            </h2>

            <p>
              A focused training environment built around quality equipment,
              open space and a community that takes training seriously.
            </p>
          </div>

          <div className="contact-studio-location">
            <span>FITCORE STUDIO</span>
            <strong>OPEN DAILY</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOURS
      ===================================================== */}

      <section className="contact-hours">
        <div className="contact-container">
          <div className="contact-hours-layout">
            <div>
              <div className="contact-section-label">
                <span>05</span>
                Opening hours
              </div>

              <h2>
                TRAIN ON
                <br />
                <span>YOUR TIME.</span>
              </h2>
            </div>

            <div className="contact-hours-list">
              {hours.map((item) => (
                <div className="contact-hours-row" key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final">
        <div className="contact-container">
          <div className="contact-final-inner">
            <div>
              <span>YOUR NEXT MOVE</span>

              <h2>
                READY TO
                <br />
                <strong>TRAIN?</strong>
              </h2>
            </div>

            <a
              href="mailto:hello@fitcore.com"
              className="contact-final-button"
            >
              Email FITCORE
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;