import { createContext } from "react";

interface ProductContextType {
  distanceValue: string;
  setDistanceValue: (value: string) => void;
  openPanel: boolean;
  setOpenPanel: (value: boolean) => void;
  orderNum: string; // Add this property
  setOrderNum: (value: string) => void; // Add this property
}

const ProductContext = createContext<ProductContextType>({
  distanceValue: "",
  setDistanceValue: () => {},
  openPanel: false,
  setOpenPanel: () => {},
  orderNum: "",
  setOrderNum: () => {},
});

export default ProductContext;
