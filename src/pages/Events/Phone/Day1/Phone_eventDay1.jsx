import React, { useEffect } from "react";
import './Phone_eventDay1.css'

const Phone_eventDay1 = () => {
    useEffect(() => {
        var swiper = new window.Swiper('.product-slider', {
          spaceBetween: 30,
          effect: 'fade',
          loop: true, 
          navigation: {
            nextEl: '.next',
            prevEl: '.prev'
          },
          on: {
            init: function () {
              var index = this.activeIndex;
              var target = document.querySelector(`.product-slider__item[data-target="${this.slides[index].dataset.target}"]`);
              console.log(target);
    
              document.querySelectorAll('.product-img__item').forEach(item => item.classList.remove('active'));
              if (target) {
                document.querySelector(`.product-img__item#${target.dataset.target}`).classList.add('active');
              }
            }
          }
        });
    
        swiper.on('slideChange', function () {
          var index = this.activeIndex;
          var target = document.querySelector(`.product-slider__item[data-target="${this.slides[index].dataset.target}"]`);
          console.log(target);
    
          document.querySelectorAll('.product-img__item').forEach(item => item.classList.remove('active'));
          if (target) {
            document.querySelector(`.product-img__item#${target.dataset.target}`).classList.add('active');
          }
    
          if (swiper.isEnd) {
            document.querySelector('.prev').classList.remove('disabled');
            document.querySelector('.next').classList.add('disabled');
          } else {
            document.querySelector('.next').classList.remove('disabled');
          }
    
          if (swiper.isBeginning) {
            document.querySelector('.prev').classList.add('disabled');
          } else {
            document.querySelector('.prev').classList.remove('disabled');
          }
        });
    
        document.querySelectorAll(".js-fav").forEach(button => {
          button.addEventListener("click", () => {
            button.querySelector('.heart').classList.toggle("is-active");
          });
        });
    
        return () => {
          swiper.destroy();
          document.querySelectorAll(".js-fav").forEach(button => {
            button.removeEventListener("click", () => {
              button.querySelector('.heart').classList.toggle("is-active");
            });
          });
        };
      }, []);
      
  return (
    <>
      <div>
        <div className="wrapper">
          <div className="content">
            <div className="bg-shape">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp"
                alt=""
              />
            </div>

            <div className="product-img">
              <div className="product-img__item" id="img1">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-1.webp"
                  alt="star wars"
                  className="product-img__img"
                />
              </div>

              <div className="product-img__item" id="img2">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-2.webp"
                  alt="star wars"
                  className="product-img__img"
                />
              </div>

              <div className="product-img__item" id="img3">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405218/starwars/item-3.webp"
                  alt="star wars"
                  className="product-img__img"
                />
              </div>

              <div className="product-img__item" id="img4">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-4.webp"
                  alt="star wars"
                  className="product-img__img"
                />
              </div>
            </div>

            <div className="product-slider">
              <button className="prev disabled">
                <span className="icon">
                  <svg className="icon icon-arrow-right">
                    <use xlinkHref="#icon-arrow-left"></use>
                  </svg>
                </span>
              </button>
              <button className="next">
                <span className="icon">
                  <svg className="icon icon-arrow-right">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                </span>
              </button>

              <div className="product-slider__wrp swiper-wrapper">
                <div
                  className="product-slider__item swiper-slide"
                  data-target="img4"
                >
                  <div className="product-slider__card">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp"
                      alt="star wars"
                      className="product-slider__cover"
                    />
                    <div className="product-slider__content">
                      <h1 className="product-slider__title">
                        STORMTROPER <br />
                        HELMET
                      </h1>
                      <span className="product-slider__price">
                        $1.299,<sup>99</sup>
                      </span>
                      <div className="product-ctr">
                        <div className="product-labels">
                          <div className="product-labels__title">
                            HELMET SIZE
                          </div>

                          <div className="product-labels__group">
                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type5"
                              />
                              <span className="product-labels__txt">S</span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type5"
                                checked
                              />
                              <span className="product-labels__txt">M</span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type5"
                              />
                              <span className="product-labels__txt">L</span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type5"
                              />
                              <span className="product-labels__txt">XL</span>
                            </label>
                          </div>
                        </div>

                        <span className="hr-vertical"></span>

                        <div className="product-inf">
                          <div className="product-inf__percent">
                            <div className="product-inf__percent-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                              >
                                <defs>
                                  <linearGradient
                                    id="gradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="#0c1e2c"
                                      stopOpacity="0"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="#cb2240"
                                      stopOpacity="1"
                                    />
                                  </linearGradient>
                                </defs>
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="47"
                                  strokeDasharray="240, 300"
                                  stroke="#cb2240"
                                  strokeWidth="4"
                                  fill="none"
                                />
                              </svg>
                            </div>
                            <div className="product-inf__percent-txt">80%</div>
                          </div>

                          <span className="product-inf__title">
                            DURABILITY RATE
                          </span>
                        </div>
                      </div>

                      <div className="product-slider__bottom">
                        <button className="product-slider__cart">
                          ADD TO CART
                        </button>

                        <button className="product-slider__fav js-fav">
                          <span className="heart"></span> ADD TO WISHLIST
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="product-slider__item swiper-slide"
                  data-target="img1"
                >
                  <div className="product-slider__card">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-1-bg.webp"
                      alt="star wars"
                      className="product-slider__cover"
                    />
                    <div className="product-slider__content">
                      <h1 className="product-slider__title">
                        IMPERIAL ARMY’S <br />
                        TIE FIGHTER
                      </h1>
                      <span className="product-slider__price">
                        $9.999,<sup>99</sup>
                      </span>
                      <div className="product-ctr">
                        <div className="product-labels">
                          <div className="product-labels__title">
                            ENGINE UNIT
                          </div>

                          <div className="product-labels__group">
                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type1"
                                checked
                              />
                              <span className="product-labels__txt">
                                P-S4 TWIN
                              </span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type1"
                              />
                              <span className="product-labels__txt">
                                P-W401
                              </span>
                            </label>
                          </div>
                        </div>

                        <span className="hr-vertical"></span>

                        <div className="product-inf">
                          <div className="product-inf__percent">
                            <div className="product-inf__percent-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                              >
                                <defs>
                                  <linearGradient
                                    id="gradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="#0c1e2c"
                                      stopOpacity="0"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="#cb2240"
                                      stopOpacity="1"
                                    />
                                  </linearGradient>
                                </defs>
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="47"
                                  strokeDasharray="225, 300"
                                  stroke="#cb2240"
                                  strokeWidth="4"
                                  fill="none"
                                />
                              </svg>
                            </div>
                            <div className="product-inf__percent-txt">75%</div>
                          </div>

                          <span className="product-inf__title">DURABILITY</span>
                        </div>
                      </div>

                      <div className="product-slider__bottom">
                        <button className="product-slider__cart">
                          ADD TO CART
                        </button>

                        <button className="product-slider__fav js-fav">
                          <span className="heart"></span> ADD TO WISHLIST
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="product-slider__item swiper-slide"
                  data-target="img2"
                >
                  <div className="product-slider__card">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405222/starwars/item-2-bg.webp"
                      alt="star wars"
                      className="product-slider__cover"
                    />
                    <div className="product-slider__content">
                      <h1 className="product-slider__title">
                        KYLO RENS <br />
                        LIGHTSABER
                      </h1>
                      <span className="product-slider__price">
                        $1.699,<sup>99</sup>
                      </span>
                      <div className="product-ctr">
                        <div className="product-labels">
                          <div className="product-labels__title">
                            VOLTAGE RANGE
                          </div>

                          <div className="product-labels__group">
                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type3"
                                checked
                              />
                              <span className="product-labels__txt">
                                2000 <sup>WATT</sup>
                              </span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type3"
                              />
                              <span className="product-labels__txt">
                                2800 <sup>WATT</sup>
                              </span>
                            </label>
                          </div>

                          <div className="product-labels__title">
                            LASER SIZE
                          </div>

                          <div className="product-labels__group">
                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type2"
                              />
                              <span className="product-labels__txt">S</span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type2"
                                checked
                              />
                              <span className="product-labels__txt">M</span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type2"
                              />
                              <span className="product-labels__txt">L</span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type2"
                              />
                              <span className="product-labels__txt">XL</span>
                            </label>
                          </div>
                        </div>

                        <span className="hr-vertical"></span>

                        <div className="product-inf">
                          <div className="product-inf__percent">
                            <div className="product-inf__percent-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                              >
                                <defs>
                                  <linearGradient
                                    id="gradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="#0c1e2c"
                                      stopOpacity="0"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="#cb2240"
                                      stopOpacity="1"
                                    />
                                  </linearGradient>
                                </defs>
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="47"
                                  strokeDasharray="240, 300"
                                  stroke="#cb2240"
                                  strokeWidth="4"
                                  fill="none"
                                />
                              </svg>
                            </div>
                            <div className="product-inf__percent-txt">80%</div>
                          </div>

                          <span className="product-inf__title">DURABILITY</span>
                        </div>
                      </div>

                      <div className="product-slider__bottom">
                        <button className="product-slider__cart">
                          ADD TO CART
                        </button>

                        <button className="product-slider__fav js-fav">
                          <span className="heart"></span> ADD TO WISHLIST
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="product-slider__item swiper-slide"
                  data-target="img3"
                >
                  <div className="product-slider__card">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp"
                      alt="star wars"
                      className="product-slider__cover"
                    />
                    <div className="product-slider__content">
                      <h1 className="product-slider__title">
                        IMPERIAL ARMY <br />
                        DEATH STAR
                      </h1>
                      <span className="product-slider__price">
                        $9.999,<sup>99</sup>
                      </span>
                      <div className="product-ctr">
                        <div className="product-labels">
                          <div className="product-labels__title">
                            HYPERDRIVE RATING
                          </div>

                          <div className="product-labels__group">
                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type6"
                                checked
                              />
                              <span className="product-labels__txt">
                                CLASS 4
                              </span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type6"
                              />
                              <span className="product-labels__txt">
                                CLASS 20
                              </span>
                            </label>
                          </div>

                          <div className="product-labels__title">ARMANENT</div>

                          <div className="product-labels__group">
                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type7"
                                checked
                              />
                              <span className="product-labels__txt">
                                SUPERLASER
                              </span>
                            </label>

                            <label className="product-labels__item">
                              <input
                                type="radio"
                                className="product-labels__checkbox"
                                name="type7"
                              />
                              <span className="product-labels__txt">
                                TURBOLASER
                              </span>
                            </label>
                          </div>
                        </div>

                        <span className="hr-vertical"></span>

                        <div className="product-inf">
                          <div className="product-inf__percent">
                            <div className="product-inf__percent-circle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                              >
                                <defs>
                                  <linearGradient
                                    id="gradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="0%"
                                    y2="100%"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="#0c1e2c"
                                      stopOpacity="0"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="#cb2240"
                                      stopOpacity="1"
                                    />
                                  </linearGradient>
                                </defs>
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="47"
                                  strokeDasharray="240, 300"
                                  stroke="#cb2240"
                                  strokeWidth="4"
                                  fill="none"
                                />
                              </svg>
                            </div>
                            <div className="product-inf__percent-txt">80%</div>
                          </div>

                          <span className="product-inf__title">
                            DURABILITY RATE
                          </span>
                        </div>
                      </div>

                      <div className="product-slider__bottom">
                        <button className="product-slider__cart">
                          ADD TO CART
                        </button>

                        <button className="product-slider__fav js-fav">
                          <span className="heart"></span> ADD TO WISHLIST
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="social">
            <a
              href="https://twitter.com/imuhammederdem"
              target="_blank"
              className="social__item"
            >
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/twitter.webp"
                alt="muhammed erdem"
                className="social__img"
              />
              <span className="social__txt">Coded By Muhammed Erdem</span>
            </a>

            <a
              href="https://dribbble.com/shots/3453028-Star-Wars-TIE-Fighter-UI"
              target="_blank"
              className="social__item"
            >
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405220/starwars/dribbble.webp"
                alt="eray yeşilyurt"
                className="social__img"
              />
              <span className="social__txt">Designed By Eray Yeşilyurt</span>
            </a>
          </div>
        </div>
        <svg className="hidden" hidden>
          <symbol id="icon-arrow-left" viewBox="0 0 32 32">
            <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
          </symbol>
          <symbol id="icon-arrow-right" viewBox="0 0 32 32">
            <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
          </symbol>
        </svg>
      </div>
    </>
  );
};

export default Phone_eventDay1;
