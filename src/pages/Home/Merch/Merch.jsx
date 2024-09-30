import './Merch.css'
const Merch = () => {
  return (
    <div>
    <header className="header">
      <a href="#home" className="logo">IIITG <span> Entropy</span></a>

      <i className='bx bx-menu' id="menu-icon"></i>

    </header>

    <section className="home" id="home">
      <div className="home-content">
        <h1> 2024<span> Collection</span></h1>
        <h3 className="text-animation">Elevate your Style with

Techniche Merch! <span></span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus voluptatum itaque assumenda quas aspernatur sit non consequuntur libero earum hic vitae, quos ab fuga ut nesciunt eos, at deserunt.        </p>
        <br></br>
        <br></br>



        <div className="btn-group">
          <a href="#contact" className="btn">Buy Now</a>
        </div>
      </div>
      <div className="home-img">
        <img src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/merchandise-designs-for-every-day-branding/T-shirt-Design-by-Risallah.png" alt="" />
      </div>
    </section>
  </div>
  )
}

export default Merch;
