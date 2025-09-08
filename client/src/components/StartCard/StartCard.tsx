import React from "react";
import type { StartQuizProps } from "./types";

const StartQuiz: React.FC<StartQuizProps> = ({ quizInfo, onStartQuiz }) => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        General Knowledge Quiz
      </h2>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Questions</span>
          <span className="font-semibold">{quizInfo?.questionCount}</span>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Time limit</span>
            <span className="font-semibold">{quizInfo?.timeLimit}:00</span>
          </div>
        </div>
      </div>

      <button
        onClick={onStartQuiz}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        Start Quiz
      </button>
    </section>
  );
};

export default StartQuiz;
