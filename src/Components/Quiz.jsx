import { act, useCallback, useRef, useState } from "react";

import QUESTIONS from "../questions.js";
import completeImg from "../assets/quiz-complete.png";
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevA) => {
      return [...prevA, selectedAnswer];
    });
  },
  []);
  const handleSkipQuestion = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );
  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <Summary userAnswers={userAnswers}/>
    );
  }
  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipQuestion}
      />
    </div>
  );
}
