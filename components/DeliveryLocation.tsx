import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsTrash3 } from "react-icons/bs";

const searchResult = {
  total: 786,
  countAreas: 7,
  distance: 2.32323,
};

const DeliveryLocation: NextPage = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-4 w-[50%]">
      <p className="text-[#00B5DE] font-semibold text-[23px]">
        Choose a Delivery Location
      </p>
      <div className=" pl-5 flex flex-col gap-5">
        <p className=" font-semibold text-[20px]">IShop Instant</p>
        <div className="flex items-center gap-5">
          <input
            type="radio"
            name="option"
            value={1}
            className="w-[20px] h-[20px]"
          />
          <label className="text-[16x] font-sfui font-light ">
            <span className=" font-semibold text-[16x]">{`$180`}</span>
            <span className="text-[16x]">{` ship from store (10 to 15 mintes)`}</span>
            <span className="text-[#00B5DE] font-semibold text-[16x]">{` get it by 12:32)`}</span>
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
            <span className="text-[16x]">{` ship from Online (2 to 3 business days)`}</span>
            <span className="text-[#00B5DE] font-semibold text-[16x]">{` get it by Friday 7 April)`}</span>
          </label>
        </div>
        <div className="flex items-center gap-5">
          <input type="radio" name="option" value={1} />
          <label className="text-[16x] font-sfui font-light ">
            <span className=" font-semibold text-[16x]">{`$120`}</span>
            <span className="text-[16x]">{` Priority Delivery`}</span>
            <span className="text-[#00B5DE] font-semibold text-[16x]">{` get it tomorrow 6 April`}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocation;
