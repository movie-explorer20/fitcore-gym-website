import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const savedUser = localStorage.getItem("fitcoreUser");

    if (!savedUser) {
      setError(
        "No FITCORE account found. Please create an account first."
      );
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      formData.email.trim().toLowerCase() !==
      user.email.trim().toLowerCase()
    ) {
      setError("Incorrect email address.");
      return;
    }

    if (formData.password !== user.password) {
      setError("Incorrect password.");
      return;
    }

    localStorage.setItem(
      "fitcoreLoggedIn",
      "true"
    );

    navigate("/", { replace: true });
  };

  return (
    <div className="login-page">

      {/* LEFT VISUAL */}
      <section className="login-visual">

        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90"
          alt="FITCORE training environment"
        />

        <div className="login-visual-overlay"></div>

        <Link to="/" className="login-brand">
          <span className="login-brand-icon">F</span>

          <span className="login-brand-text">
            FIT<span>CORE</span>
          </span>
        </Link>

        <div className="login-visual-content">

          <span className="login-visual-label">
            MEMBER ACCESS
          </span>

          <h1>
            TRAIN.
            <br />
            <span>PROGRESS.</span>
          </h1>

          <p>
            Your training journey starts here.
            Access your FITCORE member experience
            and stay focused on your goals.
          </p>

        </div>

        <div className="login-visual-footer">
          <span>FITCORE / 2026</span>
          <span>TRAIN WITH PURPOSE.</span>
        </div>

      </section>


      {/* RIGHT PANEL */}
      <section className="login-panel">

        <div className="login-panel-inner">

          <div className="login-mobile-brand">

            <Link to="/" className="login-brand">

              <span className="login-brand-icon">
                F
              </span>

              <span className="login-brand-text">
                FIT<span>CORE</span>
              </span>

            </Link>

          </div>


          {/* HEADING */}
          <div className="login-heading">

            <span className="login-eyebrow">
              MEMBER PORTAL
            </span>

            <h2>
              WELCOME
              <br />
              <span>BACK.</span>
            </h2>

            <p>
              Sign in to continue to your FITCORE account.
            </p>

          </div>


          {/* FORM */}
          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}
            <label className="login-field">

              <span>
                Email address
              </span>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </label>


            {/* PASSWORD */}
            <label className="login-field">

              <span>
                Password
              </span>

              <div className="login-password-wrapper">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? "HIDE"
                    : "SHOW"}
                </button>

              </div>

            </label>


            {/* ERROR */}
            {error && (
              <div className="login-error">
                {error}
              </div>
            )}


            {/* OPTIONS */}
            <div className="login-options">

              <label className="login-remember">

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="login-forgot"
                onClick={() =>
                  setError(
                    "Password recovery will be available soon."
                  )
                }
              >
                Forgot password?
              </button>

            </div>


            {/* SIGN IN */}
            <button
              type="submit"
              className="login-submit"
            >
              <span>
                Sign in
              </span>

              <span>
                ↗
              </span>
            </button>

          </form>


          {/* DIVIDER */}
          <div className="login-divider">

            <span></span>

            <small>
              OR
            </small>

            <span></span>

          </div>


          {/* SIGN UP */}
          <div className="login-register">

            <span>
              Don't have a FITCORE account?
            </span>

            <Link to="/signup">
              Create account
              <span>→</span>
            </Link>

          </div>


          {/* BOTTOM */}
          <div className="login-bottom">

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

export default Login;