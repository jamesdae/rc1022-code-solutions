import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!event.target.className.includes('menu')) {
      this.setState({ modalOn: !this.state.modalOn });
    }
  }

  menuBar() {
    return (
      <div className='cover' onClick={this.handleClick}>
        <div className='menu column fourths'>
          <h1 className='menu'>Menu</h1>
          <div className='column'>
            <a onClick={this.handleClick} className='clickable'>About</a>
            <a onClick={this.handleClick} className='clickable'>Get Started</a>
            <a onClick={this.handleClick} className='clickable'>Sign In</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.modalOn) {
      return <i className='fa-solid fa-bars clickable' onClick={this.handleClick}></i>;
    } else {
      return this.menuBar();
    }
  }
}
