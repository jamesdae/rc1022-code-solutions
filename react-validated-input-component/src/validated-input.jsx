import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  rightOrWrong() {
    if (this.state.password.length >= 8) {
      return 'centered flex fa-solid fa-check';
    } else {
      return 'centered flex red fa-solid fa-x';
    }
  }

  requirements() {
    if (this.state.password.length < 1) {
      return 'A password is required.';
    } else if (this.state.password.length < 8) {
      return 'Your passsword is too short.';
    }
  }

  render() {
    return (
      <form className='flex'>
        <label className='flex column'>
          Password
          <input type="password" value={this.state.password} onChange={this.handlePassword} className="input" />
          <p className='red'>{this.requirements()}</p>
        </label>
        <i className={this.rightOrWrong()}></i>
      </form>
    );
  }
}
