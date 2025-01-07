import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { assets } from "./assets/images/assets";
import ExploreMenu from "./components/ExploreMenu";
import Menu from "./components/Menu";
import FoodList from "./components/FoodList";
import Testimonials from "./components/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flip, ToastContainer, toast } from "react-toastify";
import Reservations from "./components/Reservations";
import AboutUs from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const bgStyle = {
    backgroundImage: `url(${assets.BgImage2})`,
    backroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
  };

  const [backgroundFilter, setBackgroundFilter] = useState("none");

  useEffect(() => {
    const updateBackgroundFilter = () => {
      if (window.innerWidth < 768) {
        setBackgroundFilter("blur(8px)"); // Apply blur on mobile
      } else {
        setBackgroundFilter("none"); // Remove blur on larger screens
      }
    };

    // Set initial background filter based on screen size
    updateBackgroundFilter();

    // Listen for window resize events
    window.addEventListener("resize", updateBackgroundFilter);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBackgroundFilter);
    };
  }, []);

  const MenuStyle = {
    backgroundImage: `url(${assets.SomeFood})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    filter: backgroundFilter,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="container">
        <div style={bgStyle} className="rounded-3xl">
          <Hero />
        </div>

        <div>
          <ExploreMenu />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <FoodList />
        </div>
        {/* menu section */}
        <div className="relative">
          <div style={MenuStyle}></div>
          <div className="relative z-10">
            <Menu />
          </div>
        </div>
        <div>
          <Reservations />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>{" "}
      <footer>
        <Footer />
      </footer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </div>
  );
};

export default App;
