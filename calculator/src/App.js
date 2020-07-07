import React, { Component } from 'react';
import Button from './components/Buttons';
import Display from './components/Display';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    }
  }

    onClick = button => {

      if (button === "=") {
        this.calculate()
      }

      else if (button === "C") {
        this.reset()
      } else {
        this.setState({
          result: this.state.result + button
        })
      }
    };



    calculate = () => {
      var checkResult = ''
      if (this.state.result.includes('--')) {
        checkResult = this.state.result.replace('--', '+')
      }

      else {
        checkResult = this.state.result
      }

      try {
        this.setState({
          // eslint-disable-next-line
          result: (eval(checkResult) || "") + ""
        })
      } catch (e) {
        this.setState({
          result: "error"
        })

      }
    };

    reset = () => {
      this.setState({
        result: ""
      })
    };



    render() {
      return (
          <div className="calculator-body">
            <h1>Simple Calculator</h1>
            <Display result={this.state.result} />
            <Button onClick={this.onClick} />
          </div>
      );
    }
  }


export default App;