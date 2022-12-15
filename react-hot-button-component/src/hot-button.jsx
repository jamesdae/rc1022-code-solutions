import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    if (this.state.count < 3) {
      return <button onClick={this.handleClick} className="hot-button cold">Hot Button</button>;
    } else if (this.state.count < 6) {
      return <button onClick={this.handleClick} className="hot-button cool">Hot Button</button>;
    } else if (this.state.count < 9) {
      return <button onClick={this.handleClick} className="hot-button tepid">Hot Button</button>;
    } else if (this.state.count < 12) {
      return <button onClick={this.handleClick} className="hot-button warm">Hot Button</button>;
    } else if (this.state.count < 15) {
      return <button onClick={this.handleClick} className="hot-button hot">Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className="hot-button nuclear">Hot Button</button>;
    }
  }
}
