import React, { Component } from "react";
import "./Scoreboard.css";

export default class Scoreboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="total-score">Score-- {this.props.score}</div>
          Correct Answers
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Question</th>
                <th>Response</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data
                .filter((val) => val.Response === val.Answer)
                .map((val,index) => (
                  <tr>
                    <td key={index}>{val.no}</td>
                    <td key={index}>{val.Question}</td>
                    <td key={index}>{val.Response}</td>
                    <td key={index}>{val.Answer}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          Incorrect Answers
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Question</th>
                <th>Response</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data
                .filter((val) => val.Response !== val.Answer)
                .map((val,index) => (
                  <tr>
                    <td key={index}>{val.no}</td>
                    <td key={index}>{val.Question}</td>
                    <td key={index}>{val.Response}</td>
                    <td key={index}>{val.Answer}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
