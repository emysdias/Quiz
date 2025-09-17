import { useState } from "react";
import { StartCard, LeaderBoard, Header, QuizModal } from "@/components";

export const mockQuestions = [
  {
    id: 1,
    question: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Quantos planetas existem em nosso sistema solar?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Quem pintou a Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Qual é o maior oceano da Terra?",
    options: [
      "Oceano Atlântico",
      "Oceano Índico",
      "Oceano Ártico",
      "Oceano Pacífico",
    ],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "Em que ano começou a Segunda Guerra Mundial?",
    options: ["1939", "1941", "1945", "1914"],
    correctAnswer: 0,
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const onStartQuiz = () => {
    setIsModalOpen(true);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answerIndex;
    setUserAnswers(newAnswers);

    if (questionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(questionIndex + 1);
    } else {
      setIsModalOpen(false);
    }
  };

  const userInfo = [
    { id: 1, name: "Thiago", score: 100 },
    { id: 2, name: "Emily", score: 200 },
  ];

  const quizInfo = {
    title: "General Knowledge Quiz",
    questionCount: mockQuestions.length,
    timeLimit: 10,
    players: 1,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <QuizModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        quizInfo={quizInfo}
        questions={mockQuestions}
        onAnswer={handleAnswer}
        currentQuestionIndex={currentQuestionIndex}
      />

      <main className="flex-1 bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
        <div className="container mx-auto max-w-6xl py-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Quiz Lobby
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prepare-se para testar seus conhecimentos no nosso quiz de
              conhecimento geral. Veja a classificação dos melhores jogadores e
              desafie-se!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <article className="flex-1">
              <StartCard onStartQuiz={onStartQuiz} quizInfo={quizInfo} />
            </article>

            <aside
              aria-labelledby="leaderboard-heading"
              className="w-full lg:max-w-md"
            >
              <LeaderBoard userInfo={userInfo} />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
