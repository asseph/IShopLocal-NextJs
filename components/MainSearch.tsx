import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const MainSearch: NextPage = () => {
  return (
    <div className="flex rounded-lg border-[1px] border-cB divide-x justify-between h-[50px]">
      <div className="flex justify-between items-center gap-4 px-[15px] py-[18px] cursor-pointer">
        <Image
          src="/icons/category.svg"
          alt="Category"
          width={20}
          height={20}
        />
        <p className="text-white">Category</p>
        <Image
          src="/icons/arrowdown.svg"
          alt="Category"
          width={12}
          height={6}
        />
      </div>
      <div className="p-2 bg-sB flex">
        <input
          className="font-sfui w-full text-[16px] text-white font-medium outline-0 bg-sB ml-5"
          type="text"
          placeholder="Search by Category..."
        />
        <Image src="/icons/Search.svg" alt="Category" width={20} height={20} />
      </div>
      <div className="flex justify-between items-center gap-4 px-[15px] py-[18px] cursor-pointer">
        <Image
          src="/icons/Location.svg"
          alt="Category"
          width={20}
          height={20}
        />
        <p className="text-white">Location</p>
      </div>
      <div className="flex justify-between items-center gap-4 px-[15px] py-[18px] cursor-pointer">
        <Image
          src="/icons/store-01.svg"
          alt="Category"
          width={20}
          height={20}
        />
        <p className="text-white">Store</p>
      </div>
    </div>
  );
};

export default MainSearch;
