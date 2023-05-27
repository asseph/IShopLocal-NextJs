import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsTrash3 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";


const searchResult = {
  total: 786,
  countAreas: 7,
  distance: 2.32323,
};

const PickupLocation: NextPage = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-4 w-[50%]">
      <p className="text-[#00B5DE] font-semibold text-[23px]">
        Choose a pickup Location
      </p>
      <div className=" pl-5 flex flex-col gap-5">
        <p className=" font-semibold text-[20px]">IShop Reserve</p>
        <div className="flex items-center gap-5">
          <input
            type="radio"
            name="option"
            value={1}
            className="w-[20px] h-[20px]"
          />
          <label className="text-[16x] font-sfui font-light ">
            <span className=" font-semibold text-[16x]">{`$180`}</span>
            <span className=" text-[16x]">{` ship Secure your Pickup for 3 days`}</span>
          </label>
        </div>
        <div className="flex items-center gap-5">
          <input
            type="radio"
            name="option"
            value={1}
            className="w-[20px] h-[20px]"
          />
          <label className="text-[16x] font-sfui font-light ">
            <span className=" font-semibold text-[16x]">{`$100`}</span>
            <span className=" text-[16x]">{` Pickup Today`}</span>
          </label>
        </div>
        <div className="flex gap-5 pl-10 flex-col">
          <div className="flex gap-4"> <GoLocation fontSize={25}/><p className="font-normal text-[16x]">48 AiFillClockCircle Street, Dublin 1</p> </div>
          <p className="text-[#00B5DE] font-semibold text-[16x] cursor-pointer">{` Get Direction`}</p>
        </div>
      </div>
    </div>
  );
};

export default PickupLocation;
