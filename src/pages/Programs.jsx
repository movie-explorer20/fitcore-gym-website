import { Link } from "react-router-dom";
import "./Programs.css";

const programs = [
  {
    number: "01",
    category: "Build",
    title: "Strength",
    description:
      "Build a stronger foundation with structured resistance training, progressive overload and intelligent recovery.",
    duration: "8–12 weeks",
    level: "All levels",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "02",
    category: "Perform",
    title: "Athletic",
    description:
      "Develop speed, power, coordination and movement quality through athletic-focused training.",
    duration: "6–10 weeks",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "03",
    category: "Condition",
    title: "Engine",
    description:
      "Improve your cardiovascular capacity and work output without sacrificing strength.",
    duration: "6–8 weeks",
    level: "All levels",
    image:
      "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "04",
    category: "Recover",
    title: "Reset",
    description:
      "Restore movement, mobility and recovery with a deliberate approach to training beyond intensity.",
    duration: "4–6 weeks",
    level: "All levels",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=90",
  },
];

const principles = [
  {
    number: "01",
    title: "Assess",
    text: "Understand where you are before deciding where you're going.",
  },
  {
    number: "02",
    title: "Build",
    text: "Create a training foundation that gets stronger over time.",
  },
  {
    number: "03",
    title: "Progress",
    text: "Increase the challenge intelligently instead of simply doing more.",
  },
  {
    number: "04",
    title: "Adapt",
    text: "Adjust the plan as your body, schedule and goals evolve.",
  },
];

function Programs() {
  return (
    <div className="programs-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="programs-hero">

        <div className="programs-hero-image">
          <img
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=2200&q=90"
            alt="Modern gym training environment"
          />
        </div>

        <div className="programs-hero-overlay"></div>

        <div className="programs-container programs-hero-content">

          <div className="programs-eyebrow">
            <span></span>
            Training systems
          </div>

          <h1>
            FIND YOUR
            <br />
            <span>PROGRAM.</span>
          </h1>

          <div className="programs-hero-bottom">
            <p>
              Training should have direction. Choose the system that matches
              your goal, your experience and the way you want to move.
            </p>

            <div className="programs-hero-index">
              PROGRAMS
              <strong>02 / 05</strong>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="programs-intro">

        <div className="programs-container">

          <div className="programs-section-label">
            <span>01</span>
            More than a workout
          </div>

          <div className="programs-intro-grid">

            <h2>
              TRAINING
              <br />
              <span>WITH A PLAN.</span>
            </h2>

            <div className="programs-intro-copy">

              <p>
                Random workouts create random results. At FITCORE, every
                program follows a clear progression designed to make your
                training more productive.
              </p>

              <p>
                You don't need to train harder every day. You need to know
                when to push, when to adapt and when to recover.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          PROGRAM GRID
      ========================================= */}

      <section className="programs-list">

        <div className="programs-container">

          <div className="programs-list-heading">

            <div className="programs-section-label">
              <span>02</span>
              Choose your direction
            </div>

            <p>
              Four focused systems. One goal: helping you become more capable.
            </p>

          </div>

          <div className="programs-grid">

            {programs.map((program) => (
              <article className="program-card" key={program.title}>

                <div className="program-card-image">

                  <img
                    src={program.image}
                    alt={`${program.title} training program`}
                  />

                  <div className="program-card-overlay"></div>

                  <span className="program-card-number">
                    {program.number}
                  </span>

                  <span className="program-card-category">
                    {program.category}
                  </span>

                  <div className="program-card-icon">
                    ↗
                  </div>

                </div>

                <div className="program-card-body">

                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <div className="program-card-meta">

                    <div>
                      <span>Duration</span>
                      <strong>{program.duration}</strong>
                    </div>

                    <div>
                      <span>Level</span>
                      <strong>{program.level}</strong>
                    </div>

                  </div>

                  <Link to="/contact" className="program-card-link">
                    Start this program
                    <span>→</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          FEATURE
      ========================================= */}

      <section className="programs-feature">

        <div className="programs-feature-image">

          <img
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=2200&q=90"
            alt="Focused strength training session"
          />

          <div className="programs-feature-overlay"></div>

          <div className="programs-container programs-feature-content">

            <div className="programs-section-label">
              <span>03</span>
              The FITCORE method
            </div>

            <h2>
              PROGRESS
              <br />
              <span>ON PURPOSE.</span>
            </h2>

            <p>
              Your training isn't a collection of exercises. It's a system
              that evolves with you.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================
          PRINCIPLES
      ========================================= */}

      <section className="programs-principles">

        <div className="programs-container">

          <div className="programs-principles-heading">

            <div className="programs-section-label">
              <span>04</span>
              How we train
            </div>

            <h2>
              FOUR STEPS.
              <br />
              <span>ONE DIRECTION.</span>
            </h2>

          </div>

          <div className="programs-principles-grid">

            {principles.map((item) => (
              <div className="principle-item" key={item.number}>

                <span className="principle-number">
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="programs-cta">

        <div className="programs-container">

          <div className="programs-cta-inner">

            <div>
              <span>Not sure where to start?</span>

              <h2>
                LET'S BUILD
                <br />
                <strong>YOUR PLAN.</strong>
              </h2>
            </div>

            <Link to="/contact" className="programs-cta-button">
              Talk to FITCORE
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Programs;