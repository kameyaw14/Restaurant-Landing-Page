import React from "react";
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

const App = () => {
  const bgStyle = {
    backgroundImage: `url(${assets.BgImage2})`,
    backroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
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
          <FoodList />
        </div>
        <div>
          <Menu />
        </div>
        <div>
          <Reservations />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
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
