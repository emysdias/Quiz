interface QuizInfo {
  title: string;
  questionCount: number;
  timeLimit: number;
}

export interface StartQuizProps {
  quizInfo: QuizInfo;
  onStartQuiz: () => void;
}