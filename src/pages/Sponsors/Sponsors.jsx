import { useState, useEffect } from 'react';
import $ from 'jquery'; // Import jQuery if not already included in your project
import './sponsors.scss'; // Your SCSS file import

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      title: 'Title Sponsor',
      subtitle: 'See how',
      imageUrl:
        'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    },
    {
      id: 2,
      title: 'See through the field',
      subtitle: 'Learn more about',
      imageUrl:
        'https://images.pexels.com/photos/110649/pexels-photo-110649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920',
    },
    {
      id: 3,
      title: 'Hey, take a time to relax!',
      subtitle: 'Everybody needs',
      imageUrl:
        'https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    },
    {
      id: 4,
      title: 'New slide title',
      subtitle: 'New slide subtitle',
      imageUrl:
        'https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const $window = $(window);
    const $body = $('body');
    let slideShow; // Declare slideShow in accessible scope

    class Slideshow {
      constructor(userOptions = {}) {
        const defaultOptions = {
          $el: $('.slideshow'),
          showArrows: false,
          showPagination: true,
          duration: 50000,
          autoplay: true,
        };

        let options = Object.assign({}, defaultOptions, userOptions);

        this.$el = options.$el;
        this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
        this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
        this.showPagination = options.showPagination;
        this.currentSlide = 1;
        this.isAnimating = false;
        this.animationDuration = 1200;
        this.autoplaySpeed = options.duration;
        this.interval;
        this.$controls = this.$el.find('.js-slider-home-button');
        this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

        this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
        this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
        this.$el.on('click', '.js-pagination-item', (event) => {
          if (!this.isAnimating) {
            this.preventClick();
            this.goToSlide(event.target.dataset.slide);
          }
        });

        this.init();
      }

      init() {
        this.goToSlide(1);
        if (this.autoplay) {
          this.startAutoplay();
        }

        if (this.showPagination) {
          let paginationNumber = this.maxSlide;
          let pagination = '<div class="pagination"><div class="container">';

          for (let i = 0; i < this.maxSlide; i++) {
            let item = `<span class="pagination__item js-pagination-item ${
              i === 0 ? 'is-current' : ''
            }" data-slide=${i + 1}>${i + 1}</span>`;
            pagination = pagination + item;
          }

          pagination = pagination + '</div></div>';

          this.$el.append(pagination);
        }
      }

      preventClick() {
        this.isAnimating = true;
        this.$controls.prop('disabled', true);
        clearInterval(this.interval);

        setTimeout(() => {
          this.isAnimating = false;
          this.$controls.prop('disabled', false);
          if (this.autoplay) {
            this.startAutoplay();
          }
        }, this.animationDuration);
      }

      goToSlide(index) {
        this.currentSlide = parseInt(index);

        if (this.currentSlide > this.maxSlide) {
          this.currentSlide = 1;
        }

        if (this.currentSlide === 0) {
          this.currentSlide = this.maxSlide;
        }

        const newCurrent = this.$el.find(
          '.js-slider-home-slide[data-slide="' + this.currentSlide + '"]'
        );
        const newPrev =
          this.currentSlide === 1
            ? this.$el.find('.js-slider-home-slide').last()
            : newCurrent.prev('.js-slider-home-slide');
        const newNext =
          this.currentSlide === this.maxSlide
            ? this.$el.find('.js-slider-home-slide').first()
            : newCurrent.next('.js-slider-home-slide');

        this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
        this.$el.find('.js-pagination-item').removeClass('is-current');

        if (this.maxSlide > 1) {
          newPrev.addClass('is-prev');
          newNext.addClass('is-next');
        }

        newCurrent.addClass('is-current');
        this.$el
          .find('.js-pagination-item[data-slide="' + this.currentSlide + '"]')
          .addClass('is-current');
      }

      nextSlide() {
        this.preventClick();
        this.goToSlide(this.currentSlide + 1);
      }

      prevSlide() {
        this.preventClick();
        this.goToSlide(this.currentSlide - 1);
      }

      startAutoplay() {
        this.interval = setInterval(() => {
          if (!this.isAnimating) {
            this.nextSlide();
          }
        }, this.autoplaySpeed);
      }

      destroy() {
        this.$el.off();
      }
    }

    let loaded = false;
    let maxLoad = 3000;

    function load() {
      const options = {
        showPagination: true,
      };

      slideShow = new Slideshow(options); // Assign to outer scope variable
    }

    function addLoadClass() {
      $body.addClass('is-loaded');

      setTimeout(function () {
        $body.addClass('is-animated');
      }, 600);
    }

    $window.on('load', function () {
      if (!loaded) {
        loaded = true;
        load();
      }
    });

    setTimeout(function () {
      if (!loaded) {
        loaded = true;
        load();
      }
    }, maxLoad);

    addLoadClass();

    return () => {
      // Cleanup function on unmount if needed
      if (slideShow) {
        slideShow.destroy(); // Ensure to call destroy method if slideShow is defined
      }
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div id="wrapper">
      <section className="slideshow" id="js-header">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slideshow__slide js-slider-home-slide ${
              index === currentSlide ? 'is-current' : ''
            }`}
            data-slide={slide.id}
          >
            <div className="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
              <div className="slideshow__slide-background-load-wrap background-absolute">
                <div className="slideshow__slide-background-load background-absolute">
                  <div className="slideshow__slide-background-wrap background-absolute">
                    <div className="slideshow__slide-background background-absolute">
                      <div className="slideshow__slide-image-wrap background-absolute">
                        <div className="slideshow__slide-image background-absolute" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideshow__slide-caption">
              <div className="slideshow__slide-caption-text">
                <div className="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                  <h1 className="slideshow__slide-caption-title">{slide.title}</h1>
                  <a className="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                    <span className="slideshow__slide-caption-subtitle-label">{slide.subtitle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="c-header-home_footer">
          <div className="o-container">
            <div className="c-header-home_controls -nomobile o-button-group">
              <div className="js-parallax is-inview" data-speed="1" data-position="top" data-target="#js-header">
                <button className="o-button -white -square -left js-slider-home-button js-slider-home-prev" type="button">
                  <span className="o-button_label">
                    <svg className="o-button_icon" role="img">
                      <use xlinkHref="#arrow-prev"></use>
                    </svg>
                  </span>
                </button>
                <button className="o-button -white -square js-slider-home-button js-slider-home-next" type="button">
                  <span className="o-button_label">
                    <svg className="o-button_icon" role="img">
                      <use xlinkHref="#arrow-next"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol viewBox="0 0 18 18" id="arrow-next">
          <path id="arrow-next-arrow.svg" d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z"/>
        </symbol>
        <symbol viewBox="0 0 18 18" id="arrow-prev">
          <path id="arrow-prev-arrow.svg" d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z"/>
        </symbol>
      </svg>
    </div>
  );
};

export default Slideshow;