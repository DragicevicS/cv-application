import React, { Component } from 'react';

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
  };
};

export default Education;