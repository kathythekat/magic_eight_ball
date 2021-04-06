function getRandomMsgIndex(answers) {
  return Math.floor(Math.random() * answers.length);
}

function getRandomMsg(answers) {
  const randomAnswerIndex = getRandomMsgIndex(answers);
  const randomMsg = answers[randomAnswerIndex].msg;
  const color = answers[randomAnswerIndex].color;
  return [randomMsg, color];
}

export {getRandomMsg, getRandomMsgIndex};