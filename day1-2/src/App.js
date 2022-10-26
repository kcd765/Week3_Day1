import React, { Component } from 'react';
import Form from './Form/Form'
import Modal from './Modal/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentNum: "",
      display: false,
      msg: ""
    }
  }

  displayModal = (msg) => {
    this.setState({
      msg,
      display: true
    })
  }

  hideModal = () => {
    this.setState({
      display: false
    })
  }

  newNumber = (num) => {
    this.setState({
      currentNum: num
    })
  }

  render() {
    return (
      <div>
        <Form newNumber={this.newNumber} data={this.state.currentNum} display={this.displayModal} />
        {this.state.display && <Modal hideModal={this.hideModal} display={this.state.display} msg={this.state.msg} />}
      </div>
    );
  }
}

export default App;