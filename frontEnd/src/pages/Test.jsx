import React, { useState } from "react";
import "./Test.css";

const questions = [
  {
    question: "How would you describe your overall mood lately?",
    options: ["Very Happy", "Happy", "Neutral", "Sad", "Very Sad"],
  },
  {
    question: "Do you often feel sad or hopeless?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    question: "How frequently do you experience excessive worry?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    question: "Do you often feel restless or on edge?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    question:
      "On a scale of 1 to 10, how stressed do you feel on a typical day?",
    options: [
      "Not Stressed at All",
      "Slightly Stressed",
      "Somewhat Stressed",
      "Moderately Stressed",
      "Quite Stressed",
      "Very Stressed",
      "Extremely Stressed",
      "Can't Function Due to Stress",
      "Feeling Overwhelmed",
      "Experiencing Burnout",
    ],
  },
  {
    question:
      "Are there specific situations that consistently trigger stress for you?",
    options: ["Yes", "No"],
  },
  {
    question: "How would you rate the quality of your relationships?",
    options: ["Very Good", "Good", "Neutral", "Not Good", "Very Bad"],
  },
  {
    question: "Do you have a support system you can rely on?",
    options: ["Yes", "No"],
  },
  {
    question:
      "How do you typically cope with stress or difficult emotions? (Select all that apply)",
    options: [
      "Healthy coping mechanisms (e.g., exercise, relaxation techniques)",
      "Unhealthy coping mechanisms (e.g., substance abuse, social isolation)",
    ],
  },
  {
    question: "Are there activities that bring you a sense of peace or joy?",
    options: ["Yes", "No"],
  },
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [totalMarks, setTotalMarks] = useState(null);

  const handleAnswerChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateTotalMarks();
    }
  };

  const calculateTotalMarks = async () => {
    let total = 0;
    answers.forEach((answer) => {
      total += answer;
    });
    setTotalMarks(total);
    console.log("Total Marks:", total);
    let severity = 0;
    if (total >= 0 && total <= 14) {
      severity = 1;
    } else if (total > 15 && total <= 29) {
      severity = 2;
    } else if (total > 30 && total <= 43) {
      severity = 3;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/test",
        severity
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {totalMarks === null ? (
        <div className="question">
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, optionIndex) => (
            <span
              key={optionIndex}
              onClick={() => handleAnswerChange(optionIndex)}
              className={`option ${
                answers[currentQuestion] === optionIndex ? "selected" : ""
              }`}
            >
              {option}
            </span>
          ))}
          <button onClick={handleNext} className="next-button">
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      ) : (
        <div>
          <p className="total-marks">Thank you for taking the test</p>
        </div>
      )}
    </div>
  );
};

export default Test;
