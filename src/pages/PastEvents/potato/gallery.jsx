import {useState,React, useEffect} from 'react';
import mobile from './mo';
import './gallery.css';


const Gallery = () => {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text, setText] = useState("PAST EVENTS");

  useEffect(() => {
    let interval = null;

    const handleMouseOver = (event) => {
      let iteration = 0;
      const originalText = event.target.dataset.value;

      clearInterval(interval);

      interval = setInterval(() => {
        setText((prevText) =>
          prevText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const past = document.querySelector(".past");
    past.addEventListener("mouseover", handleMouseOver);

    return () => {
      past.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };

  }, [letters]);

  return (<>
    <div className="mobby">
      <mobile/>
    </div>
    <div className='lappy'>
    <div><h1 className="past" data-value="PAST EVENTS">{text}</h1></div>
    <div className="carousel">
      <div className="carousel-control-button left">
        <input type="radio" name="carousel-control-input" />
      </div>
      <div className="carousel-control-button right">
        <input type="radio" name="carousel-control-input" checked />
      </div>
      <div className="carousel-rotation-direction">
        <ul className="carousel-item-wrapper" style={{ '--_num-elements': 11 }}>
          <li
            className="carousel-item"
            style={{
              '--_index': 1,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1706485220806-2d0d9ce98555?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/ein-hohes-gebaude-mit-einer-uhr-an-der-seite-cI09n4yMIYc" target="_blank" rel="noopener noreferrer">
              Architecture Example 1
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 2,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1706146280538-620fa8cda080?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/ein-sehr-hohes-gebaude-mit-vielen-fenstern-3svDIdPOT6M" target="_blank" rel="noopener noreferrer">
              Architecture Example 2
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 3,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1702298616106-adbe0f447455?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/ein-sehr-hohes-gebaude-mit-vielen-fenstern-ivYgEOo7MnQ" target="_blank" rel="noopener noreferrer">
              Architecture Example 3
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 4,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1565363887713-783cd82d36d2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/weiss-graues-gebaudekonzept-8yOPWMS46CQ" target="_blank" rel="noopener noreferrer">
              Architecture Example 4
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 5,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1701025034709-bef78e69d1ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/ein-paar-hohe-gebaude-mit-vielen-fenstern-duj9YsiNKvM" target="_blank" rel="noopener noreferrer">
              Architecture Example 5
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 6,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1701824580548-4f285fc0b80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/die-spiegelung-eines-gebaudes-in-den-fenstern-eines-anderen-gebaudes-QT6ltyDT7UA" target="_blank" rel="noopener noreferrer">
              Architecture Example 6
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 7,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1558472306-75b150ac26eb?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/nahaufnahme-des-weissen-gebaudes-tKnda8e9ejM" target="_blank" rel="noopener noreferrer">
              Architecture Example 7
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 8,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1713623210045-95d02b35c4a2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/ein-hohes-gebaude-mit-zwei-balkonen-und-einer-uhr-sYg7bcIodC8" target="_blank" rel="noopener noreferrer">
              Architecture Example 8
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 9,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1700846968547-ace2dacd5e0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/eine-nahaufnahme-der-seite-eines-gebaudes-VvhIUx1lITA" target="_blank" rel="noopener noreferrer">
              Architecture Example 9
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 10,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1700846978475-5f4dd936c00a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/eine-wand-aus-metallquadraten-und-quadraten-a_XIDnN6C0Y" target="_blank" rel="noopener noreferrer">
              Architecture Example 10
            </a>
          </li>
          <li
            className="carousel-item"
            style={{
              '--_index': 11,
              '--_image-url':
                "url('https://images.unsplash.com/photo-1707788620837-cd3efcce3ceb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <a href="https://unsplash.com/de/fotos/eine-nahaufnahme-einer-metallstruktur-mit-einem-himmelshintergrund-9u9t6gP8R-s" target="_blank" rel="noopener noreferrer">
              Architecture Example 11
            </a>
          </li>
          <li className="carousel-ground"></li>
        </ul>
      </div>
    </div>
    </div>
  </>);
};

export default Gallery;
