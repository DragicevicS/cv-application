import React, { Component } from 'react';

export class Preview extends Component {
  render() {
    const { name, title, number, email, linkedin, github, location, about } = this.props;

    return (
      <div>
        <h2>Preview</h2>
        <div className="preview-container">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <span>{number}</span>
          <span>{email}</span>
          <span>{linkedin}</span>
          <span>{github}</span>
          <span>{location}</span>
          <p>{about}</p>
        </div>
      </div>
    );
  };
};

export default Preview;