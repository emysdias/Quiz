import { StartCard, LeaderBoard, Header } from "@/components";

const Home = () => {
  const onStartQuiz = () => {
    console.log("Quiz iniciado");
  };

  const quizInfo = {
    title: "General Knowledge Quiz",
    questionCount: 10,
    timeLimit: 10,
    players: 1,
  };

  const userInfo = [
    { id: 1, name: "Thiago", score: 100 },
    { id: 2, name: "Emily", score: 200 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

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
