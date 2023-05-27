import type { NextPage } from "next";
import { useState, useCallback, useContext } from "react";
import Image from "next/image";
import ProductContext from "../context/ProductContext";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


interface ProductDescProps {
  id: string;
  icons: string;
  brand: string;
  pricing: string;
  rating: string;
  comment: string;
  likes: string;
  local: string;
}

const ProductDesc: NextPage<ProductDescProps> = ({ ...props }) => {
  const iconArray = Array(Math.round(parseInt(props.rating))).fill(0);
  const sizeArray = Array(4).fill(0);
  const [scaleValue, setScalValue] = useState(1);  
  const { openPanel, setOpenPanel  } = useContext(ProductContext);

  const handlePlus = useCallback(() => {
    setScalValue((prevScaleValue) => prevScaleValue + 1);
  }, []);
  const handleMinus = useCallback(() => {
    if (scaleValue > 1) setScalValue((prevScaleValue) => prevScaleValue - 1);
  }, [scaleValue]);

  return (
    <div className="flex flex-col w-full gap-3 p-2 font-sfui">
      <div className="flex gap-5">
        <Image
          src="/icons/Ellipse.svg"
          alt="Nike"
          className=""
          width={50}
          height={30}
        />
        <div className="flex flex-col font-sfui justify-center text-[#000000]">
          <p className="font-semibold text-[20px]"> Nike </p>
          <p className="font-medium text-[14px]">Antwerp Area</p>
        </div>
      </div>
      <p className=" text-[32px] text-iB font-semibold">{`${props.comment}`}</p>
      <div className="flex gap-2 items-center">
        <p className="text-[18px] font-medium">{`${props.rating}`}</p>
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
        <p className="text-[18px] font-medium">{`${props.likes}`}</p>{" "}
      </div>
      <div className="flex place-items-end gap-4">
        <p className=" font-semibold text-[32px] leading-none">{`$${`90.89`}`}</p>
        <p className=" font-medium text-[20px] text-cB leading-none">{`$${`90.89`}`}</p>
      </div>
      <div className="flex flex-col gap-4 pt-5">
        <p className="text-[20px] font-semibold">Shoes Size</p>
        <div className="flex gap-4">
          {iconArray.map((_, index) => (
            <div
              key={index}
              className="p-4 border-2 border-cB rounded-lg transition duration-0 cursor-pointer hover:bg-[#00B5DE] hover:duration-150 hover:text-white hover:border-[#00B5DE]">
              <p className="text-[20px]">{42 + 2 * index}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-5">
        <div className="flex gap-4">
          <div className="py-4 px-8 border-2 border-cB rounded-lg flex gap-7 items-center">
            <AiOutlineMinus
              fontSize={20}
              className=" hover:text-[#00B5DE] cursor-pointer"
              onClick={handleMinus}
            />
            <p className="text-[25px] leading-none">{scaleValue}</p>
            <AiOutlinePlus
              fontSize={20}
              className=" hover:text-[#00B5DE] cursor-pointer"
              onClick={handlePlus}
            />
          </div>
          <div className="py-4 px-8 border-2 border-[#00B5DE] rounded-lg cursor-pointer bg-white text-[#00B5DE] hover:text-white hover:border-[#00B5DE] hover:bg-[#00B5DE]">
            <p className="text-[20px]"> Buy now</p>
          </div>
          {/* <Link href={"/consumer/products"}> */}
            <div className="flex justify-center items-center py-4 px-5 border-2 border-[#00B5DE] rounded-lg transition duration-0 cursor-pointer hover:bg-[hsl(191,100%,44%)] hover:text-white hover:duration-150 gap-3 text-[#00B5DE]" onClick={() => {setOpenPanel(true)}}>
              <AiOutlineShoppingCart fontSize={25} />
              <p className="font-sfui font-medium text-[20px] hover:text-white">
                Add to Cart
              </p>
            </div>
          {/* </Link> */}
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-3">
        <p className="text-[16px] font-medium">Total Price</p>
        <p className="text-[32px] font-bold leading-none">$90.89</p>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>About Item</Tab>
            <Tab>Reviews</Tab>
          </TabList>
          <TabPanel>
            <div className="pt-4 pb-14 flex flex-col gap-4">
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Brand:</p>
                    <p className=" text-iB">Nike</p>
                  </div>
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Category:</p>
                    <p className=" text-iB">Shoes</p>
                  </div>
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Condition:</p>
                    <p className=" text-iB">New</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Color:</p>
                    <p className=" text-iB">Red Black</p>
                  </div>
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Material:</p>
                    <p className=" text-iB">Lather</p>
                  </div>
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Weight:</p>
                    <p className=" text-iB">{`${700}g`}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-black gap-1" >
                <p className=" font-semibold text-[20px]">Description</p>
                <p className=" text-[#2A353D] text-[16px] font-light">
                  {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="pt-4 pb-14 flex flex-col gap-4">
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Brand:</p>
                    <p className=" text-iB">Nike</p>
                  </div>
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Category:</p>
                    <p className=" text-iB">Shoes</p>
                  </div>
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Condition:</p>
                    <p className=" text-iB">New</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Color:</p>
                    <p className=" text-iB">Red Black</p>
                  </div>
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Material:</p>
                    <p className=" text-iB">Lather</p>
                  </div>
                  <div className="flex gap-5 font-medium text-[16px]">
                    <p className="text-cB">Weight:</p>
                    <p className=" text-iB">{`${700}g`}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-black gap-1" >
                <p className=" font-semibold text-[20px]">Description</p>
                <p className=" text-[#2A353D] text-[16px] font-light">
                  {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                </p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDesc;
