import { useState, useContext } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductContext from "../context/ProductContext";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineDollarCircle, AiOutlineStar } from "react-icons/ai";
import { TfiPackage } from "react-icons/tfi";
import { TbBus } from "react-icons/tb";
import { BsBoxArrowDownLeft } from "react-icons/bs";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface ProfileOrderBoxProps {
  id: string;
  price: number;
  items: number;
  state: number;
  dDateTime: string;
}

const ProfileOrderBox: NextPage<ProfileOrderBoxProps> = ({ ...props }) => {

  const { orderNum, setOrderNum } = useContext(ProductContext);

  return (
    <div className="flex w-full gap-4 font-sfui justify-between pt-3 cursor-pointer" onClick={()=>{setOrderNum(`${props.id},${props.state}`)}}>
      <div className=" flex flex-col gap-2">
        <p className=" text-[#00B5DE] font-semibold text-[16px]">{`ID# ${props.id}`}</p>
        <p className=" text-black font-semibold text-[16px]">{`USD $${props.price}`}</p>
        <p className=" text-[#A7A9AC] font-semibold text-[14px]">{`${props.items} Items`}</p>
      </div>
      {props.state < 5 ? (
        <div className=" flex flex-col gap-3 items-end">
          <div className="flex gap-3" >
            {props.state == 1 ?  <AiOutlineDollarCircle fontSize={20} color="#00B5DE"/> : props.state == 2 ? <TfiPackage fontSize={20} color="#00B5DE"/> : props.state == 3 ? <TbBus fontSize={25} color="#00B5DE"/> : props.state == 4 ? <BsBoxArrowDownLeft fontSize={20} color="#00B5DE"/> : <AiOutlineStar fontSize={20} color="#00B5DE"/>}
            <p className=" text-[#00B5DE] font-semibold text-[16px]">In Progress</p>
          </div>
          <Slider
            range
            dots
            step={20}
            defaultValue={[0, props.state * 20]}
          />
          
        </div>
      ) : (
        <div className=" flex flex-col gap-3 items-end">
          <div className="flex gap-3">
            <GiCheckMark fontSize={18} className="text-greyB" />
            <p className="text-greyB font-medium text-[16px]">Delivered</p>
          </div>
          <p className=" text-iB font-semibold text-[14px]">{`${props.dDateTime}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileOrderBox;
