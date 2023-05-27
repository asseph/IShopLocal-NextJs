import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";

const items = [
  {
    name: "Slogan - Quote1",
    description: "Frame1.png",
  },
  {
    name: "Slogan - Quote2",
    description: "Frame1.png",
  },
  {
    name: "Slogan - Quote3",
    description: "Frame1.png",
  },
  {
    name: "Slogan - Quote4",
    description: "Frame1.png",
  },
];

const Item = (props:any) =>
{
    return (
      <div className="bg-[url('/img/Frame1.png')] bg-cover bg-center  min-h-[500px]"></div>
    )
}

const IdItem = () =>
{
    return (
        <div className="w-[12px] h-[12px opacity-0">
        </div>
    )
}

const MainSlider: NextPage = () => {
  return (
    <div className="">
      <Carousel
        className="w-full min-h-[500px]"
        animation="slide"
        IndicatorIcon={<IdItem/>}
        indicatorIconButtonProps={{
          className:"w-[12px] h-[12px] m-1 rounded-full bg-[#54D4F1] opacity-100 "
      }}
        activeIndicatorIconButtonProps={{
            className:"w-[12px] h-[47px] m-1 rounded-lg opacity-100 bg-[#54D4F1] "
        }}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;
