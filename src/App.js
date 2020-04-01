import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    value1: this.generateRandomNumber(100),
    value2: this.generateRandomNumber(100),
    value3: this.generateRandomNumber(100),
    proposedAnswer: 0,
    numQuestions: 0,
    numCorrect: 0
  }

  componentDidMount() {
    this.setState({
      proposedAnswer: this.newProposedAnswer()
    })
  }

  generateRandomNumber(n) {
    return Math.floor(Math.random() * n)
  }

  newProposedAnswer = () => {
      return (
        this.generateRandomNumber(3) + 
        this.state.value1 + this.state.value2 + this.state.value3
      )
  }

  checkStatement = (answer) => {
    let realAnswer = this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer
    
    this.setState((currentState) => ({
      value1: this.generateRandomNumber(100),
      value2: this.generateRandomNumber(100),
      value3: this.generateRandomNumber(100),
      proposedAnswer: this.newProposedAnswer(),
      numQuestions: currentState.numQuestions + 1,
      numCorrect: currentState.numCorrect + (realAnswer === answer ? 1 : 0)
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkStatement(true)}>True</button>
          <button onClick={() => this.checkStatement(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
