import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductContext from "../../../context/ProductContext";
import Header from "../layout/header";
import Footer from "../layout/footer";
import ProductsBox from "../../../components/ProductsBox";
import ProductsContainer from "../../../components/ProductContainer";
import ProductDesc from "../../../components/ProductDesc";
import OrderBox from "../../../components/OrderBox";

const productList = [
  {
    id: "19029",
    icons: "nike-shoes-1.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19030",
    icons: "nike-shoes-2.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19031",
    icons: "nike-shoes-3.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19032",
    icons: "nike-shoes-4.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19033",
    icons: "nike-shoes-1.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19034",
    icons: "nike-shoes-2.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19035",
    icons: "nike-shoes-3.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
  {
    id: "19026",
    icons: "nike-shoes-4.png",
    brand: "Nike",
    pricing: "90.89",
    rating: "4.8",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
    likes: "56,743",
    local: "Antwerp Area",
  },
];

const OrderList = [
  {
    id: "19026",
    icons: "nike-shoes-1.png",
    pricing: "90.89",
    size: "43",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
  },
  {
    id: "19027",
    icons: "nike-shoes-4.png",
    pricing: "80.89",
    size: "46",
    comment: "Dr. Martens 1460 Women's Black Nappa 8 Eye Boot",
  },
];

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { openPanel, setOpenPanel } = useContext(ProductContext);

  return (
    <div className="flex flex-col justify-center w-full">
      <Header />
      <div className="flex w-full justify-center">
        <div className={`${ !openPanel ? 'px-[100px]':'px-[30px]' } flex flex-col self-center py-10 pb-20`}>
          <div className="w-full grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-12 lg:col-span-6 flex flex-col gap-4">
              <div className="w-full h-[500px]">
                <ProductsContainer
                  id={productList[1].id}
                  icons={productList[1].icons}
                  brand={productList[1].brand}
                  flag={true}
                />
              </div>
              <div className=" flex w-full h-[160px] gap-4">
                {productList.map((item, index) => {
                  if (index < 4) {
                    return (
                      <ProductsContainer
                        key={index}
                        id={item.id}
                        icons={item.icons}
                        brand={item.brand}
                        flag={false}
                      />
                    );
                  }
                })}
              </div>
              {/* Seller Information */}
              <div className="">
                <p className="text-[20px] font-semibold">Seller Information:</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-5">
                    <Image
                      src="/icons/Ellipse.svg"
                      alt="Nike"
                      className=""
                      width={100}
                      height={30}
                    />
                    <div className="flex flex-col font-sfui justify-center">
                      <p className="font-semibold text-[20px]"> Nike Store</p>
                      <p className="font-medium text-[#D9D9D9]">
                        {" "}
                        96.7% Positive Feedback{" "}
                      </p>
                    </div>
                  </div>
                  <Link href={"/consumer/store"}>
                    <div className="flex justify-center items-center py-2 px-5 border-2 border-[#00B5DE] rounded-lg transition duration-0 cursor-pointer hover:opacity-60 hover:duration-150 gap-3">
                      <Image
                        src="/icons/store-02.svg"
                        alt=""
                        className=""
                        width={20}
                        height={20}
                        style={{ objectFit: "contain" }}
                      />
                      <p className="font-sfui font-semibold text-[16px] text-[#00B5DE]">
                        Visit Store
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <ProductDesc
                id={productList[1].id}
                icons={productList[1].icons}
                brand={productList[1].brand}
                pricing={productList[1].pricing}
                rating={productList[1].rating}
                comment={productList[1].comment}
                likes={productList[1].likes}
                local={productList[1].local}
              />
            </div>
          </div>
          <div className="grid w-full gap-3 justify-between grid-cols-12">
            {productList.map((item, index) => {
              if (index < 4) {
                return (
                  <ProductsBox
                    key={index}
                    id={item.id}
                    icons={item.icons}
                    brand={item.brand}
                    pricing={item.pricing}
                    rating={item.rating}
                    comment={item.comment}
                    likes={item.likes}
                    local={item.local}
                  />
                );
              }
            })}
          </div>
        </div>
        {openPanel ? (
          <div className="flex flex-col p-2 items-center font-sfui gap-3 w-full">
            <p
              className=" 
             font-semibold text-[30px]">
              Cart
            </p>
            {OrderList.map((item, index) => (
              <OrderBox
                key={index}
                id={item.id}
                icons={item.icons}
                pricing={item.pricing}
                size={item.size}
                comment={item.comment}
              />
            ))}
            <div className="flex flex-col gap-3 w-full px-5 pt-10">
              <p className=" text-[18px] font-semibold">Price Details</p>
                <div className="w-full flex justify-between text-[14px]">
                  <p>SubTotal</p>
                  <p>$1000</p>
                </div>
                <div className="w-full flex justify-between text-[14px]">
                  <p>Discount</p>
                  <p>-90</p>
                </div>
                <div className="w-full flex justify-between text-[14px]">
                  <p>Tax</p>
                  <p>57</p>
                </div>
                <div className="w-full flex justify-between text-[14px]">
                  <p>Delivery</p>
                  <p>free</p>
                </div>
                <div className="w-full flex justify-between text-[14px]">
                  <p>Total</p>
                  <p>$1000</p>
                </div>
            </div>
            <div className=" flex w-full justify-between px-5 pt-4">
              <div className="py-2 px-5 rounded-lg cursor-pointer bg-cB hover:text-white hover:border-[#00B5DE] hover:bg-[#00B5DE]" onClick={() => {setOpenPanel(false)}}>
                <p className="text-[16px]">Cancel</p>
              </div>
              <div className=" py-2 px-5 border-2 border-[#00B5DE] rounded-lg cursor-pointer bg-white text-[#00B5DE] hover:text-white hover:border-[#00B5DE] hover:bg-[#00B5DE]" >
                <p className="text-[16px]">Delivery</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
  // return <div>Blog post: {slug}</div>;
};

export default ProductDetail;
