import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

interface ProductsBoxProps {
  id: string;
  icons: string;
  brand: string;
  pricing: string;
  rating: string;
  comment: string;
  likes: string;
  local: string;
}

const ProductsBox: NextPage<ProductsBoxProps> = ({ ...props }) => {
  const iconArray = Array(Math.round(parseInt(props.rating))).fill(0);
  const [colorVal, setColorVal] = useState(false);

  return (
    <div className="flex font-sfui flex-col col-span-6 md:col-span-4 lg:col-span-3 ">
      <div className="px-5 pt-5 bg-[#F8F8F8] rounded-t-lg">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <Image
                src="/icons/Ellipse.svg"
                alt="Nike"
                className=""
                width={50}
                height={50}
              />
              <div className="flex flex-col text-iB ">
                <p className="text-[20px] font-semibold">{`${props.brand}`}</p>
                <p className="text-[14px] font-medium">{`${props.local}`}</p>
              </div>
            </div>
            <AiFillHeart fontSize={24} color={`${colorVal ? "#ffffff" : "#FF3321"}`} style={{cursor: "pointer"}} onClick={()=>{setColorVal(!colorVal)}}/>
          </div>
          <Link href={`/consumer/products/${props.id}`}>
            <div className=" h-[230px] flex items-center">
              <Image
                src={`/img/${props.icons}`}
                alt={`${props.brand}`}
                className=""
                width={260}
                height={230}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-2">
        <p className=" font-medium text-[16px] text-iB">{`${props.comment}`}</p>
        <div className="flex gap-2 items-center">
          <p>{`${props.rating}`}</p>
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
          <p>{`${props.likes}`}</p>{" "}
        </div>
        <div className="flex place-items-end gap-4">
          <p className=" font-semibold text-[22px] leading-none">{`$${`90.89`}`}</p>
          <p className=" font-medium text-[14px] text-cB leading-none">{`$${`90.89`}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsBox;
