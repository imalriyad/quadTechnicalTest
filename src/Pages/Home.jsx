import Populer from "../Components/Populer/Populer";
import Recommended from "../Components/Recommended/Recommended";
import Hero from "../Headers/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Populer></Populer>
      <Recommended></Recommended>
    </div>
  );
};

export default Home;
