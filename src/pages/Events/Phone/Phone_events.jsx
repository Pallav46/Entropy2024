import React from 'react'
import './Phone_events.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { GoFlame } from "react-icons/go"

const Phone_events = () => {
  return (
    <div id="main">
        <div className="navbar-phone">
        <div class="dropdown" id="p1">
            <GiHamburgerMenu className="hamburger-hehe"/>
            <div class="dropdown-content">
                <a href="#" class="h2">Home</a>
                <a href="#">RoboCon</a>
                <a href="#">Hackathon</a>
                <a href="#">Tech Quiz</a>
                <a href="#">Winners</a>
                <a href="#">Catalogue</a>
                <a href="#" class="h2">About Us</a>
            </div>
        </div>
        <div className="logo-phone">Entropy 2024</div>
        <div className="fire"><GoFlame className="flame"/></div>
        </div>

        <div className="maincontent-phone">
          <div class="card">
            <div class="partition1">
                <div class="bl1" id="#bl0">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKzmzmYr5rtZfm0TJeiXiu6DWJgMcfQd-fQ&s" alt=""/>
                </div>
                <div class="bl1" id="#bl1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEcxxw3dVA3I2PKLQ_7cIm9c6iQ6EmX1QNQ&s" alt=""/>
                </div>
                <div class="bl1" id="#bl2">
                    <img src="https://www.thesprucepets.com/thmb/nKNaS4I586B_H7sEUw9QAXvWM_0=/2121x0/filters:no_upscale():strip_icc()/GettyImages-135630198-5ba7d225c9e77c0050cff91b.jpg" alt=""/>
                </div>
                <div class="bl1" id="#bl3">
                    <img src="https://cdn.hswstatic.com/gif/pet-monkey.jpg" alt=""/>
                </div>
                <div class="bl1" id="#bl4">
                    <img src="https://cdn.shopify.com/s/files/1/0530/4500/2416/articles/shutterstock_1663494748_FI-341166.jpg?v=1630542277" alt=""/>
                </div>
                <div class="bl1" id="#bl5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ61OM1H8-I90cIyuZI9-VWMcyhZE81afxTw&s" alt=""/>
                </div>
            </div>
            
            <div class="partition2"></div>
          </div>
        </div>
    </div>
  )
}

export default Phone_events