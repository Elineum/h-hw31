import React from "react";
import questionsData from "../../mockDatas/questionsData.js";
import "./Question.scss";

export const Question = () => {
  return (
    <div className="questions">
      <ol className="questions__list">
        {questionsData.map((pair, index) => (
          <li className="questions__item" key={index}>
            <ul className="questions__pair">
              <li>
                <b>Question: </b>
                {pair.question}
              </li>
              <li>
                <b>Answer: </b>
                {pair.answer}
              </li>
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};
