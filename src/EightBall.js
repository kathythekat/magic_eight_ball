import React, { useState } from "react";
import { getRandomMsg, getRandomMsgIndex } from "./helpers";

function EightBall(props) {
  const { answers } = props;
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Think of a Question");
  const [greenCount, setGreen] = useState(0);
  const [redCount, setRed] = useState(0);
  const [yellowCount, setYellow] = useState(0);

  function handleClick(evt) {
    evt.preventDefault();
    const [msg, color] = getRandomMsg(answers);
    getColor(color);
    setText(msg);
    setColor(color);
  }

  function getColor(color) {
    if (color === "green") {
      setGreen(greenCount + 1);
    } else if (color === "goldenrod") {
      setYellow(yellowCount + 1);
    } else if (color === "red") {
      setRed(redCount + 1);
    }
  }

  function resetEightBall(evt) {
    evt.preventDefault();
    setText("Think of a Question");
    setColor("black");
  }

  return (
    <div className="Eightball-container">
      <button
        className="Eightball"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <span className="Eightball-text">{text}</span>
      </button>
      <button className="Eightball-reset" onClick={resetEightBall}>
        Reset
      </button>
      <ul>
        <li>Red Color Count: {redCount}</li>
        <li>Yellow Color Count: {yellowCount}</li>
        <li>Green Color Count: {greenCount}</li>
      </ul>
    </div>
  );
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default EightBall;
