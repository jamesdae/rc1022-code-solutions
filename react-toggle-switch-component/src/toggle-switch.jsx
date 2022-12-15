import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    if (this.state.isOn) {
      return (
        <div className="flex centereditems">
          <label className="switch">
            <input type="checkbox" className="check" onClick={this.handleClick} />
            <span className="slider"></span>
          </label>
          <p>On</p>
        </div>
      );
    } else {
      return (
        <div className="flex centereditems">
          <label className="switch">
            <input type="checkbox" className="check" onClick={this.handleClick} />
            <span className="slider"></span>
          </label>
          <p>Off</p>
        </div>
      );
    }
  }
}
