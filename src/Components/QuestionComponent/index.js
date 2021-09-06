import React, { Component } from "react";

export default class QuestionComponent extends Component {
  static ans;
  constructor(props) {
    super(props);
    this.state = { value: "", score: 0 };
  }
  performOperation = () => {
    let operand_1 = this.props.operand_1;
    let operand_2 = this.props.operand_2;
    switch (this.props.operation) {
      case "+": {
        return (this.ans = operand_1 + operand_2);
        break;
      }
      case "-": {
        return (this.ans = operand_1 - operand_2);
        break;
      }
      case "*": {
        return (this.ans = operand_1 * operand_2);
        break;
      }
      case "/": {
        return (this.ans = operand_1 / operand_2);
        break;
      }
      default:
        return this.ans;
    }
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleClick = (e) => {
    this.performOperation();
    this.props.answer(this.state.value, this.ans);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="question">
        {this.props.operand_1}
        {this.props.operation}
        {this.props.operand_2}
        <input
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}
