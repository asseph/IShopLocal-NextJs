import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";

interface OrderBoxProps {
  id: string;
  icons: string;
  pricing: string;
  size: string;
  comment: string;
}

const OrderBox: NextPage<OrderBoxProps> = ({ ...props }) => {
  const [scaleValue, setScalValue] = useState(1);

  const handlePlus = useCallback(() => {
    setScalValue((prevScaleValue) => prevScaleValue + 1);
  }, []);
  const handleMinus = useCallback(() => {
    if (scaleValue > 1) setScalValue((prevScaleValue) => prevScaleValue - 1);
  }, [scaleValue]);
  
  return (
    <div className="flex font-sfui gap-3 pt-2 px-5">
      <div className="flex items-center bg-[#F8F8F8] rounded-lg px-5 justify-center w-[180px]">
        <Image
          src={`/img/${props.icons}`}
          alt={`Nike`}
          className=""
          width={450}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className=" flex flex-col">
        <p className="text-[16px] font-medium">{props.comment}</p>
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold">{`$ ${props.pricing}`}</p>
          <div className="flex gap-3 items-center">
            <AiOutlineMinus
              fontSize={15}
              className=" hover:text-[#00B5DE] cursor-pointer"
              onClick={handleMinus}
            />
            <p className="text-[18px] leading-none">{scaleValue}</p>
            <AiOutlinePlus
              fontSize={15}
              className=" hover:text-[#00B5DE] cursor-pointer"
              onClick={handlePlus}
            />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-2 font-medium text-[14px]">
            <p className="text-cB">Brand:</p>
            <p className=" text-iB">Nike</p>
          </div>
          <p className="text-[#FF3321] cursor-pointer text-[14px]">Remove</p>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
