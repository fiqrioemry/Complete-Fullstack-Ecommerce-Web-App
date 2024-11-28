import React from "react";
import CheckboxElement from "./CheckboxElement";

const ShoppingCartCard = ({
  active,
  item,
  children,
  handleCheck,
  checkoutId,
}) => {
  return (
    <div className="flex flex-row w-full space-x-4 " key={item.id}>
      {active && (
        <CheckboxElement
          handleCheck={handleCheck}
          checked={checkoutId.includes(item.id)}
        />
      )}

      <Image
        width={130}
        height={130}
        src={item.images}
        className="borders"
        alt={`Image of ${item.name}`}
      />
      <div className="w-full">
        <h2>{item.name}</h2>
        <div>
          {item.quantity} x Rp. {item.price}
        </div>
        {children}
      </div>
    </div>
  );
};

export default ShoppingCartCard;
