import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img from '../../../../public/assets/Events/img/img1.jpg'
import './Laptop_eventsDay2.css';
import Navbar from '../../Navbar/Navbar';
import '../Day 1/Laptop_eventsDay1.css'

const Laptop_eventsDay2 = () => {
  useEffect(() => {
    window.Shery.imageEffect("#back", {
        style: 5,
        config: {
          a: { value: 1.49, range: [0, 30] }, //To edit speed of BG wobble
          b: { value: -0.98, range: [-1, 1] }, //To edit the wobbliness of BG. -1 and 1 = no wobble, 0 = max wobble
          zindex: { value: -9996999, range: [-9999999, 9999999] },
          aspect: { value: 1.8853306276095898 },
          ignoreShapeAspect: { value: true },
          shapePosition: { value: { x: 0, y: 0 } }, // To edit shape of bg img
          shapeScale: { value: { x: 0.5, y: 0.5 } }, // To edit shape of bg img
          shapeEdgeSoftness: { value: 0, range: [0, 0.5] }, // To edit shape of bg img
          shapeRadius: { value: 0, range: [0, 2] }, // To edit shape of bg img
          currentScroll: { value: 0 },
          scrollLerp: { value: 0.07 }, // Reduced for less wobbly scroll
          gooey: { value: true },
          infiniteGooey: { value: true },
          growSize: { value: 1.11, range: [1, 15] }, // To edit the amount upto which wiggly spreads in order to change img, decrease the value to test
          durationOut: { value: 1, range: [0.1, 5] }, //Time it takes for the current img to disappear
          durationIn: { value: 1, range: [0.1, 5] }, //Time it takes for the next image and the wiggly thing around the mouse to appear
          displaceAmount: { value: 0.5 }, 
          masker: { value: true },
          maskVal: { value: 1, range: [1, 5] },
          scrollType: { value: 0 },
          geoVertex: { range: [1, 64], value: 1 },
          noEffectGooey: { value: false }, //To edit if the next image preview that is shown inside the wiggly around mouse also wobbles or not. keep false for smoother transition
          onMouse: { value: 1 },
          noise_speed: { value: 1.59, range: [0, 10] }, //To edit speed of the wiggly around mouse. put value=10 to test
          metaball: { value: 0.21, range: [0, 2], _gsap: { id: 3 } }, //For editing radius of the wiggly thing around mouse, Increase the value to test
          discard_threshold: { value: 0.5, range: [0, 1] },
          antialias_threshold: { value: 0, range: [0, 0.1] }, //For editing the amount of next image visible
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
      
        document.querySelector("#main")
        .addEventListener("click", function () {
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

      var imgElems = document.querySelectorAll(".imgElem");

      imgElems.forEach(function (imgElem){
        var imagedivs = imgElem.querySelectorAll("#imagediv");
        var index = 0;
        var animating = false;

        document.querySelector("#main")
        .addEventListener("click", function () {
          if(!animating) {
            animating = true;
            gsap.to(imagedivs[index], {
              top: "100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], {top: "-100%"});
                animating = false;
              },
            });

            index = index === imagedivs.length - 1 ? 0 : index + 1;

            gsap.to(imagedivs[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var ele2 = document.querySelectorAll(".elem2");
      
      ele2.forEach(function (elem2) {
        var textR1s = elem2.querySelectorAll(".textR1");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(textR1s[index], {
              top: "100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { top: "-100%" });
                animating = false;
              },
            });
            
            index = index === textR1s.length - 1 ? 0 : index + 1;
            
            gsap.to(textR1s[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var ele3 = document.querySelectorAll(".elem3");
      
      ele3.forEach(function (elem3) {
        var textR2s = elem3.querySelectorAll(".textR2");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(textR2s[index], {
              top: "100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { top: "-100%" });
                animating = false;
              },
            });
            
            index = index === textR2s.length - 1 ? 0 : index + 1;
            
            gsap.to(textR2s[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var ele4 = document.querySelectorAll(".elem4");
      
      ele4.forEach(function (elem4) {
        var textR3s = elem4.querySelectorAll(".textR3");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(textR3s[index], {
              top: "100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { top: "-100%" });
                animating = false;
              },
            });
            
            index = index === textR3s.length - 1 ? 0 : index + 1;
            
            gsap.to(textR3s[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var reg = document.querySelectorAll(".register");
      
      reg.forEach(function (register) {
        var registerLinks = register.querySelectorAll(".registerLink");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(registerLinks[index], {
              left: "-100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { left: "100%" });
                animating = false;
              },
            });
            
            index = index === registerLinks.length - 1 ? 0 : index + 1;
            
            gsap.to(registerLinks[index], {
              left: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

  }, []);

  return (
    <div id="main">
      <Navbar/>
      <div id="back">
        <img src="/assets/laptop_photos/gameroom.jpg" alt="" />
        <img src="/assets/laptop_photos/robotics.jpg" alt="" />
        <img src="/assets/laptop_photos/hackathon.jpg" alt="" />
        <img src="/assets/laptop_photos/fastrack.png" alt="" />
        <img src="/assets/laptop_photos/coding.jpg" alt="" />
      </div>
      <div id="top">
        <div id="workingarea">
          <div id="hero">
            <div id="heroleft">
              <div className="elem">
                <h1>E-Sports Round 2</h1>
                <h1>Fastrack Round 1</h1>
                <h1>Debuggers Round 2</h1>
                <h1>Fastrack Round 2</h1>
                <h1>CodeThrill 7.0</h1>
              </div>
              
              <div className="elem">
                <h1>8 am</h1>
                <h1>10 am</h1>
                <h1>12 pm</h1>
                <h1>2 pm</h1>
                <h1>4 pm</h1>
              </div>

              <div className="elem">
                <h1>venue</h1>
                <h1>venue</h1>
                <h1>venue</h1>
                <h1>venue</h1>
                <h1>venue</h1>
              </div>

              <button className='register'>
                <a href="https://forms.gle/KR7BdRgnxs2gZmn6A" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
              </button>
            </div>
            <div id="heroright">
              
              <div className="elem3">
              <p className='textR2'>
                Gear up for the ultimate esports showdown!
                Whether you’re battling it out in Valorant 
                or dropping into BGMI, the competition 
                is fierce and the fun is unbeatable.
                </p>
                <p className='textR2'>
                Get ready for the ultimate robotics face-off!
                Watch as teams bring their robots to life 
                and compete in thrilling challenges.
                </p>
                <p className='textR2'>
                Join us at a coding competition focused on debugging.
                You will have to solve errors, optimization issues
                or flaws in code snippets from problems.
                </p>
                <p className='textR2'>
                Get ready for the ultimate robotics face-off!
                Watch as teams bring their robots to life 
                and compete in thrilling challenges.
                </p>
                <p className='textR2'>
                Gear up for a coding showdown! 
                Test your skills, solve complex problems, 
                and race against the clock in CodeThrill 7.0. 
                </p>
              </div>
              <button className='register'>
                <a href="/events" className='registerLink'>Timeline</a>
                <a href="/events" className='registerLink'>Timeline</a>
                <a href="/events" className='registerLink'>Timeline</a>
                <a href="/events" className='registerLink'>Timeline</a>
                <a href="/events" className='registerLink'>Timeline</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop_eventsDay2;
