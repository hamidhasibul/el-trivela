import { PRICE_TYPE } from "@prisma/client";
import React from "react";

interface Props {
  price: PRICE_TYPE;
}

const Price = ({ price }: Props) => {
  const renderPrice = () => {
    if (price === "REGULAR") {
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
  };
  return <p className="mr-3">{renderPrice()}</p>;
};

export default Price;
