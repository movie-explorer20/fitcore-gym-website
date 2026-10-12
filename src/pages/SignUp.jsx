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

    const userId = generateUserId();

    const user = {
      id: userId,
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem(
      "fitcoreUser",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "fitcoreLoggedIn",
      "true"
    );

    setSuccess(
      `Account created successfully! Your User ID is ${userId}`
    );

    setTimeout(() => {
      navigate("/", {
        replace: true,
      });
    }, 1000);
  };

  return (
    <div className="signup-page">

      <section className="signup-visual">

        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90"
          alt="FITCORE training"
        />

        <div className="signup-visual-overlay"></div>

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

        <div className="signup-visual-footer">

          <span>
            FITCORE / 2026
          </span>

          <span>
            TRAIN WITH PURPOSE.
          </span>

        </div>

      </section>

      <section className="signup-panel">

        <div className="signup-panel-inner">

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

          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >

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

            {error && (
              <div className="signup-error">
                {error}
              </div>
            )}

            {success && (
              <div className="signup-success">
                {success}
              </div>
            )}

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

          <div className="signup-login">

            <span>
              Already have a FITCORE account?
            </span>

            <Link to="/login">
              Login
              <span>→</span>
            </Link>

          </div>

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