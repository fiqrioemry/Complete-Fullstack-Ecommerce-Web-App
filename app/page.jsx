import Recommend from "@/components/home/Recommend";
import Categories from "@/components/home/Categories";

const Home = () => {
  return (
    <main className="page-wrapper">
      <Categories />
      <Recommend />
    </main>
  );
};

export default Home;
