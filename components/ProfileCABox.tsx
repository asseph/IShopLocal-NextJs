import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import "rc-slider/assets/index.css";

interface ProfileCABoxProps {
  i: number;
  address: string;
}

const ProfileCABox: NextPage<ProfileCABoxProps> = ({ ...props }) => {
  return (
    <div className="flex w-full gap-4 font-sfui items-center justify-between">
      <div className="flex gap-4 items-center">
      <div className=" rounded-[50%] bg-[#F8F8F8] px-3 py-1 self-center">{props.i}</div>
      <p className=" font-normal text-[14px] text-iB">{props.address} </p>
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

export default ProfileCABox;
