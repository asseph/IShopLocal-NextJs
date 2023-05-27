import type { NextPage } from "next";
import Image from "next/image";
import { MdPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiFillClockCircle } from "react-icons/ai";
import Carousel from "react-material-ui-carousel";

const items = [
  {
    name: "Slogan - Quote1",
    image: "slider1.png",
  },
  {
    name: "Slogan - Quote2",
    image: "slider2.png",
  },
  {
    name: "Slogan - Quote3",
    image: "slider3.png",
  },
  {
    name: "Slogan - Quote4",
    image: "slider4.png",
  },
];

const Item = (props: any) => {
  return (
    <div
      className={` bg-[url('/img/${props.item.image}')] bg-cover bg-center  min-h-[350px]`}></div>
  );
};

const StoreSlider: NextPage = () => {
  const iconArray = Array(5).fill(0);

  return (
    <div className="relative font-sfui">
      <div className=" absolute z-10 flex gap-4 top-[100px] left-[200px]">
          <Image
            src="/icons/Ellipse.svg"
            alt="Nike"
            className=""
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-2">
            <p className="text-[#00B5DE] text-[30px] font-semibold"> Nike Store </p>
            <div className="flex gap-2 items-center text-white">
              <p className="text-[18px] font-medium">{`4.8`}</p>
              <div className="flex gap-2">
                {iconArray.map((_, index) => (
                  <Image
                    src="/icons/Star.svg"
                    alt="Star"
                    className=""
                    width={20}
                    height={20}
                    key={index}
                  />
                ))}
              </div>
              <p className="text-[18px] font-medium">{`56,743`}</p>
            </div>
            <div className="flex gap-4"> <MdPhone fontSize={25} color="white"/><p className="text-white font-semibold text-[20px]">+31 (0) 43 432 23 42</p> </div>
            <div className="flex gap-4"> <GoLocation fontSize={25} color="white"/><p className="text-white font-semibold text-[20px]">48 AiFillClockCircle Street, Dublin 1</p> </div>
            <div className="flex gap-4 items-center"> <AiFillClockCircle fontSize={25} color="#FF3321"/><p className="text-[#FF3321] font-semibold text-[20px]">Closed. Open Tomorrow 10:00 AM</p> </div>
          </div>
      </div>
      <Carousel
        className="w-full min-h-[350px]"
        animation="slide"
        indicators={false}>
        <div
          className={` bg-[url('/img/slider1.png')] bg-cover bg-center  min-h-[350px]`}></div>
        <div
          className={` bg-[url('/img/slider2.png')] bg-cover bg-center  min-h-[350px]`}></div>
        <div
          className={` bg-[url('/img/slider3.png')] bg-cover bg-center  min-h-[350px]`}></div>
        <div
          className={` bg-[url('/img/slider4.png')] bg-cover bg-center  min-h-[350px]`}></div>
      </Carousel>
    </div>
  );
};

export default StoreSlider;
