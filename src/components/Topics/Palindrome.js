import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      Palindrome: "",
    };
  }

  isPalindrome(userInput) {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");

    if (forwards === backwards) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }
  render() {
    return (
      <div className='puzzleBox palindromePB'>
        <h4>Palindrome</h4>
        <input
          className='inputLine'
          onChange={(e) => this.handleChange(e.target.val)}
        />
        <button
          className='confirmationButton'
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          Check
        </button>
        <span className='resultsBox'>Palindrome: {this.state.Palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
