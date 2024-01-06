const Hero = () => {
  return (
    <div className="md:py-20">
      <div className="hero max-w-screen-xl md:px-4 px-0 md:bg-[#F99F1C] rounded-3xl xl:h-[350px]">
        <div className="hero-content flex-col-reverse md:flex-row-reverse pb-0">
          <img
            src="https://i.postimg.cc/s2FZ1gtV/Image1.png"
            className="md:max-w-sm z-0 md:bg-transparent bg-[#FD9460] rounded-lg"
          />
          <div className="md:p-10 p-2">
            <h1 className="xl:text-5xl lg:text-4xl text-2xl md:text-[#FFF3EC] capitalize font-medium ">Deliver Food to your door step</h1>
            <p className="py-4 xl:text-xl lg:text-base text-sm md:text-[#f3dbb7] text-gray-600">
            Authentic Food, Quick Service, Fast Delivery
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
