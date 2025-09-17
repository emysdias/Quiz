export interface QuizInfo {
  title: string;
  questionCount: number;
  timeLimit: number;
  players: number;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  quizInfo: QuizInfo;
  questions: Question[];
  onAnswer: (questionId: number, answerIndex: number) => void;
  currentQuestionIndex: number;
}