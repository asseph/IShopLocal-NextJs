import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import MainSearch from "../../../components/MainSearch";

const Header: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[90%]">
        <nav className="flex justify-end py-7 font-sfui text-[16px] leading-4 hover: opacity-100">
          <ul className="flex gap-10">
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
            <li>
              <Link href="/consumer/profile">My Account</Link>
            </li>
            <li>
              <Link href="#">Login / Register</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="pt-[24px] pb-[34px] bg-sB flex justify-center items-center hover: opacity-100">
        <Image
          src="/icons/favicon.svg"
          alt="ShopLoval"
          width={85}
          height={85}
        />
        <div className="ml-36">
          <MainSearch />
        </div>
        <Link href={"/consumer/wishlist"}>
          <div className="flex flex-col gap-2 items-center ml-24 cursor-pointer">
            <Image
              src="/icons/heart.svg"
              alt="ShopLoval"
              width={20}
              height={18}
            />
            <p className="text-white text-[16px]">Wishlist</p>
          </div>
        </Link>
        <Link href={"/consumer/cart"}>
          <div className="flex flex-col gap-2 items-center ml-10 cursor-pointer">
            <Image
              src="/icons/cart.svg"
              alt="ShopLoval"
              width={20}
              height={18}
            />
            <p className="text-white text-[16px]">Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
