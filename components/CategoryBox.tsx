import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const CategoryBox: NextPage = ({ ...props }: any) => {
  return (
    <div className="w-[80%] pt-[145px] flex flex-col self-center gap-7">
      <div className="flex flex-col font-sfui text-dark">
        <p className=" font-semibold text-[30px] tracking-none self-center">
          Featured Categories
        </p>
        <p className="text-[30px] tracking-none self-center">
          The Freshest and most exciting offers
        </p>
      </div>
      <div className="w-full flex gap-4 font-sfui ">
        <div className="w-7/12 gap-4 flex flex-col">
          <div className="bg-[#F6C2AB] rounded-lg flex w-full items-center px-4">
            <Image
              src="/img/handbag.png"
              alt="Hand Bags"
              className=""
              width={228}
              height={254}
            />
            <div className="flex flex-col gap-4 p-7">
              <p className=" font-semibold text-dark text-[30px]">Hand Bags</p>
              <p className=" text-[14px] text-dark">
                Lorem Ipsum is simply dummy text of the printing an typesetting
                industry.
              </p>
              <Link href={"/consumer/products"}>
              <div className="flex justify-center items-center py-[16px] border-2 border-white rounded-lg transition duration-0 cursor-pointer hover:opacity-60 hover:duration-150 w-[180px]">
                <p className="font-sfui font-semibold text-[16px] text-white">
                  See All
                </p>
              </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#E9D9C8] rounded-lg flex w-full relative">
              <div className="flex flex-col gap-4 p-7">
                <p className=" font-semibold text-dark text-[30px]">Shoes</p>
                <p className=" text-[14px] text-dark w-[70%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href={"/consumer/products"}>
                  <div className="flex justify-center items-center py-[16px] border-2 border-white rounded-lg transition duration-0 cursor-pointer hover:opacity-60 hover:duration-150 w-[180px]">
                    <p className="font-sfui font-semibold text-[16px] text-white">
                      See All
                    </p>
                  </div>
                </Link>
              </div>
              <div className="absolute right-0 bottom-0">
                <Image
                  src="/img/shoes.png"
                  alt="Shoes"
                  className=""
                  width={160}
                  height={149}
                />
              </div>
            </div>
            <div className="bg-[#CEA67B] rounded-lg flex w-full relative">
              <div className="flex flex-col gap-4 p-7 mb-14">
                <p className=" font-semibold text-dark text-[30px]">Jewelry</p>
                <p className=" text-[14px] text-dark w-[70%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href={"/consumer/products"}>
                  <div className="flex justify-center items-center py-[16px] border-2 border-white rounded-lg transition duration-0 cursor-pointer hover:opacity-60 hover:duration-150 w-[180px]">
                    <p className="font-sfui font-semibold text-[16px] text-white">
                      See All
                    </p>
                  </div>
                </Link>
              </div>
              <div className="absolute right-0 bottom-0">
                <Image
                  src="/img/jewelry.png"
                  alt="Jewelry"
                  className=""
                  width={160}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 bg-[#4C483D] rounded-lg p-7 relative">
          <div className="flex flex-col gap-4">
            <p className=" font-semibold text-white text-[30px]">Dresses</p>
            <p className=" text-[14px] text-white w-[40%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href={"/consumer/products"}>
              <div className="flex justify-center items-center py-[16px] border border-white rounded-lg transition duration-0 cursor-pointer hover:opacity-60 hover:duration-150 w-[180px]">
                <p className="font-sfui font-semibold text-[16px] text-white">
                  See All
                </p>
              </div>
            </Link>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              src="/img/dress.png"
              alt="Dress"
              className=""
              width={440}
              height={440}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
