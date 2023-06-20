import React, { Component } from 'react';

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

export default ColorPicker;