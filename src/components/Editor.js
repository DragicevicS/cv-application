import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import WorkExperience from './WorkExperience';
import Education from './Education';
import ColorPicker from './ColorPicker';

export class Editor extends Component {
  render() {
    const {
      formData,
      onInputChange,
      onFileChange,
      onWorkExpInputChange,
      onAddWorkExpForm,
      onDeleteWorkExpForm,
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
              onDeleteForm={onDeleteWorkExpForm}
            />
          ))}
          <br />
          <button type="button" onClick={onAddWorkExpForm}>Add</button>
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