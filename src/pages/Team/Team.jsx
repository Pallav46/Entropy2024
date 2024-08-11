import { useEffect } from 'react';
import img1 from "./img1.gif";
import img2 from "./img2.gif";
import img3 from "./img3.gif";
import bg from "./bg7.webm";
import './Team.css'

const Team = () => {
  useEffect(() => {
    // Initialize Swiper
    var swiper = new window.Swiper(".blog-slider", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: ".blog-slider__pagination",
          clickable: true,
        },
      });
      
    // Cleanup Swiper instance on component unmount
    return () => {
      if (swiper && swiper.destroy) {
        swiper.destroy(true, true);
      }
    }
  }, []);

  return (
    <div className="blog-body">
      <video autoPlay muted loop id="background-video">
        <source src={bg} type="video/webm"/>
        Your browser does not support the video tag.
    </video>
    <div className="blog-slider">
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
      <div className="swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={img1}
              alt="Blog Image 1"
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
            <a href="#">
            <button className="glow-on-hover">READ MORE</button>
            </a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={img2}
              alt="Blog Image 2"
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
            <a href="#">
            <button className="glow-on-hover">READ MORE</button>
            </a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={img3}
              alt="Blog Image 3"
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
            <a href="#">
            <button className="glow-on-hover">READ MORE</button>
            </a>
          </div>
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
    </div>
  );
};

export default Team;
