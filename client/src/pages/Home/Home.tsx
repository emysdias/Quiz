import { StartCard } from "@/components";

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
  return (
    <section className="bg-green">
      <StartCard onStartQuiz={onStartQuiz} quizInfo={quizInfo} />
    </section>
  );
};

export default Home;
