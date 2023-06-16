import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <form className="personal-input">
        <h3>Personal Information</h3>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First and last name"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Occupational title"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="number"
          id="number"
          name="number"
          placeholder="Phone number"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          onChange={this.props.handleInputChange}
          required
        />
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          placeholder="LinkedIn profile (optional)"
          onChange={this.props.handleInputChange}
        />
        <input
          type="text"
          id="github"
          name="github"
          placeholder="Github profile (optional)"
          onChange={this.props.handleInputChange}
        />
        <textarea
          id="about"
          name="about"
          maxLength={"600"}
          rows={"5"}
          placeholder="About me (max. 600)"
          onChange={this.props.handleInputChange}
          required
        />
        <label htmlFor="profile-pic">Choose a profile picture:</label>
        <input
          type="file"
          id="profile-pic"
          name="profile-pic"
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
      <div>
        <h3>Work Experience</h3>
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