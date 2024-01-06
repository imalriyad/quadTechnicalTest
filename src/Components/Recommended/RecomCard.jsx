/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "../sliderstyle.css";
import { useContext, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FoodContext } from "../../Context/ContextProvider";


const RecomCard = () => {
  const { foods, updateItem } = useContext(FoodContext);
  let displayedFoods;

  if (!updateItem || updateItem.length === 0) {
    displayedFoods = foods;
  } else {
    displayedFoods = updateItem;
  }
  const isRecommended = displayedFoods?.filter(item => item.IsRecommended === true)

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

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevious = () => {
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
        <h1 onClick={handlePrevious}>
          <IoIosArrowBack className="md:text-3xl text-lg  cursor-pointer " />
        </h1>
        <div onClick={handleNextSlide}>
          <IoIosArrowForward className="md:text-3xl text-lg cursor-pointer" />
        </div>
      </div>
      <Slider className="h-max" ref={sliderRef} {...settings}>
        {isRecommended?.map((item) => (
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

export default RecomCard;
