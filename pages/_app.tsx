import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import ProductContext from "../context/ProductContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [distanceValue, setDistanceValue] = useState("");
  const [openPanel, setOpenPanel] = useState(Boolean);
  const [orderNum, setOrderNum] = useState("1233451,3");

  return (
    <ProductContext.Provider value={{ distanceValue, setDistanceValue, openPanel, setOpenPanel, orderNum, setOrderNum }}>
      <Component {...pageProps} />
    </ProductContext.Provider>
  );
}

export default MyApp;
