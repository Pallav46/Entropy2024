import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import IMG_7564 from "../../../public/assets/Events/img/IMG_7564.JPG"
// import IMG_7565 from "../../../public/assets/Events/img/IMG_7565.JPG"
// import IMG_7566 from "../../../public/assets/Events/img/IMG_7566.JPG"
// import IMG_7567 from "../../../public/assets/Events/img/IMG_7567.JPG"
import './Events.css';

const Events = () => {
  useEffect(() => {
    window.Shery.imageEffect("#back", {
        style: 5,
        config: {
          a: { value: 2, range: [0, 30] },
          b: { value: -0.8, range: [-1, 1] },
          zindex: { value: -9996999, range: [-9999999, 9999999] },
          aspect: { value: 1.8853306276095898 },
          ignoreShapeAspect: { value: true },
          shapePosition: { value: { x: 0, y: 0 } },
          shapeScale: { value: { x: 0.5, y: 0.5 } },
          shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
          shapeRadius: { value: 0, range: [0, 2] },
          currentScroll: { value: 0 },
          scrollLerp: { value: 0.07 },
          gooey: { value: true },
          infiniteGooey: { value: true },
          growSize: { value: 1.11, range: [1, 15] },
          durationOut: { value: 1, range: [0.1, 5] },
          durationIn: { value: 1.41, range: [0.1, 5] },
          displaceAmount: { value: 0.5 },
          masker: { value: true },
          maskVal: { value: 1, range: [1, 5] },
          scrollType: { value: 0 },
          geoVertex: { range: [1, 64], value: 1 },
          noEffectGooey: { value: true },
          onMouse: { value: 1 },
          noise_speed: { value: 0.2, range: [0, 10] },
          metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
          discard_threshold: { value: 0.52, range: [0, 1] },
          antialias_threshold: { value: 0, range: [0, 0.1] },
          noise_height: { value: 0.5, range: [0, 2] },
          noise_scale: { value: 12.98, range: [0, 100] },
        },
        gooey: true,
      });
      
      var elems = document.querySelectorAll(".elem");
      
      elems.forEach(function (elem) {
        var h1s = elem.querySelectorAll("h1");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main").addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(h1s[index], {
              top: "-100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { top: "100%" });
                animating = false;
              },
            });
            
            index = index === h1s.length - 1 ? 0 : index + 1;
            
            gsap.to(h1s[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });
  }, []);

  return (
    <div id="main">
      <div id="back">
        <img src="/assets/Events/img/IMG_7564.JPG" alt="" />
        <img src="/assets/Events/img/IMG_7565.JPG" alt="" />
        <img src="/assets/Events/img/IMG_7566.JPG" alt="" />
        <img src="/assets/Events/img/IMG_7567.JPG" alt="" />
      </div>
      <div id="top">
        <div id="workingarea">
          <div id="nav">
            <div id="nleft">
              <img src="logo.png" alt="logo" />
              <a href="#">home</a>
              <a href="#">events</a>
            </div>
            <div id="nright">
              <a href="#">team</a>
              <a href="#">sponsors</a>
            </div>
          </div>
          <div id="hero">
            <div id="heroleft">
              <div className="elem">
                <h1>david chang</h1>
                <h1>Susan jamal</h1>
                <h1>orit chang</h1>
                <h1>klew chang</h1>
                <h1>vid chang</h1>
              </div>
              <div className="elem">
                <h1>gives zero</h1>
                <h1>indifference is</h1>
                <h1>hii ko</h1>
                <h1>hii ko</h1>
                <h1>klcwn klcw</h1>

              </div>
              <div className="elem">
                <h1>funks.</h1>
                <h1>Absolute.</h1>
                <h1>kjw.</h1>
                <h1>wkjkjef.</h1>
                <h1>kjcr.</h1>
              </div>

              <button>Explore Now</button>
            </div>
            <div id="heroright">
              <p>Lorem ipsum dolor sit amet.</p>
              <div id="imagediv"></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis incidunt consequatur asperiores quod sint animi,
                facilis dolorum nam. Cumque, odio hic dignissimos odit sit fugit
                a officia est sequi similique distinctio laborum nesciunt ex
                mollitia.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                itaque nihil provident, voluptate hic quae vero. Ratione
                corporis eligendi ullam necessitatibus neque dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
