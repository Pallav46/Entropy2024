import { useEffect } from "react";
import './Gallery.css'
import Title from '/assets/Gallery/Mobile/title.png'

const Gallery = () => {
  useEffect(() => {
    let boxes = Array.from(document.querySelectorAll(".box"));
    let inView = (elem) => {
      return (
        window.scrollY >= elem.offsetTop - window.innerHeight + 200 &&
        window.scrollY <= elem.offsetTop + elem.offsetHeight
      );
    };
    let outView = (elem) => {
      return (
        window.scrollY >= elem.offsetTop + elem.offsetHeight ||
        window.scrollY <= elem.offsetTop - window.innerHeight
      );
    };

    let scroller = () => {
      boxes.forEach((i) => {
        if (inView(i)) {
          i.classList.add("inView");
        }
        if (outView(i)) {
          i.classList.remove("inView");
        }
      });
    };

    window.addEventListener("scroll", scroller, false);
  });
  return (
    <div>
      <div className="title-image">
        <img src={Title} alt="Title" />
      </div>

      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>
      <div className="scroll"></div>
      <div className="box">
        <div className="img-wrapper">
          <img
            src="https://i.pinimg.com/736x/a8/90/1e/a8901e81a4642c39abe154ce1a08820a.jpg"
            alt="Joker"
          />
        </div>
      </div>

      <div className="scroll"></div>
      <div className="scroll"></div>
      <script src="https://codepen.io/MoustafaJazzar/pen/QaEZBO.js"></script>
      <script src="./script.js"></script>
    </div>
  );
};

export default Gallery;
