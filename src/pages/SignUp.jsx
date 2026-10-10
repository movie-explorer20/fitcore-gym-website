import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setError("");
    setSuccess("");
  };

  const generateUserId = () => {
    const randomPart = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    return `FC-${randomPart}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    /* ================================
       VALIDATION
    ================================= */

    if (!name) {
      setError("Please enter your full name.");
      return;
    }

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    /* ================================
       CHECK EXISTING ACCOUNT
    ================================= */

    const existingUser =
      localStorage.getItem("fitcoreUser");

    if (existingUser) {
      try {
        const user = JSON.parse(existingUser);

        if (
          user.email &&
          user.email.toLowerCase() === email
        ) {
          setError(
            "An account with this email already exists. Please login."
          );
          return;
        }
      } catch (error) {
        localStorage.removeItem("fitcoreUser");
      }
    }

    /* ================================
       CREATE USER ID
    ================================= */

    const userId = generateUserId();

    /* ================================
       CREATE USER
    ================================= */

    const user = {
      id: userId,
      name: name,
      email: email,
      password: password,
    };

    /* ================================
       SAVE USER
    ================================= */

    localStorage.setItem(
      "fitcoreUser",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "fitcoreLoggedIn",
      "true"
    );

    /* ================================
       SUCCESS MESSAGE
    ================================= */

    setSuccess(
      `Account created successfully! Your User ID is ${userId}`
    );

    /* ================================
       GO TO HOME
    ================================= */

    setTimeout(() => {
      navigate("/", {
        replace: true,
      });
    }, 1000);
  };

  return (
    <div className="signup-page">

      {/* =================================
          LEFT VISUAL
      ================================= */}

      <section className="signup-visual">

        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90"
          alt="FITCORE training"
        />

        <div className="signup-visual-overlay"></div>

        {/* BRAND */}

        <Link
          to="/"
          className="signup-brand"
        >
          <span className="signup-brand-icon">
            F
          </span>

          <span className="signup-brand-text">
            FIT<span>CORE</span>
          </span>
        </Link>

        {/* CONTENT */}

        <div className="signup-visual-content">

          <span>
            START STRONG
          </span>

          <h1>
            BUILD.
            <br />
            <span>YOURSELF.</span>
          </h1>

          <p>
            Create your FITCORE member account
            and start your training journey with
            purpose.
          </p>

        </div>

        {/* FOOTER */}

        <div className="signup-visual-footer">

          <span>
            FITCORE / 2026
          </span>

          <span>
            TRAIN WITH PURPOSE.
          </span>

        </div>

      </section>


      {/* =================================
          RIGHT PANEL
      ================================= */}

      <section className="signup-panel">

        <div className="signup-panel-inner">

          {/* MOBILE BRAND */}

          <div className="signup-mobile-brand">

            <Link
              to="/"
              className="signup-brand"
            >

              <span className="signup-brand-icon">
                F
              </span>

              <span className="signup-brand-text">
                FIT<span>CORE</span>
              </span>

            </Link>

          </div>


          {/* HEADING */}

          <div className="signup-heading">

            <span className="signup-eyebrow">
              MEMBER REGISTRATION
            </span>

            <h2>
              CREATE
              <br />
              <span>ACCOUNT.</span>
            </h2>

            <p>
              Join FITCORE and get your personal
              member ID.
            </p>

          </div>


          {/* FORM */}

          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <label className="signup-field">

              <span>
                Full name
              </span>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

            </label>


            {/* EMAIL */}

            <label className="signup-field">

              <span>
                Email address
              </span>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

            </label>


            {/* PASSWORD */}

            <label className="signup-field">

              <span>
                Password
              </span>

              <div className="signup-password-wrapper">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "HIDE"
                    : "SHOW"}
                </button>

              </div>

            </label>


            {/* CONFIRM PASSWORD */}

            <label className="signup-field">

              <span>
                Confirm password
              </span>

              <div className="signup-password-wrapper">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword
                    ? "HIDE"
                    : "SHOW"}
                </button>

              </div>

            </label>


            {/* ERROR */}

            {error && (
              <div className="signup-error">
                {error}
              </div>
            )}


            {/* SUCCESS */}

            {success && (
              <div className="signup-success">
                {success}
              </div>
            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="signup-submit"
            >

              <span>
                Create Account
              </span>

              <span>
                ↗
              </span>

            </button>

          </form>


          {/* LOGIN */}

          <div className="signup-login">

            <span>
              Already have a FITCORE account?
            </span>

            <Link to="/login">
              Login
              <span>→</span>
            </Link>

          </div>


          {/* BOTTOM */}

          <div className="signup-bottom">

            <Link to="/">
              ← Back to FITCORE
            </Link>

            <span>
              SECURE MEMBER ACCESS
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default SignUp;