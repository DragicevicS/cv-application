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
          maxLength={"1000"}
          rows={"5"}
          placeholder="About me (max. 1000 characters)"
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

export default PersonalInfo;