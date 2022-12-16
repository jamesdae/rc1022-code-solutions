import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.playPause = this.playPause.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    const id = setInterval(() => {
      if (this.state.isOn) {
        this.setState({ count: this.state.count + 1 });
      } else {
        clearInterval(id);
      }
    }, 1000);
    this.setState({ isOn: !this.state.isOn });
  }

  playPause() {
    if (!this.state.isOn) {
      return 'fa-solid fa-play';
    } else {
      return 'fa-solid fa-pause';
    }
  }

  reset() {
    if (!this.state.isOn) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className='column'>
        <p onClick={this.reset} className="count column">{this.state.count}</p>
        <i className={this.playPause()} onClick={this.handleClick}></i>
      </div>
    );
  }
}
