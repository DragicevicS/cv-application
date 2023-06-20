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

class WorkExperience extends Component {
  render() {
    const { workExp, onInputChange, onDeleteForm } = this.props;

    return (
      <div className="work-exp-container">
        <form className="work-exp">
        <input
            type="text"
            id="job"
            placeholder="Job title"
            value={workExp.job || ''}
            onChange={(e) => onInputChange(e, workExp.id)}
            required
          />
          <input
            type="text"
            id="company"
            placeholder="Company name"
            value={workExp.company || ''}
            onChange={(e) => onInputChange(e, workExp.id)}
            required
          />
          <input
            type="text"
            id="from"
            placeholder="From (e.g. 06.2021)"
            value={workExp.from || ''}
            onChange={(e) => onInputChange(e, workExp.id)}
            required
          />
          <input
            type="text"
            id="to"
            placeholder="To (e.g. 03.2023 or Present)"
            value={workExp.to || ''}
            onChange={(e) => onInputChange(e, workExp.id)}
            required
          />
          <textarea
            id="jobDescription"
            maxLength={"300"}
            rows={"3"}
            placeholder="Job description (max. 300 characters)"
            value={workExp.jobDescription || ''}
            onChange={(e) => onInputChange(e, workExp.id)}
            required
          />
        </form>
        <button  type="button" onClick={() => onDeleteForm(workExp.id)}>Delete</button>
      </div>
    );
  };
};

class Education extends Component {
  render() {
    const { education, onInputChange, onDeleteForm } = this.props;

    return (
      <div className="education-container">
        <form className="education">
          <input
            type="text"
            id="degree"
            placeholder="Degree"
            value={education.degree || ''}
            onChange={(e) => onInputChange(e, education.id)}
            required
          />
          <input
            type="text"
            id="institution"
            placeholder="Institution name"
            value={education.institution || ''}
            onChange={(e) => onInputChange(e, education.id)}
            required
          />
          <input
            type="text"
            id="eduFrom"
            placeholder="From (e.g. 2015.)"
            value={education.eduFrom || ''}
            onChange={(e) => onInputChange(e, education.id)}
            required
          />
          <input
            type="text"
            id="eduTo"
            placeholder="To (e.g. 2020. or Present)"
            value={education.eduTo || ''}
            onChange={(e) => onInputChange(e, education.id)}
            required
          />
          <textarea
            id="eduDescription"
            maxLength={"300"}
            rows={"3"}
            placeholder="Education description (max. 300 characters)"
            value={education.eduDescription || ''}
            onChange={(e) => onInputChange(e, education.id)}
            required
          />
        </form>
        <button type="button" onClick={() => onDeleteForm(education.id)}>Delete</button>
      </div>
    );
  }
}

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
    const {
      formData,
      onInputChange,
      onFileChange,
      onWorkExpInputChange,
      onAddForm,
      onDeleteForm,
      onEducationInputChange,
      onAddEducationForm,
      onDeleteEducationForm,
    } = this.props;

    return (
      <div>
        <h2>Editor</h2>
        <div className="editor-container">
          <PersonalInfo
            handleInputChange={onInputChange}
            handleFileChange={onFileChange}
          />
          <br /><hr /><br />
          <h3>Work Experience</h3>
          {formData.workExperience.map((workExp) => (
            <WorkExperience
              key={workExp.id}
              workExp={workExp}
              onInputChange={onWorkExpInputChange}
              onDeleteForm={onDeleteForm}
            />
          ))}
          <br />
          <button type="button" onClick={onAddForm}>Add</button>
          <br /><hr /><br />
          <h3>Education</h3>
          {formData.education.map((education) => (
            <Education
              key={education.id}
              education={education}
              onInputChange={onEducationInputChange}
              onDeleteForm={onDeleteEducationForm}
            />
          ))}
          <br />
          <button type="button" onClick={onAddEducationForm}>Add</button>
          <br /><hr /><br />
          <ColorPicker handleInputChange={onInputChange} />
        </div>
      </div>
    );
  };
};

export default Editor;