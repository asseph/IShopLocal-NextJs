import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer: NextPage = () => {
  return (
    <div className="w-full font-Roboto flex flex-col items-center bg-sB text-white pb-5">
      <div className="w-[80%] flex p-10 gap-20">
        <div className="w-[60%] flex justify-between">
          <div className="flex flex-col gap-5">
            <div className="pb-3">
              <p className=" font-semibold text-[18px]">Company</p>
            </div>
            <p className="opacity-60 cursor-pointer">About Us</p>
            <p className="opacity-60 cursor-pointer">Why Choose us</p>
            <p className="opacity-60 cursor-pointer">Pricing</p>
            <p className="opacity-60 cursor-pointer">Testimonial</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="pb-3">
              <p className=" font-semibold text-[18px]">Resources</p>
            </div>
            <p className="opacity-60 cursor-pointer">Privacy Policy</p>
            <p className="opacity-60 cursor-pointer">Terms and Condition</p>
            <p className="opacity-60 cursor-pointer">Blog</p>
            <p className="opacity-60 cursor-pointer">Contact Us</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="pb-3">
              <p className=" font-semiboldtext-[18px]">Product</p>
            </div>
            <p className="opacity-60 cursor-pointer">Project managment</p>
            <p className="opacity-60 cursor-pointer">Discord</p>
            <p className="opacity-60 cursor-pointer">Time tracker</p>
            <p className="opacity-60 cursor-pointer">Time schedule</p>
            <p className="opacity-60 cursor-pointer">Remote Collaboration</p>
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-5">
          <p className=" font-sfui font-medium text-[50px]">Site Title</p>
          <p className=" font-sfui font-semibold text-[16px]">
            Subscribe to our Newsletter
          </p>
          <div className="w-full rounded-lg p-2 bg-iB flex">
            <input
              className="font-sfui w-full text-[16px] text-white font-medium outline-0 bg-iB ml-5"
              type="text"
              placeholder="Enter your Email"
            />
            <Link href={"/"}>
              <div className="flex justify-center items-center py-[16px] px-12 rounded-lg bg-white transition duration-0 cursor-pointer hover:opacity-80 hover:duration-150 ">
                <p className="font-sfui font-medium text-[16px] text-[#1D2130]">
                  Subscribe
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-[90%] justify-between items-center">
        <div className="border-b-2 border-cB w-[30%]"></div>
        <p >Copyright @2023 </p>
        <div className="flex gap-6 opacity-50">
          <Image
            src="/icons/Facebook.svg"
            alt="Facebook"
            width={23}
            height={23}
            className="cursor-pointer"
          />
          <Image
            src="/icons/Twitter.svg"
            alt="Twitter"
            width={23}
            height={23}
            className="cursor-pointer"
          />
          <Image
            src="/icons/Instagram.svg"
            alt="Instagram"
            width={23}
            height={23}
            className="cursor-pointer"
          />
          <Image
            src="/icons/Linkedin.svg"
            alt="linkedin"
            width={23}
            height={23}
            className="cursor-pointer"
          />
        </div>
        <div className="border-b-2 border-cB w-[30%]"></div>
      </div>
    </div>
  );
};

export default Footer;
