import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function isUserLoggedIn() {
  return Boolean(
    localStorage.getItem("fitcoreUser")
  );
}


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

const pageBackgrounds = {
  "/":
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90",

  "/programs":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2200&q=90",

  "/trainers":
    "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=2200&q=90",

  "/membership":
    "https://images.unsplash.com/photo-1526401485004-2fda9f6f8c36?auto=format&fit=crop&w=2200&q=90",

  "/contact":
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2200&q=90",
};



function ProtectedWebsite() {
  const location = useLocation();

  const loggedIn = isUserLoggedIn();

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  const footerBackground =
    pageBackgrounds[location.pathname] ||
    pageBackgrounds["/"];


  return (
    <>
      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/programs"
            element={<Programs />}
          />

          <Route
            path="/trainers"
            element={<Trainers />}
          />

          <Route
            path="/membership"
            element={<Membership />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />

        </Routes>
      </main>

      <Footer
        backgroundImage={footerBackground}
      />
    </>
  );
}



function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className="fitcore-app">

        <Routes>

          {/* LOGIN */}

          <Route
            path="/login"
            element={
              isUserLoggedIn() ? (
                <Navigate
                  to="/"
                  replace
                />
              ) : (
                <Login />
              )
            }
          />


          {/* SIGN UP */}

          <Route
            path="/signup"
            element={
              isUserLoggedIn() ? (
                <Navigate
                  to="/"
                  replace
                />
              ) : (
                <SignUp />
              )
            }
          />


          {/* PROTECTED WEBSITE */}

          <Route
            path="/*"
            element={
              <ProtectedWebsite />
            }
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;