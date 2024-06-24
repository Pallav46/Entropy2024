import React from "react";
import Slider from "react-slick";
import classes from "./TeamPage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class WebAndCreatives extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      verticalSwiping: false,
      arrows: false,
      swipe: false,
      swipeToSlide: false,
    };

    return (
      <div className={classes.main_container}>
        <div className={classes.blogSlider}>
          <Slider {...settings}>
            <div className={classes.blogSliderItem}>
              <div className={classes.blogSliderImg}>
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                  alt=""
                />
              </div>
              <div className={classes.blogSliderContent}>
                <div className={classes.blogSliderTitle}>
                  Faculty Coordinators
                </div>
                <div className={classes.blogSliderText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </div>
                <a href="/teams/faculty" className={classes.blogSliderButton}>
                  MEET THE TEAM
                </a>
              </div>
            </div>
            <div className={classes.blogSliderItem}>
              <div className={classes.blogSliderImg}>
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
                  alt=""
                />
              </div>
              <div className={classes.blogSliderContent}>
                <div className={classes.blogSliderTitle}>
                  Sponsorship Team
                </div>
                <div className={classes.blogSliderText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </div>
                <a href="/teams/sponsorship" className={classes.blogSliderButton}>
                  MEET THE TEAM
                </a>
              </div>
            </div>
            <div className={classes.blogSliderItem}>
              <div className={classes.blogSliderImg}>
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp"
                  alt=""
                />
              </div>
              <div className={classes.blogSliderContent}>
                <div className={classes.blogSliderTitle}>Web And Creatives</div>
                <div className={classes.blogSliderText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </div>
                <a href="/teams/webAndCreatives" className={classes.blogSliderButton}>
                  MEET THE TEAM
                </a>
              </div>
            </div>
            <div className={classes.blogSliderItem}>
              <div className={classes.blogSliderImg}>
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp"
                  alt=""
                />
              </div>
              <div className={classes.blogSliderContent}>
                <div className={classes.blogSliderTitle}>Event Management</div>
                <div className={classes.blogSliderText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </div>
                <a href="/teams/eventManagement" className={classes.blogSliderButton}>
                  MEET THE TEAM
                </a>
              </div>
            </div>
            <div className={classes.blogSliderItem}>
              <div className={classes.blogSliderImg}>
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp"
                  alt=""
                />
              </div>
              <div className={classes.blogSliderContent}>
                <div className={classes.blogSliderTitle}>Design Team</div>
                <div className={classes.blogSliderText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </div>
                <a href="/teams/design" className={classes.blogSliderButton}>
                  MEET THE TEAM
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default WebAndCreatives;
