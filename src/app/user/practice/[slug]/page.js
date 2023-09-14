"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import practice from "../../../../json/practice.json";

export default function Exams() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(practice[0].data[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionMark, setQuestionMark] = useState(practice[0].data);
  // const questionMark = practice[0].data;
  const questionData = practice[0];

  const goToQuestion = (i) => {
    setCurrentIndex(i);
    let lists = questionMark;
    lists[i].submit = lists[i].submit === "1" ? "1" : "2";
    setQuestionMark(lists);
    let current = questionMark[i];
    setCurrentQuestion(current);
  };

  const SubmitQuestion = (i) => {
    let lists = questionMark;
    lists[i].submit = "1";
    setQuestionMark(lists);

    if (i + 1 === questionMark.length) {
      setCurrentIndex(i);
    } else {
      let newIndex = i + 1;
      setCurrentIndex(newIndex);

      let current = questionMark[newIndex];
      setCurrentQuestion(current);
    }
  };

  const SkipQuestion = (i) => {
    let lists = questionMark;
    lists[i].submit = lists[i].submit === "1" ? "1" : "2";
    setQuestionMark(lists);

    if (i + 1 === questionMark.length) {
    } else {
      let newIndex = i + 1;
      setCurrentIndex(newIndex);

      let current = questionMark[newIndex];
      setCurrentQuestion(current);
    }
  };

  const SubmitFinalAnswer = () => {
    router.push("/user/practice/submit");
  }

  return (
    <div className="col-lg-12">
      <div className="row justify-content-center">
        <div className="col-lg-12 mb-3">
          <div className="card border-0 p-4">
            <h5>{questionData.name}</h5>
            <p className="mb-0">
              Language : {questionData.language} currentIndex : {currentIndex}{" "}
            </p>
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
              <p className="mb-0">{currentQuestion.question} </p>
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
                  <label className="form-check-label" htmlFor={ind}>
                    {itm.answer}
                  </label>
                </div>
              ))}
            </div>

            <div className="p-3">
              <button
                className="btn btn-outline-danger me-3"
                onClick={(e) => SubmitQuestion(currentIndex)}
              >
                Submit Answer
              </button>
              <button
                className="btn btn-outline-warning me-3"
                onClick={(e) => SkipQuestion(currentIndex)}
              >
                Skip Question
              </button>

              
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
                  <div
                    style={{ width: "20%" }}
                    className="d-grid mb-3"
                    key={index}
                  >
                    {item.submit === "0" ? (
                      <button
                        className="btn btn-secondary"
                        onClick={() => goToQuestion(index)}
                      >
                        {item.id}
                      </button>
                    ) : item.submit === "1" ? (
                      <button
                        className="btn btn-success"
                        onClick={() => goToQuestion(index)}
                      >
                        {item.id}
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => goToQuestion(index)}
                      >
                        {item.id}
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="float-right text-right">
                <button
                  className="btn btn-outline-danger me-3 "
                  onClick={SubmitFinalAnswer}
                >
                  Final Submit Answer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
