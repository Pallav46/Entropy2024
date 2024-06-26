import React from 'react';
import classes from './FacultyCoordinators.module.css';
import pic from './Man.jpg';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

function FacultyCoordinators() {

  return (
    <div className={classes.main_container}>
      <div className={classes.initial_header}>
        <span className={classes.head_1}>Faculty</span>
        <span className={classes.head_2}>Coordinators</span>
      </div>
      <div className={classes.card_containers}>
        <div className={classes.head_card_container}>
          <div className={classes.card}>
            <img src={pic} alt="Head Coordinator" />
            <p className={classes.name}>Head Co-ord Name</p>
            <p className={classes.designation}>Head Co-ord Designation</p>
            <p className={classes.info}>Head Co-ord info</p>
            <div className={classes.icons}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:email@example.com">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.team_lead_container}>
          <div className={classes.card}>
            <img src={pic} alt="Team Lead 1" />
            <p className={classes.name}>Team Lead 1 Name</p>
            <p className={classes.designation}>Team Lead 1 Designation</p>
            <p className={classes.info}>Team lead 1 info</p>
            <div className={classes.icons}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:email@example.com">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className={classes.card}>
            <img src={pic} alt="Team Lead 2" />
            <p className={classes.name}>Team Lead 2 Name</p>
            <p className={classes.designation}>Team Lead 2 Designation</p>
            <p className={classes.info}>Team lead 2 info</p>
            <div className={classes.icons}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:email@example.com">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className={classes.card}>
            <img src={pic} alt="Team Lead 3" />
            <p className={classes.name}>Team Lead 3 Name</p>
            <p className={classes.designation}>Team Lead 3 Designation</p>
            <p className={classes.info}>Team lead 3 info</p>
            <div className={classes.icons}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:email@example.com">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.team_member_container}>
          <div className={classes.row}>
            <div className={classes.card}>
              <img src={pic} alt="Team Member 1" />
              <p className={classes.name}>Team Member 1 Name</p>
              <p className={classes.designation}>Team Member 1 Designation</p>
              <p className={classes.info}>Team member 1 info</p>
              <div className={classes.icons}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:email@example.com">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className={classes.card}>
              <img src={pic} alt="Team Member 2" />
              <p className={classes.name}>Team Member 2 Name</p>
              <p className={classes.designation}>Team Member 2 Designation</p>
              <p className={classes.info}>Team member 2 info</p>
              <div className={classes.icons}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:email@example.com">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className={classes.card}>
              <img src={pic} alt="Team Member 3" />
              <p className={classes.name}>Team Member 3 Name</p>
              <p className={classes.designation}>Team Member 3 Designation</p>
              <p className={classes.info}>Team member 3 info</p>
              <div className={classes.icons}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:email@example.com">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.card}>
              <img src={pic} alt="Team Member 4" />
              <p className={classes.name}>Team Member 4 Name</p>
              <p className={classes.designation}>Team Member 4 Designation</p>
              <p className={classes.info}>Team member 4 info</p>
              <div className={classes.icons}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:email@example.com">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className={classes.card}>
              <img src={pic} alt="Team Member 5" />
              <p className={classes.name}>Team Member 5 Name</p>
              <p className={classes.designation}>Team Member 5 Designation</p>
              <p className={classes.info}>Team member 5 info</p>
              <div className={classes.icons}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:email@example.com">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className={classes.card}>
              <img src={pic} alt="Team Member 6" />
              <p className={classes.name}>Team Member 6 Name</p>
              <p className={classes.designation}>Team Member 6 Designation</p>
              <p className={classes.info}>Team member 6 info</p>
              <div className={classes.icons}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:email@example.com">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyCoordinators;
