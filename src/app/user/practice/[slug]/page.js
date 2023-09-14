"use client";
import { useState, useEffect } from "react";
import practice from "../../../../json/practice.json";

export default function Exams() {
  const [currentQuestion, setCurrentQuestion] = useState(practice[0].data[0]);
  const questionMark = practice[0].data;
  const questionData = practice[0];

  const goToQuestion = (e) => {
    let current = questionMark.find((elem) => elem.id === e);
    setCurrentQuestion(current);
  };

  const SubmitQuestion = (e) => {
    let id = parseInt(e)+1
    let current = questionMark.find((elem) => elem.id === id.toString());
    setCurrentQuestion(current);
  }

  return (
    <div className="col-lg-12">
      <div className="row justify-content-center">
        <div className="col-lg-12 mb-3">
          <div className="card border-0 p-4">
            <h5>{questionData.name}</h5>
            <p className="mb-0">Language : {questionData.language} </p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card border-0 p-4">
            <p className="mb-3">
              Question No: <span className="fw-bold">{currentQuestion.id}</span>{" "}
              | Max Mark(s): {questionData.marks}
            </p>
            <p className="mb-2">
              Multiple Choice
              {currentQuestion.answerType === "S" ? (
                <span>(Select 1 out of 4 options, for the question below)</span>
              ) : (
                <span> (There may be more than 1 corrent answer)</span>
              )}
            </p>
            <div className="p-3 bg-success card text-white">
              <p>{currentQuestion.question} </p>
            </div>

            <div className="p-3">
              {currentQuestion.answer.map((itm, ind) => (
              <div className="form-check mb-3" key={ind}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="answer"
                  id={ind}
                />
                <label className="form-check-label" for={ind}>
                  {itm.answer}
                </label>
              </div>
              ))}
            </div>

            <div className="p-3">
              <button className="btn btn-outline-danger me-3" onClick={(e) => SubmitQuestion(currentQuestion.id)} >Submit Question</button>
              <button className="btn btn-outline-warning me-3" onClick={(e) => SkipQuestion(currentQuestion.id)} >Skip Question</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0">
            <div className="card-header bg-white">
              <p>Question Panel</p>
            </div>
            <div className="card-body p-4">
              <div className="row">
                {questionMark.map((item, index) => (
                  <div style={{ width: "20%" }} className="d-grid mb-3">
                    <button
                      className="btn btn-secondary"
                      onClick={() => goToQuestion(item.id)}
                    >
                      {item.id}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
