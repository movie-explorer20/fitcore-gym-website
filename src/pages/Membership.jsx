import { Link } from "react-router-dom";
import "./Membership.css";

const plans = [
  {
    name: "CORE",
    label: "ESSENTIAL",
    price: "PKR 4,999",
    period: "/ month",
    description:
      "Perfect for members who want premium gym access and the freedom to train independently.",
    featured: false,
    features: [
      "Full gym access",
      "Locker access",
      "Training floor access",
      "Basic movement assessment",
      "Member community",
    ],
  },
  {
    name: "PRO",
    label: "MOST POPULAR",
    price: "PKR 7,999",
    period: "/ month",
    description:
      "A structured membership with personalized programming, progress tracking and coach support.",
    featured: true,
    features: [
      "Everything in Core",
      "Personalized training program",
      "Monthly progress review",
      "Coach consultation",
      "Priority booking",
      "Performance tracking",
    ],
  },
  {
    name: "ELITE",
    label: "FULL SUPPORT",
    price: "PKR 12,999",
    period: "/ month",
    description:
      "The complete FITCORE experience for members who want maximum coaching and accountability.",
    featured: false,
    features: [
      "Everything in Pro",
      "1-on-1 coaching sessions",
      "Advanced assessment",
      "Weekly progress review",
      "Nutrition guidance",
      "Priority coach access",
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Premium Access",
    text: "Train in a focused environment with quality equipment and enough space to work properly.",
  },
  {
    number: "02",
    title: "Progress Tracking",
    text: "Keep your training measurable so you know exactly where you are improving.",
  },
  {
    number: "03",
    title: "Expert Support",
    text: "Get guidance from experienced coaches whenever you need more direction.",
  },
  {
    number: "04",
    title: "Flexible Training",
    text: "Choose the membership level that fits your schedule, goals and training style.",
  },
];

const comparison = [
  {
    feature: "Full gym access",
    core: true,
    pro: true,
    elite: true,
  },
  {
    feature: "Locker access",
    core: true,
    pro: true,
    elite: true,
  },
  {
    feature: "Personalized program",
    core: false,
    pro: true,
    elite: true,
  },
  {
    feature: "Progress tracking",
    core: false,
    pro: true,
    elite: true,
  },
  {
    feature: "Coach consultation",
    core: false,
    pro: true,
    elite: true,
  },
  {
    feature: "1-on-1 coaching",
    core: false,
    pro: false,
    elite: true,
  },
  {
    feature: "Nutrition guidance",
    core: false,
    pro: false,
    elite: true,
  },
];

function Membership() {
  return (
    <div className="membership-page">

      {/* HERO */}
      <section className="membership-hero">
        <div className="membership-hero-image">
          <img
            src="https://images.unsplash.com/photo-1526401485004-2fda9f6f8c36?auto=format&fit=crop&w=2200&q=90"
            alt="FITCORE training environment"
          />
        </div>

        <div className="membership-hero-overlay"></div>

        <div className="membership-container membership-hero-content">
          <div className="membership-eyebrow">
            <span></span>
            Membership
          </div>

          <h1>
            TRAIN YOUR
            <br />
            <span>WAY.</span>
          </h1>

          <div className="membership-hero-bottom">
            <p>
              Choose the membership level that matches your goals,
              training style and the amount of support you want.
            </p>

            <div className="membership-hero-index">
              MEMBERSHIP
              <strong>04 / 05</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="membership-intro">
        <div className="membership-container">

          <div className="membership-section-label">
            <span>01</span>
            Choose your level
          </div>

          <div className="membership-intro-grid">
            <h2>
              SIMPLE
              <br />
              <span>MEMBERSHIP.</span>
            </h2>

            <div className="membership-intro-copy">
              <p>
                No complicated packages. No unnecessary extras.
                Choose the level of access and support that works
                for your current goals.
              </p>

              <p>
                You can upgrade whenever your training needs change.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PLANS */}
      <section className="membership-plans">
        <div className="membership-container">

          <div className="membership-plans-heading">
            <div className="membership-section-label">
              <span>02</span>
              Membership plans
            </div>

            <p>
              Three levels. Clear benefits. One place to train better.
            </p>
          </div>

          <div className="membership-plans-grid">

            {plans.map((plan) => (
              <article
                className={`membership-plan ${
                  plan.featured ? "featured" : ""
                }`}
                key={plan.name}
              >

                <div className="membership-plan-top">
                  <div>
                    <span className="membership-plan-label">
                      {plan.label}
                    </span>

                    <h3>{plan.name}</h3>
                  </div>

                  {plan.featured && (
                    <span className="membership-plan-badge">
                      Popular
                    </span>
                  )}
                </div>

                <div className="membership-plan-price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>

                <p className="membership-plan-description">
                  {plan.description}
                </p>

                <div className="membership-plan-divider"></div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={
                    plan.featured
                      ? "membership-plan-button primary"
                      : "membership-plan-button"
                  }
                >
                  Choose {plan.name}
                  <span>↗</span>
                </Link>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="membership-benefits">
        <div className="membership-container">

          <div className="membership-benefits-heading">
            <div className="membership-section-label">
              <span>03</span>
              Membership benefits
            </div>

            <h2>
              BUILT FOR
              <br />
              <span>CONSISTENCY.</span>
            </h2>
          </div>

          <div className="membership-benefits-grid">

            {benefits.map((benefit) => (
              <article
                className="membership-benefit"
                key={benefit.number}
              >
                <span className="membership-benefit-number">
                  {benefit.number}
                </span>

                <div>
                  <h3>{benefit.title}</h3>

                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="membership-feature">
        <div className="membership-feature-image">

          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=2200&q=90"
            alt="Athlete training at FITCORE"
          />

          <div className="membership-feature-overlay"></div>

          <div className="membership-container membership-feature-content">

            <div className="membership-section-label">
              <span>04</span>
              The FITCORE environment
            </div>

            <h2>
              SHOW UP.
              <br />
              <span>LEVEL UP.</span>
            </h2>

            <p>
              The right environment makes consistency easier.
              Build the habit, follow the plan and keep progressing.
            </p>

          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="membership-comparison">
        <div className="membership-container">

          <div className="membership-comparison-heading">

            <div className="membership-section-label">
              <span>05</span>
              Compare plans
            </div>

            <h2>
              FIND YOUR
              <br />
              <span>FIT.</span>
            </h2>

          </div>

          <div className="membership-table">

            <div className="membership-table-head">
              <div>Feature</div>
              <div>Core</div>
              <div>Pro</div>
              <div>Elite</div>
            </div>

            {comparison.map((item) => (
              <div
                className="membership-table-row"
                key={item.feature}
              >
                <div>{item.feature}</div>

                <div>
                  {item.core ? (
                    <span className="membership-check">
                      ✓
                    </span>
                  ) : (
                    <span className="membership-dash">
                      —
                    </span>
                  )}
                </div>

                <div>
                  {item.pro ? (
                    <span className="membership-check">
                      ✓
                    </span>
                  ) : (
                    <span className="membership-dash">
                      —
                    </span>
                  )}
                </div>

                <div>
                  {item.elite ? (
                    <span className="membership-check">
                      ✓
                    </span>
                  ) : (
                    <span className="membership-dash">
                      —
                    </span>
                  )}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="membership-cta">
        <div className="membership-container">

          <div className="membership-cta-inner">

            <div>
              <span>Ready when you are</span>

              <h2>
                START YOUR
                <br />
                <strong>JOURNEY.</strong>
              </h2>
            </div>

            <Link
              to="/contact"
              className="membership-cta-button"
            >
              Get started
              <span>↗</span>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Membership;