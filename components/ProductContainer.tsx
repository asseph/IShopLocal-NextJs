import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface ProductsContainerProps {
  id: string;
  icons: string;
  brand: string;
  flag: boolean;
}

const ProductsContainer: NextPage<ProductsContainerProps> = ({ ...props }) => {
  return (
    <div className={`${props.flag ? 'h-[500px]' : 'h-[148px]  col-span-6 md:col-span-4 lg:col-span-3' } flex items-center bg-[#F8F8F8] rounded-lg p-2 justify-center`} >
      <Image
        src={`/img/${props.icons}`}
        alt={`${props.brand}`}
        className=""
        width={450}
        height={500}
        style={{objectFit: "contain" }}
      />
    </div>
  );
};

export default ProductsContainer;
