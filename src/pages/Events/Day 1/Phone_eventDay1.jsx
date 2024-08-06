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
              {/* <img
                // src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405214/starwars/logo.webp"
                alt=""
              /> */}
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
                        EVENT 1
                      </h1>
                      <span className="product-slider__price">
                        Date
                      </span>
                      <div className="product-ctr">
                        <div className="product-labels">
                          <div className="product-labels__title">
                            Venue
                          </div>
                        </div>

                        <span className="hr-vertical"></span> 

                        <div className="product-inf">
                          <span className="product-inf__title">
                            Details
                          </span>
                        </div>
                      </div>

                      <div className="product-slider__bottom">
                        <button className="product-slider__cart">
                          Register Now
                        </button>

                        {/* <button className="product-slider__fav js-fav">
                          <span className="heart"></span> ADD TO WISHLIST
                        </button> */}
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
                        EVENT 2
                      </h1>
                      <span className="product-slider__price">
                        Date
                      </span>
                      <div className="product-ctr">
                        <div className="product-labels">
                          <div className="product-labels__title">
                            Venue
                          </div>
                        </div>

                        <span className="hr-vertical"></span>

                        <div className="product-inf">
                          <span className="product-inf__title">
                            Details
                          </span>
                        </div>
                      </div>

                      <div className="product-slider__bottom">
                        <button className="product-slider__cart">
                          Register Now
                        </button>

                        {/* <button className="product-slider__fav js-fav">
                          <span className="heart"></span> ADD TO WISHLIST
                        </button> */}
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
                        EVENT 3
                      </h1>
                      <span className="product-slider__price">
                        Date
                      </span>
                      <div className="product-ctr">
                        <div className="product-labels">
                          <div className="product-labels__title">
                            Venue
                          </div>
                        </div>

                        <span className="hr-vertical"></span>

                        <div className="product-inf">
                          <span className="product-inf__title">
                            Details
                          </span>
                        </div>
                      </div>

                      <div className="product-slider__bottom">
                        <button className="product-slider__cart">
                          Register Now
                        </button>

                        {/* <button className="product-slider__fav js-fav">
                          <span className="heart"></span> ADD TO WISHLIST
                        </button> */}
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
                        EVENT 4
                      </h1>
                      <span className="product-slider__price">
                        Date
                      </span>
                      <div className="product-ctr">
                        <div className="product-labels">
                          <div className="product-labels__title">
                            Venue
                          </div>
                        </div>

                        <span className="hr-vertical"></span>

                        <div className="product-inf">
                          <span className="product-inf__title">
                            Details
                          </span>
                        </div>
                      </div>

                      <div className="product-slider__bottom">
                        <button className="product-slider__cart">
                          Register Now
                        </button>

                        {/* <button className="product-slider__fav js-fav">
                          <span className="heart"></span> ADD TO WISHLIST
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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