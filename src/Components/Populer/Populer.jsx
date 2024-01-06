import SectionTitle from "../SectionTitle";
import PopulerCard from "./PopulerCard";

const Populer = () => {
  return (
    <div className="px-4 max-w-screen-xl"> 
      <SectionTitle title={"Populer"}></SectionTitle>
       <PopulerCard></PopulerCard>
    </div>
  );
};

export default Populer;
