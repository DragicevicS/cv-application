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
          required
        />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Occupational title"
          required
        />
        <input
          type="number"
          id="number "
          name="number"
          placeholder="Phone number"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email adress"
          required
        />
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          placeholder="LinkedIn profile (optional)"
        />
        <input
          type="text"
          id="github"
          name="github"
          placeholder="Github profile (optional)"
          required
        />
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          required
        />
        <textarea
          id="about"
          name="about"
          maxLength={"500"}
          rows={"5"}
          placeholder="About me (max. 500)"
          required
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

export class Editor extends Component {
  render() {
    return (
      <div>
        <h2>Editor</h2>
        <div className="editor-container">
          <PersonalInfo />
          <br /><hr /><br />
          <WorkExperience />
        </div>
      </div>
    );
  };
};

export default Editor;