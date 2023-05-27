import { useContext, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "rc-slider/assets/index.css";
import { HiOutlineUser, HiOutlineLocationMarker } from "react-icons/hi";
import { MdPayment, MdOutlineStickyNote2, MdSecurity } from "react-icons/md";

interface ProfileSideBarProps {
    pageNumber: number;
}

const ProfileSideBar: NextPage<ProfileSideBarProps> = ({ ...props }) => {

  return (
  <div className="flex flex-col gap-4">
    <Link href={"/consumer/profile/"}>
        <div className= {`flex gap-4 items-center border-l-[3px] px-3 cursor-pointer ${props.pageNumber == 1 ? "border-[#00B5DE] text-[#00B5DE]" : "border-[#ffffff]" }`}> 
            <HiOutlineUser color={`${props.pageNumber == 1 ? "#00B5DE" : "" }`} fontSize={20}/>
            <p className="text-[16px] font-medium">My Details</p>
        </div>
    </Link>
    <Link href={"/consumer/profile/orders"}>
        <div className={`flex gap-4 items-center border-l-[3px] px-3 cursor-pointer ${props.pageNumber == 2 ? "border-[#00B5DE] text-[#00B5DE]" : "border-[#ffffff]" }`}> 
            <MdOutlineStickyNote2 color={`${props.pageNumber == 2 ? "#00B5DE" : "" }`} fontSize={20}/>
            <p className="text-[16px] font-medium ">My Orders</p>
        </div>
    </Link>
    <Link href={"/consumer/profile/addresses"}>

    <div className={`flex gap-4 items-center border-l-[3px] px-3 cursor-pointer ${props.pageNumber == 3 ? "border-[#00B5DE] text-[#00B5DE]" : "border-[#ffffff]" }`}> 
        <HiOutlineLocationMarker color={`${props.pageNumber == 3 ? "#00B5DE" : "" }`} fontSize={20}/>
        <p className="text-[16px] font-medium">Addresses</p>
    </div>
    </Link>
    <Link href={"/consumer/profile/payments"}>
        <div className={`flex gap-4 items-center border-l-[3px] px-3 cursor-pointer ${props.pageNumber == 4 ? "border-[#00B5DE] text-[#00B5DE]" : "border-[#ffffff]" }`}> 
            <MdPayment color={`${props.pageNumber == 4 ? "#00B5DE" : "" }`} fontSize={20}/>
            <p className="text-[16px] font-medium">Payments</p>
        </div>
    </Link>
    <Link href={"/consumer/profile/"}>
        <div className={`flex gap-4 items-center border-l-[3px] px-3 cursor-pointer ${props.pageNumber == 5 ? "border-[#00B5DE] text-[#00B5DE]" : "border-[#ffffff]" }`}> 
            <MdSecurity color={`${props.pageNumber == 5 ? "#00B5DE" : "" }`} fontSize={20}/>
            <p className="text-[16px] font-medium">Login & Security</p>
        </div>
    </Link>
  </div>
    
  );
};

export default ProfileSideBar;
