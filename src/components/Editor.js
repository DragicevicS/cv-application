import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <form className="personal-input">
        <h3>Personal Information</h3>
        <input
          type="text"
          id="name"
          placeholder="First and last name"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="text"
          id="title"
          placeholder="Occupational title"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="number"
          id="number"
          placeholder="Phone number"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email address"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="text"
          id="location"
          placeholder="Location"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="text"
          id="linkedin"
          placeholder="LinkedIn profile (optional)"
          onChange={this.props.handleInputChange}
        />
        <input
          type="text"
          id="github"
          placeholder="Github profile (optional)"
          onChange={this.props.handleInputChange}
        />
        <textarea
          id="about"
          maxLength={"800"}
          rows={"5"}
          placeholder="About me (max. 800 characters)"
          onChange={this.props.handleInputChange}
          required
        />
        <label htmlFor="profile-pic">Choose a profile picture:</label>
        <input
          type="file"
          id="profile-pic"
          accept="image/png, image/jpeg"
          onChange={this.props.handleFileChange}
        />
      </form>
    );
  };
};

class WorkExperience extends Component {
  render() {
    return (
      <div className="work-exp-container">
        <h3>Work Experience</h3>
        <form className="work-exp">
          <input
            type="text"
            id="company"
            placeholder="Company name"
            onChange={this.props.handleInputChange}
            required
          />
          <input
            type="text"
            id="job"
            placeholder="Job title"
            onChange={this.props.handleInputChange}
            required
          />
          <input
            type="number"
            id="from"
            placeholder="From (e.g. 06/2021)"
            onChange={this.props.handleInputChange}
            required
          />
          <input
            type="number"
            id="to"
            placeholder="To (e.g. 06/2023 or Present)"
            onChange={this.props.handleInputChange}
            required
          />
          <textarea
            id="description"
            maxLength={"400"}
            rows={"3"}
            placeholder="Job description (max. 400 characters)"
            onChange={this.props.handleInputChange}
            required
          />
        </form>
        <div className="btn-div">
          <button type="button">Delete</button>
          <button type="button">&#10010;</button>
        </div>
      </div>
    );
  };
};

class ColorPicker extends Component {
  render() {
    return (
      <div className="color-picker-div">
        <label htmlFor="color">Color Picker:</label>
        <input
          type="color"
          id="color"
          value="#3370a8"
          onChange={this.props.handleInputChange}
        />
      </div>
    );
  };
};

export class Editor extends Component {
  render() {
    const { onInputChange, onFileChange } = this.props;

    return (
      <div>
        <h2>Editor</h2>
        <div className="editor-container">
          <PersonalInfo handleInputChange={onInputChange} handleFileChange={onFileChange} />
          <br /><hr /><br />
          <WorkExperience />
          <br /><hr /><br />
          <ColorPicker handleInputChange={onInputChange} />
        </div>
      </div>
    );
  };
};

export default Editor;