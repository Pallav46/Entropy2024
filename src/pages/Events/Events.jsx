import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "./Events.css";
import Template from "../../components/Events/Template";
import Navbar from "../Navbar/Navbar";
import day1img1 from '/assets/Events/day1/e-sports.jpg';
import day1img2 from '/assets/Events/day1/day1img2.jpg';
import day1img3 from '/assets/Events/day1/day1img3.jpg';

import day2img1 from '/assets/Events/day2/e-sports.jpg';
import day2img2 from '/assets/Events/day2/day2img2.png';
import day2img3 from '/assets/Events/day2/day2img3.jpg';
import debuggers1 from '/assets/Events/day1/debuggers.png';




const Events = () => {
  const postActionsControllersRef = useRef([]);
  const likeBtnsRef = useRef([]);
  // make two array 1 with day1 images and 1 with day2 images
  const day1Images = [day1img1, day1img2, day1img3, debuggers1, day1img3];
  const day2Images = [day2img1, day2img2, day2img3, debuggers1, day2img3];

  const day1Name = ["E-Sports", "Cyber Hunt", "Tech Quiz R-1", "Debuggers R-1", "Tech Quiz R-2"];
  const day2Name = ["E-Sports", "Codethrill", "FastTrack R-1", "Debuggers R-2", "FasTrack R-2"];

  useEffect(() => {
    // Initialize Swiper
    new Swiper(".swiper", {
      grabCursor: true,
      speed: 400,
      mousewheel: { invert: false },
      scrollbar: { el: ".swiper-scrollbar", draggable: true },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        900: { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 20 },
      },
    });

    // Event Listener for Post Actions
    const handlePostActionsClick = (btn) => {
      const targetId = btn.getAttribute("data-target");
      const postActionsContent = document.getElementById(targetId);

      if (postActionsContent) {
        const isVisible = postActionsContent.getAttribute("data-visible");
        if (isVisible === "false") {
          postActionsContent.setAttribute("data-visible", "true");
          postActionsContent.setAttribute("aria-hidden", "false");
          btn.setAttribute("aria-expanded", "true");
        } else {
          postActionsContent.setAttribute("data-visible", "false");
          postActionsContent.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    };

    postActionsControllersRef.current.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        handlePostActionsClick(btn);
      });
    });

    // Event Listener for Click Outside
    const handleClickOutside = (event) => {
      postActionsControllersRef.current.forEach((btn) => {
        const targetId = btn.getAttribute("data-target");
        const postActionsContent = document.getElementById(targetId);

        if (
          postActionsContent &&
          postActionsContent.getAttribute("data-visible") === "true"
        ) {
          if (
            !postActionsContent.contains(event.target) &&
            event.target !== btn
          ) {
            postActionsContent.setAttribute("data-visible", "false");
            postActionsContent.setAttribute("aria-hidden", "true");
            btn.setAttribute("aria-expanded", "false");
          }
        }
      });
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean-Up
      document.removeEventListener("click", handleClickOutside);
      postActionsControllersRef.current.forEach((btn) => {
        btn.removeEventListener("click", (event) => {
          event.stopPropagation();
          handlePostActionsClick(btn);
        });
      });
    };
  }, []);

  useEffect(() => {
    // Event Listener for Like Buttons
    likeBtnsRef.current.forEach((likeBtn) => {
      likeBtn.addEventListener("click", () => {
        likeBtn.classNameList.toggle("active");
      });
    });

    return () => {
      likeBtnsRef.current.forEach((likeBtn) => {
        likeBtn.removeEventListener("click", () => {
          likeBtn.classNameList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="stars">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <section className="timeline-section">
        <h1 className="text-white"></h1>
        {/* <Template name="Pre Events"/> */}
        <Template name="Day 1 Events"  url="/events/day1" images={day1Images} eventName={day1Name}/>
        <Template name="Day 2 Events"  url="/events/day2" images={day2Images} eventName={day2Name}/>
      </section>
    </div>
  );
};

export default Events;