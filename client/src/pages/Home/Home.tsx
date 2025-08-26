import { StartCard } from "@/components";

const Home = () => {
  const onStartQuiz = () => {
    console.log("worked");
  };
  return (
    <section className="bg-green">
      <StartCard onStartQuiz={onStartQuiz} />
    </section>
  );
};

export default Home;
