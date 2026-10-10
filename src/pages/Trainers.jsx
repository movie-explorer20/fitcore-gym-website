import { Link } from "react-router-dom";
import "./Trainers.css";

const trainers = [
  {
    number: "01",
    name: "Alex Morgan",
    role: "Strength Coach",
    experience: "10+ Years",
    specialty: "Strength / Hypertrophy",
    quote:
      "Strong training starts with understanding how you move, not simply how much you can lift.",
    image:
      "https://images.pexels.com/photos/39219660/pexels-photo-39219660.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "02",
    name: "Maya Carter",
    role: "Performance Coach",
    experience: "8+ Years",
    specialty: "Athletic Performance",
    quote:
      "Performance is built through consistency, precision and knowing when to push.",
    image:
      "https://images.pexels.com/photos/30428668/pexels-photo-30428668.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "03",
    name: "Daniel Brooks",
    role: "Conditioning Coach",
    experience: "9+ Years",
    specialty: "Conditioning / Mobility",
    quote:
      "The best program is one that makes you more capable outside the gym too.",
    image:
      "https://images.pexels.com/photos/4853295/pexels-photo-4853295.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

const specialties = [
  "Strength Development",
  "Athletic Performance",
  "Mobility & Movement",
  "Conditioning",
  "Technique Coaching",
  "Training Programming",
];

function Trainers() {
  return (
    <div className="trainers-page">
      <section className="trainers-hero">
        <div className="trainers-hero-image">
          <img
            src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=2200&q=90"
            alt="Professional fitness coaching environment"
          />
        </div>

        <div className="trainers-hero-overlay"></div>

        <div className="trainers-container trainers-hero-content">
          <div className="trainers-eyebrow">
            <span></span>
            The coaching team
          </div>

          <h1>
            MEET THE
            <br />
            <span>COACHES.</span>
          </h1>

          <div className="trainers-hero-bottom">
            <p>
              Experienced coaches. Individual attention. A shared belief
              that better training starts with better coaching.
            </p>

            <div className="trainers-hero-index">
              TRAINERS
              <strong>03 / 05</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="trainers-intro">
        <div className="trainers-container">
          <div className="trainers-section-label">
            <span>01</span>
            Coaching matters
          </div>

          <div className="trainers-intro-grid">
            <h2>
              GOOD TRAINING
              <br />
              <span>NEEDS GOOD COACHING.</span>
            </h2>

            <div className="trainers-intro-copy">
              <p>
                A great coach doesn't simply count your reps. They understand
                your movement, your goals, your limitations and what you need
                to improve next.
              </p>

              <p>
                Our team combines practical experience with structured
                programming to make every session more intentional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trainers-list">
        <div className="trainers-container">
          <div className="trainers-list-heading">
            <div className="trainers-section-label">
              <span>02</span>
              The team
            </div>

            <p>
              Different coaching styles. One standard: quality.
            </p>
          </div>

          <div className="trainers-grid">
            {trainers.map((trainer) => (
              <article className="trainer-card" key={trainer.name}>
                <div className="trainer-card-image">
                  <img
                    src={trainer.image}
                    alt={`${trainer.name}, ${trainer.role}`}
                  />

                  <div className="trainer-card-overlay"></div>

                  <span className="trainer-card-number">
                    {trainer.number}
                  </span>

                  <span className="trainer-card-experience">
                    {trainer.experience}
                  </span>

                  <div className="trainer-card-arrow">
                    ↗
                  </div>
                </div>

                <div className="trainer-card-body">
                  <div className="trainer-card-heading">
                    <div>
                      <h3>{trainer.name}</h3>
                      <span>{trainer.role}</span>
                    </div>

                    <span className="trainer-specialty-label">
                      {trainer.specialty}
                    </span>
                  </div>

                  <p className="trainer-quote">
                    “{trainer.quote}”
                  </p>

                  <div className="trainer-card-line"></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trainers-feature">
        <div className="trainers-feature-image">
          <img
            src="https://images.unsplash.com/photo-1534368786749-b63e05c3a20e?auto=format&fit=crop&w=2200&q=90"
            alt="Coach guiding an athlete through training"
          />

          <div className="trainers-feature-overlay"></div>

          <div className="trainers-container trainers-feature-content">
            <div className="trainers-section-label">
              <span>03</span>
              The coaching standard
            </div>

            <h2>
              DON'T JUST
              <br />
              <span>TRAIN HARD.</span>
            </h2>

            <p>
              Learn how to train better. Better technique. Better movement.
              Better decisions. Better progress.
            </p>
          </div>
        </div>
      </section>

      <section className="trainers-specialties">
        <div className="trainers-container">
          <div className="trainers-specialties-heading">
            <div className="trainers-section-label">
              <span>04</span>
              Areas of expertise
            </div>

            <h2>
              BUILT AROUND
              <br />
              <span>WHAT YOU NEED.</span>
            </h2>
          </div>

          <div className="trainers-specialties-grid">
            {specialties.map((specialty, index) => (
              <div
                className="trainer-specialty"
                key={specialty}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{specialty}</strong>

                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trainers-philosophy">
        <div className="trainers-container">
          <div className="trainers-philosophy-top">
            <div className="trainers-section-label">
              <span>05</span>
              Our belief
            </div>

            <span className="trainers-philosophy-mark">
              FC / COACHING
            </span>
          </div>

          <div className="trainers-philosophy-statement">
            <p>
              YOUR COACH
              <br />
              <span>SHOULDN'T TRAIN YOU.</span>
            </p>

            <p>
              THEY SHOULD
              <br />
              <span>TEACH YOU.</span>
            </p>
          </div>

          <div className="trainers-philosophy-bottom">
            <p>
              The goal isn't to make you dependent on a coach.
              It's to make you more confident in your own training.
            </p>

            <Link
              to="/programs"
              className="trainers-text-link"
            >
              Explore programs
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="trainers-cta">
        <div className="trainers-container">
          <div className="trainers-cta-inner">
            <div>
              <span>Ready to get started?</span>

              <h2>
                TRAIN WITH
                <br />
                <strong>PURPOSE.</strong>
              </h2>
            </div>

            <Link
              to="/contact"
              className="trainers-cta-button"
            >
              Talk to a coach
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainers;