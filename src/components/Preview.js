import React, { Component } from 'react';
import numberImg from '../images/phone.svg';
import emailImg from '../images/email.svg';
import linkedinImg from '../images/linkedin.svg';
import githubImg from '../images/github.svg';
import locationImg from '../images/location.svg';

export class Preview extends Component {
  render() {
    const { name, title, number, email, location, linkedin, github, about, picture, color } = this.props;

    return (
      <div>
        <h2>Preview</h2>
        <div className="preview-container">
          <div className="picture-div" style={{backgroundColor: color}}>
            <img src={picture} alt="Profile" className="picture" />
          </div>
          <div className="about-div" style={{backgroundColor: color}}>
            <h2>About me</h2>
            <p>{about}</p>
          </div>
          <header>
            <div className="name-div">
              <h1 style={{color: color}}>{name}</h1>
              <h2>{title}</h2>
            </div>
            <div className="additional-info-div">
              <div>
                <img src={numberImg} alt="Phone number" className="number" />
                <span>{number}</span>
              </div>
              <div>
                <img src={emailImg} alt="Email" className="email" />
                <span>{email}</span>
              </div>
              <div>
                <img src={locationImg} alt="Location" className="location" />
                <span>{location}</span>
              </div>
              { linkedin !== '' ? (
                <div>
                  <img src={linkedinImg} alt="LinkedIn" className="linkedin" />
                  <span>{linkedin}</span>
                </div>
                ) : false }
              { github !== '' ? (
                <div>
                  <img src={githubImg} alt="Github" className="github" />
                  <span>{github}</span>
                </div>
              ) : false }
            </div>
            <hr style={{backgroundColor: color}} />
          </header>
          <div className="work-exp-preview">
            <h3>Work experience</h3>
            <hr style={{backgroundColor: color}} />
          </div>
          <div className="education-preview">
            <h3>Education</h3>
            <hr style={{backgroundColor: color}} />
          </div>
        </div>
      </div>
    );
  };
};

export default Preview;