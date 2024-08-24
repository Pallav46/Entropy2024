import { useEffect } from 'react';
import img1 from "./img1.gif";
import img2 from "./img2.gif";
import img3 from "./img3.gif";
import bg from "./bg7.webm";
import './Team.css'
import Button from '../../components/Button/Button';

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
      {/* <video autoPlay muted loop id="background-video">
        <source src={bg} type="video/webm"/>
        Your browser does not support the video tag.
    </video> */}
    <div className="blog-slider">
      {/* <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div> */}
      <div className="swiper-wrapper">

      <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={img2}
              alt="Blog Image 1"
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code"></span>
            <div className="blog-slider__title">Faculty Coordinators</div>
            <div className="blog-slider__text">The guiding lights of our fest! They’re the mentors who ensure everything runs smoothly, providing support and guidance to make our vision a reality.</div>
            <a href="/teams/faculty">
            {/* <button className="glow-on-hover">Meet the Team</button> */}
            <Button/>

            </a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={img1}
              alt="Blog Image 2"
            />
          </div>
          
          <div className="blog-slider__content">
            <span className="blog-slider__code"></span>
            <div className="blog-slider__title">Web and Creatives Team</div>
            <div className="blog-slider__text">The digital heartbeat of the fest, the masterminds behind the fest’s digital identity!</div>
            <a href="/teams/webAndCreatives">
            {/* <button className="glow-on-hover">Meet the Team</button> */}
            <Button/>
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
            <span className="blog-slider__code"></span>
            <div className="blog-slider__title">Event Management Team</div>
            <div className="blog-slider__text">Masters of coordination and champions of execution. If it’s happening, they’re the ones making it happen!</div>
            <a href="/teams/eventManagement">
            {/* <button className="glow-on-hover">Meet the Team</button> */}
            <Button/>

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
            <span className="blog-slider__code"></span>
            <div className="blog-slider__title">Design Team</div>
            <div className="blog-slider__text">The artistic force behind the fest’s visual identity. They don’t just create, they inspire!</div>
            <a href="/teams/design">
            {/* <button className="glow-on-hover">Meet the Team</button> */}
            <Button/>

            </a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={img1}
              alt="Blog Image 4"
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code"></span>
            <div className="blog-slider__title">Sponsorship Team</div>
            <div className="blog-slider__text">Powering the fest with partnerships, they’re the go-getters of the fest ensuring every collaboration adds value to the event.</div>
            <a href="/teams/sponsorship">
            {/* <button className="glow-on-hover">Meet the Team</button> */}
            <Button/>

            </a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src={img1}
              alt="Blog Image 4"
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code"></span>
            <div className="blog-slider__title">Public Relations Team</div>
            <div className="blog-slider__text">Strategic communicators and buzz creators! They craft the perfect narrative to captivate audiences and ensure our event gets the attention it deserves. If it’s in the news, they made it happen!</div>
            <a href="/teams/sponsorship">
            {/* <button className="glow-on-hover">Meet the Team</button> */}
            <Button/>

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
