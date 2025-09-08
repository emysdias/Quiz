import { StartCard, LeaderBoard } from "@/components";

const Home = () => {
  const onStartQuiz = () => {
    console.log("worked");
  };
  const quizInfo = {
    title: "General Knowledge Quiz",
    questionCount: 10,
    timeLimit: 10,
    players: 1,
  };

  const userInfo = [
    {
      id: 1,
      name: "Thiago",
      score: 100,
    },
    {
      id: 2,
      name: "Emily",
      score: 200,
    },
  ];
  return (
    <section className="flex justify-between p-12">
      <div className="flex flex-col w-full">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Lobby
        </h1>
        <StartCard onStartQuiz={onStartQuiz} quizInfo={quizInfo} />
      </div>
      <LeaderBoard userInfo={userInfo} />
    </section>
  );
};

export default Home;
