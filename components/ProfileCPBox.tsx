import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import "rc-slider/assets/index.css";

interface ProfileCPBoxProps {
    cardNumber: string,
    icons: string,
    type: string,
    cardDate: string
}

const ProfileCPBox: NextPage<ProfileCPBoxProps> = ({ ...props }) => {
  return (
    <div className="flex w-full gap-4 font-sfui items-center justify-between">
      <div className="flex gap-4 items-center">
           <div className="flex w-full gap-10 ">
            <Image
              src={`/icons/${props.icons}`}
              alt="Visa"
              className=""
              width={66}
              height={20}
            />
            <div className=" flex flex-col font-medium text-[14px]">
              <p className=" ">{`**** **** **** ${props.cardNumber}`}</p>
              <p className="">{`${props.type} Card`}</p>
            </div>
            <div className=" flex flex-col gap-5 font-medium text-[14px]">
              <p className=" ">{`${props.cardDate}`}</p>
            </div>
          </div>
      </div>
      <div className=" flex gap-4">
        <div className="flex justify-center py-[10px] px-[20px] border-2 border-cB rounded-lg transition duration-0 cursor-pointer text-iB bg-[#F8F8F8]  hover:bg-[hsl(191,100%,44%)] hover:text-white hover:duration-150 gap-3">
          <p className="font-sfui font-medium text-[14px]"> Changes</p>
        </div>
        <div className="flex justify-center py-[10px] px-[20px] border-2 border-cB rounded-lg transition duration-0 cursor-pointer text-[#FF3321] bg-[#F8F8F8]  hover:bg-[hsl(191,100%,44%)] hover:text-white hover:duration-150 gap-3 ">
          <p className="font-sfui font-medium text-[14px]"> Remove</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCPBox;
