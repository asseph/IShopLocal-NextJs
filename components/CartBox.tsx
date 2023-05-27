import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DeliveryLocation from "./DeliveryLocation";
import PickupLocation from "./PickupLocation";
import { BsTrash3 } from "react-icons/bs";

const searchResult = {
  total: 786,
  countAreas: 7,
  distance: 2.32323,
};

interface CartBoxProps {
  id: string;
  icons: string;
  pricing: string;
  size: string;
  comment: string;
  flag:boolean;
}

const CartBox: NextPage<CartBoxProps> = ({ ...props }) => {
  return (
    <div className="flex font-sfui w-full border-2 rounded-[12px] shadow-xl p-5">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-2">
          <Image
            src={`/icons/Ellipse.svg`}
            alt={`Nike`}
            className=""
            width={50}
            height={50}
          />
          <div className="flex flex-col justify-center">
            <p className="text-iB font-semibold text-[20px] leading-none">
              Nike
            </p>
            <p className="text-iB font-medium text-[14px]">Antwerp Area</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full pl-5 pr-20">
          <BsTrash3 fontSize={25} color="#E54335" />
          <div className="flex items-center bg-[#F8F8F8] rounded-lg px-5 justify-center w-[100px] h-[100px]">
            <Image
              src={`/img/${props.icons}`}
              alt={`Nike`}
              className=""
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-iB font-medium text-[14px] w-[40%]"> {props.comment}</p>
          <div className="flex gap-2 place-items-end">
            <p className="text-iB font-semibold text-[23px] leading-none">
              {`$${props.pricing}`}
            </p>
            <p className="text-cB font-semibold text-[14px] leading-none">
              &#215; 2
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-cB font-semibold text-[14px]"> Size:</p>
            <p className="text-iB font-semibold text-[16px]">
              {`$${props.pricing}`}
            </p>
          </div>
        </div>
      </div>
      { props.flag ? <DeliveryLocation />: <PickupLocation/>}
    </div>
  );
};

export default CartBox;
