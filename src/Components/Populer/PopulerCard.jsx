/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "../sliderstyle.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Modal from "../AddFood/Modal";
import { useContext, useRef } from "react";
import { FoodContext } from "../../Context/ContextProvider";

const PopulerCard = () => {
  const { foods, updateItem } = useContext(FoodContext);
  // const storedFoods = localStorage.getItem("foods");
  // const parsedFoods = JSON.parse(storedFoods);

  let displayedFoods;

  if (!updateItem || updateItem.length === 0) {
    displayedFoods = foods;
  } else {
    displayedFoods = updateItem;
  }

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex pb-4 items-center justify-end">
        <h1
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="text-[#FC6011] font-medium cursor-pointer"
        >
          Add More
        </h1>
        <Modal></Modal>
        <h1 onClick={handlePrev}>
          <IoIosArrowBack className="md:text-3xl text-lg cursor-pointer" />
        </h1>
        <h1 onClick={handleNext}>
          <IoIosArrowForward className="md:text-3xl text-lg cursor-pointer" />
        </h1>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {displayedFoods?.map((item) => (
          <div key={item?.Id} className="custom-slide-wrapper">
            <img
              src={item?.ImageUrl}
              alt=""
              className="rounded-xl md:w-[250px] xl:h-[300px] md:h-[250px] w-[150px] cursor-pointer h-[150px] object-cover"
            />
            <h1 className="text-center md:text-base text-sm">{item?.Name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopulerCard;
