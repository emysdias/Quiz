import { useEffect, useState } from "react";
import type { QuizModalProps, Question } from "./types";

const QuizModal = ({
  isOpen,
  onClose,
  quizInfo,
  questions,
  onAnswer,
  currentQuestionIndex,
}: QuizModalProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(quizInfo.timeLimit * 60);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
  }, [currentQuestionIndex]);

  const handleTimeUp = () => {
    if (selectedAnswer === null) {
      setShowResult(true);
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          onAnswer(currentQuestionIndex, -1);
          setSelectedAnswer(null);
          setShowResult(false);
        } else {
          onClose();
        }
      }, 2000);
    }
  };

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        onAnswer(currentQuestionIndex, index);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        onClose();
      }
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (!isOpen) return null;

  const currentQuestion: Question = questions[currentQuestionIndex];

  return (
    <section
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            Pergunta {currentQuestionIndex + 1} de {questions.length}
          </div>
          <div
            className={`text-lg font-semibold ${
              timeLeft < 30 ? "text-red-600" : "text-gray-800"
            }`}
          >
            ⏱️ {formatTime(timeLeft)}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border transition-colors
                ${
                  selectedAnswer === index
                    ? showResult
                      ? index === currentQuestion.correctAnswer
                        ? "bg-green-100 border-green-500 text-green-800"
                        : "bg-red-100 border-red-500 text-red-800"
                      : "bg-blue-100 border-blue-500 text-blue-800"
                    : "bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100"
                }
                ${
                  showResult && index === currentQuestion.correctAnswer
                    ? "bg-green-100 border-green-500 text-green-800"
                    : ""
                }
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div
            className={`p-4 rounded-lg mb-4 ${
              selectedAnswer === currentQuestion.correctAnswer
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {selectedAnswer === currentQuestion.correctAnswer
              ? "✅ Resposta correta!"
              : "❌ Resposta incorreta!"}
          </div>
        )}

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default QuizModal;
