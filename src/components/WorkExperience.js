import React, { Component } from 'react';

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

export default WorkExperience;
