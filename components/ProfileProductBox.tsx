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

interface ProfileProductBoxProps {
  id: string;
  icons: string;
  pricing: string;
  size: string;
  comment: string;
  numbers: number
}

const ProfileProductBox: NextPage<ProfileProductBoxProps> = ({ ...props }) => {
  return (
    <div className="flex font-sfui gap-2 pt-2 px-5 w-full justify-between">
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
      <div className=" flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <Image
            src={`/icons/Ellipse.svg`}
            alt={`Nike`}
            className=""
            width={35}
            height={35}
            style={{ objectFit: "contain" }}
          />
          <p className="text-iB font-semibold text-[14px]">Nike</p>
        </div>
        <p className="text-[16px] font-medium">{props.comment}</p>
        <div className="flex w-full justify-between">
          <div className="flex gap-2 font-medium text-[16px]">
            <p className="text-cB">Size:</p>
            <p className=" text-iB font-semibold">{`${props.size}`}</p>
          </div>
        </div>
        <p className="text-cB font-light text-[14px] leading-none">
           {`${props.numbers} Items`} 
        </p>
      </div>
      <div className="flex flex-col gap-2 items-end w-[17%]">
        <p className="text-cB font-medium text-[14px]">
          {`$ ${props.pricing}`}
        </p>
        <p className="text-[20px] font-semibold leading-none">{`$ ${props.pricing}`}</p>
      </div>
    </div>
  );
};

export default ProfileProductBox;
