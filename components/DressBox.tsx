import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const DressBox: NextPage = () => {
  return (
    <div className="w-[80%] pt-[123px] flex flex-col self-center gap-7">
      <div className="flex flex-col font-sfui text-dark">
        <p className=" font-semibold text-[30px] tracking-none self-center">
          By Category
        </p>
        <p className="text-[30px] tracking-none self-center">DRESSES</p>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-4 w-4/12">
          <div
            className={`flex bg-cover bg-center bg-[url('/img/wo1.png')] font-sfui rounded-lg relative h-[360px]`}>
            <div className="p-5 flex flex-col justify-between">
              <div className="flex items-center gap-4 ">
                <Image
                  src="/icons/Ellipse.svg"
                  alt="Nike"
                  className=""
                  width={50}
                  height={50}
                />
                <p className="text-white text-[23px] font-semibold">
                  Dress Name
                </p>
              </div>
              <div className="flex flex-col text-white">
                <p className="text-[16px]">Price</p>
                <p className="text-[25px]"> {`$ 50`}</p>
              </div>
            </div>
            <div className="absolute bg-[#00B5DE] rounded-tl-lg p-4 flex gap-3  justify-center items-center right-0 bottom-0 cursor-pointer">
              <p className="text-[14px] text-white">Add to Cart</p>
              <Image
                src="/icons/Cart.svg"
                alt="Cart"
                className=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div
            className={`flex bg-cover bg-center bg-[url('/img/wo2.png')] font-sfui rounded-lg relative h-[360px]`}>
            <div className="p-5 flex flex-col justify-between">
              <div className="flex items-center gap-4 ">
                <Image
                  src="/icons/Ellipse.svg"
                  alt="Nike"
                  className=""
                  width={50}
                  height={50}
                />
                <p className="text-white text-[23px] font-semibold">
                  Dress Name
                </p>
              </div>
              <div className="flex flex-col text-white">
                <p className="text-[16px]">Price</p>
                <p className="text-[25px]"> {`$ 50`}</p>
              </div>
            </div>
            <div className="absolute bg-[#00B5DE] rounded-tl-lg p-4 flex gap-3  justify-center items-center right-0 bottom-0 cursor-pointer ">
              <p className="text-[14px] text-white">Add to Cart</p>
              <Image
                src="/icons/Cart.svg"
                alt="Cart"
                className=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div
          className={`flex bg-cover bg-center bg-[url('/img/wo3.png')] font-sfui rounded-lg w-4/12 relative`}>
          <div className="p-5 flex flex-col justify-between">
            <div className="flex items-center gap-4 ">
              <Image
                src="/icons/Ellipse.svg"
                alt="Nike"
                className=""
                width={50}
                height={50}
              />
              <p className="text-white text-[23px] font-semibold">Dress Name</p>
            </div>
            <div className="flex flex-col text-white">
              <p className="text-[16px]">Price</p>
              <p className="text-[25px]"> {`$ 50`}</p>
            </div>
          </div>
          <div className="absolute bg-[#00B5DE] rounded-tl-lg p-4 flex gap-3  justify-center items-center right-0 bottom-0 cursor-pointer ">
            <p className="text-[14px] text-white">Add to Cart</p>
            <Image
              src="/icons/Cart.svg"
              alt="Cart"
              className=""
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-4/12">
          <div
            className={`flex bg-cover bg-center bg-[url('/img/wo4.png')] font-sfui rounded-lg relative h-[360px]`}>
            <div className="p-5 flex flex-col justify-between">
              <div className="flex items-center gap-4 ">
                <Image
                  src="/icons/Ellipse.svg"
                  alt="Nike"
                  className=""
                  width={50}
                  height={50}
                />
                <p className="text-white text-[23px] font-semibold">
                  Dress Name
                </p>
              </div>
              <div className="flex flex-col text-white">
                <p className="text-[16px]">Price</p>
                <p className="text-[25px]"> {`$ 50`}</p>
              </div>
            </div>
            <div className="absolute bg-[#00B5DE] rounded-tl-lg p-4 flex gap-3 justify-center items-center right-0 bottom-0">
              <p className="text-[14px] text-white">Add to Cart</p>
              <Image
                src="/icons/Cart.svg"
                alt="Cart"
                className=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div
            className={`flex bg-cover bg-center bg-origin-content  bg-[url('/img/wo5.png')] font-sfui rounded-lg relative h-[360px]`}>
            <div className="p-5 flex flex-col justify-between">
              <div className="flex items-center gap-4 ">
                <Image
                  src="/icons/Ellipse.svg"
                  alt="Nike"
                  className=""
                  width={50}
                  height={50}
                />
                <p className="text-white text-[23px] font-semibold">
                  Dress Name
                </p>
              </div>
              <div className="flex flex-col text-white">
                <p className="text-[16px]">Price</p>
                <p className="text-[25px]"> {`$ 50`}</p>
              </div>
            </div>
            <div className="absolute bg-[#00B5DE] rounded-tl-lg p-4 flex gap-3 justify-center items-center right-0 bottom-0">
              <p className="text-[14px] text-white">Add to Cart</p>
              <Image
                src="/icons/Cart.svg"
                alt="Cart"
                className=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressBox;
