import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Hero = () => {
  const imgData = [
    {
      url: 'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_640.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/03/28/20/32/food-3270461_1280.jpg',
    },
  ];

  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      setSlider((prevSlider) => (prevSlider === imgData.length - 1 ? 0 : prevSlider + 1));
    }, 4000);

    return () => clearInterval(sliderClear);
  }, [imgData.length]);

  return (
    <>
      <div className="">
        <div className="w-[90%] mx-auto h-[80vh] my-5">
          {imgData.map((item, i) => (
            <div key={i} className={`${slider === i ? 'block' : 'hidden'}`}>
              <img src={item.url} alt="" className="w-full h-[80vh] rounded-[18px] object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto h-[80vh] absolute bottom-[3.6rem] left-0 opacity-40"></div>
      <div className="absolute w-full text-[20px] md:text-[30px] top-[50%] flex justify-center text-center text-white font-semibold">
        <p className="text-[white]">Welcome to the world of Testy & Fresh food</p>
      </div>
      <div className="flex justify-between w-full px-12 text-white absolute top-[50%]">
        <FaAngleLeft onClick={handleMinus} size={30} className="cursor-pointer text-[gray]" />
        <FaAngleRight onClick={handlePlus} size={30} className="cursor-pointer text-[gray]" />
      </div>
    </>
  );
};

export default Hero;
