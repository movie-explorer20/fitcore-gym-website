import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import "./Home.css";


/* =========================================
   TRAINING SYSTEMS
========================================= */

const programs = [
  {
    number: "01",
    title: "Strength",
    text: "Build real strength with focused training designed around progressive performance.",
    image:
      "https://assets.webfervor.com/image/17/e0a7ac2af56adba2fb5d92161c434ade.jpeg",
  },

  {
    number: "02",
    title: "Performance",
    text: "Move faster, jump higher and train with purpose through athletic conditioning.",
    image:
      "https://images.squarespace-cdn.com/content/v1/55b1b323e4b0527caaf0ce5b/84d677c1-e444-4cd4-90a7-15a897e24916/MASH-1673.jpg",
  },

  {
    number: "03",
    title: "Conditioning",
    text: "Improve endurance, energy and work capacity with structured conditioning sessions.",
    image:
      "https://www.mensfitness.com/.image/MTY6MDAwMDAwMDAwMjcxNjYz/gettyimages-1705889202.jpg?io=1&profile=share16-9",
  },
];


/* =========================================
   HOME PAGE
========================================= */

function Home() {
  return (
    <div className="home-page">


      {/* =====================================
          HERO
      ===================================== */}

      <section className="home-hero">

        <div className="home-hero-background">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90"
            alt="FITCORE gym"
          />
        </div>

        <div className="home-hero-overlay"></div>


        <div className="fc-container home-hero-content">

          <ScrollReveal
            direction="left"
            delay={100}
          >
            <span className="home-hero-label">
              PREMIUM TRAINING / 01
            </span>
          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={180}
          >
            <h1 className="home-hero-title">
              TRAIN
              <br />
              <span>WITH PURPOSE.</span>
            </h1>
          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={280}
          >
            <p className="home-hero-description">
              A premium training environment built
              for people who refuse to settle.
              Strength, performance and discipline —
              all under one roof.
            </p>
          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={380}
          >
            <div className="home-hero-actions">

              <Link
                to="/membership"
                className="fc-button"
              >
                <span>Start Training</span>
                <span>↗</span>
              </Link>

              <Link
                to="/programs"
                className="home-hero-secondary"
              >
                Explore Programs
                <span>→</span>
              </Link>

            </div>
          </ScrollReveal>

        </div>


        <div className="home-hero-bottom">

          <span>
            SCROLL TO EXPLORE
          </span>

          <span className="home-scroll-line"></span>

          <span>
            EST. 2026
          </span>

        </div>

      </section>



      {/* =====================================
          INTRO
      ===================================== */}

      <section className="home-intro">

        <div className="fc-container">

          <div className="home-intro-grid">


            <ScrollReveal
              direction="left"
            >
              <div className="home-section-number">
                01
              </div>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={120}
            >
              <div className="home-intro-content">

                <span className="home-eyebrow">
                  MORE THAN A GYM
                </span>

                <h2>
                  BUILT FOR
                  <br />
                  <span>PROGRESS.</span>
                </h2>

                <p>
                  FITCORE is designed around one simple
                  idea: training should have purpose.
                  Every session, every movement and
                  every challenge should move you
                  forward.
                </p>

                <Link
                  to="/programs"
                  className="home-text-link"
                >
                  Discover our training
                  <span>↗</span>
                </Link>

              </div>
            </ScrollReveal>


            <ScrollReveal
              direction="right"
              delay={200}
            >
              <div className="home-intro-stat">

                <strong>
                  01
                </strong>

                <span>
                  MINDSET
                  <br />
                  FIRST
                </span>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </section>



      {/* =====================================
          STATS
      ===================================== */}

      <section className="home-stats">

        <div className="fc-container">

          <div className="home-stats-grid">

            <ScrollReveal
              direction="up"
              delay={0}
            >
              <div className="home-stat">
                <strong>
                  50+
                </strong>

                <span>
                  TRAINING
                  <br />
                  SESSIONS
                </span>
              </div>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={120}
            >
              <div className="home-stat">
                <strong>
                  12
                </strong>

                <span>
                  TRAINING
                  <br />
                  SYSTEMS
                </span>
              </div>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={240}
            >
              <div className="home-stat">
                <strong>
                  06
                </strong>

                <span>
                  DAYS
                  <br />
                  A WEEK
                </span>
              </div>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={360}
            >
              <div className="home-stat">
                <strong>
                  100%
                </strong>

                <span>
                  FOCUS ON
                  <br />
                  PROGRESS
                </span>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </section>



      {/* =====================================
          TRAINING SYSTEMS
      ===================================== */}

      <section className="home-programs">

        <div className="fc-container">


          <ScrollReveal
            direction="up"
          >
            <div className="home-section-heading">

              <div>

                <span className="home-eyebrow">
                  TRAINING SYSTEMS
                </span>

                <h2>
                  FIND YOUR
                  <br />
                  <span>EDGE.</span>
                </h2>

              </div>

              <span className="home-heading-number">
                02 / 05
              </span>

            </div>
          </ScrollReveal>



          <div className="home-program-list">

            {programs.map(
              (program, index) => (

                <ScrollReveal
                  key={program.number}
                  direction={
                    index % 2 === 0
                      ? "left"
                      : "right"
                  }
                  delay={
                    index * 140
                  }
                >

                  <article className="home-program-card">

                    <div className="home-program-image scroll-image-reveal">

                      <img
                        src={program.image}
                        alt={program.title}
                        loading="lazy"
                      />

                      <div className="home-program-image-overlay"></div>

                      <span className="home-program-number">
                        {program.number}
                      </span>

                    </div>


                    <div className="home-program-info">

                      <h3>
                        {program.title}
                      </h3>

                      <p>
                        {program.text}
                      </p>

                      <Link
                        to="/programs"
                        className="home-program-link"
                      >
                        Explore
                        <span>↗</span>
                      </Link>

                    </div>

                  </article>

                </ScrollReveal>

              )
            )}

          </div>

        </div>

      </section>



      {/* =====================================
          FEATURE
      ===================================== */}

      <section className="home-feature">

        <div className="fc-container">

          <div className="home-feature-grid">


            <ScrollReveal
              direction="left"
            >
              <div className="home-feature-image scroll-image-reveal">

                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90"
                  alt="FITCORE strength training"
                  loading="lazy"
                />

                <div className="home-feature-image-overlay"></div>

                <span className="home-feature-tag">
                  TRAIN HARD / TRAIN SMART
                </span>

              </div>
            </ScrollReveal>



            <ScrollReveal
              direction="right"
              delay={160}
            >
              <div className="home-feature-content">

                <span className="home-eyebrow">
                  THE FITCORE METHOD
                </span>

                <h2>
                  DISCIPLINE
                  <br />
                  <span>CREATES RESULTS.</span>
                </h2>

                <p>
                  Motivation comes and goes.
                  Discipline stays. Our training
                  approach is built to create
                  consistency, measurable progress
                  and confidence that carries beyond
                  the gym.
                </p>


                <div className="home-feature-points">

                  <div>
                    <span>01</span>
                    <strong>
                      Structured Training
                    </strong>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>
                      Progressive Overload
                    </strong>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>
                      Performance Focus
                    </strong>
                  </div>

                </div>


                <Link
                  to="/trainers"
                  className="fc-button"
                >
                  <span>
                    Meet Our Trainers
                  </span>

                  <span>
                    ↗
                  </span>
                </Link>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </section>



      {/* =====================================
          PHILOSOPHY
      ===================================== */}

      <section className="home-philosophy">

        <div className="fc-container">

          <ScrollReveal
            direction="scale"
          >
            <div className="home-philosophy-inner">

              <span className="home-eyebrow">
                OUR PHILOSOPHY
              </span>

              <h2>
                DON'T CHASE
                <br />
                <span>PERFECTION.</span>
                <br />
                BUILD
                <br />
                <span>PROGRESS.</span>
              </h2>

              <p>
                Small improvements repeated
                consistently create extraordinary
                results.
              </p>

            </div>
          </ScrollReveal>

        </div>

      </section>



      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="home-final-cta">

        <div className="home-final-background">

          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=2200&q=90"
            alt="FITCORE training floor"
            loading="lazy"
          />

        </div>

        <div className="home-final-overlay"></div>


        <div className="fc-container home-final-content">

          <ScrollReveal
            direction="up"
          >

            <span className="home-eyebrow">
              YOUR NEXT LEVEL
            </span>

            <h2>
              READY TO
              <br />
              <span>START?</span>
            </h2>

            <p>
              Your strongest version doesn't happen
              by accident. Start building it today.
            </p>

            <Link
              to="/membership"
              className="fc-button"
            >
              <span>
                Join FITCORE
              </span>

              <span>
                ↗
              </span>
            </Link>

          </ScrollReveal>

        </div>

      </section>


    </div>
  );
}

export default Home;