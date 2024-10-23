import './Merch.css';

const Merch = () => {
  return (
    <div className='hiii1'>
      <div className='merch-body'>
        <header className="merch-header">
          {/* <a href="#home" className="merch-logo">IIITG <span>Entropy</span></a> */}

          <i className="bx bx-menu" id="merch-menu-icon"></i>
        </header>

        <section className="merch-home" id="home">
          <div className="merch-home-img">
            <img src="/image/TSHIRT.jpg" alt="Techniche Merch" />
          </div>
          <div className="merch-home-content">
            <h1>2024 Collection</h1>
            <h3 className="merch-text-animation">Elevate your Style with Entropy Merch! <span></span></h3>
            <p>
              Discover the 2024 ENTROPY t-shirt collection—premium quality, tech-inspired designs, celebrating innovation and style. Perfect for showcasing your passion for technology and creativity.
            </p>

            <div className="merch-btn-group">
              {/* <a href="" className="merch-btn">Buy Now</a> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Merch;
