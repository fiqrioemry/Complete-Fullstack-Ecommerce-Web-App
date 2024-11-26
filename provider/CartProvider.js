import { useDispatch, useSelector } from "react-redux";
const { createContext, useState, useContext } = require("react");
import { addToCart, getCartItem } from "@/store/action/CartAction";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.product);
  const [cartItem, setCartItem] = useState({
    product_id: product.id,
    quantity: 0,
  });

  const handleIncrease = () => {
    const updatedQuantity = Math.min(cartItem.quantity + 1, product.stock);
    setCartItem((prevItem) => ({ ...prevItem, quantity: updatedQuantity }));
  };

  const handleDecrease = () => {
    const updatedQuantity = Math.max(cartItem.quantity - 1, 0);
    setCartItem((prevItem) => ({ ...prevItem, quantity: updatedQuantity }));
  };

  useEffect(() => {
    if (user) {
      dispatch(getCartItem(user.userId));
    }
  }, []);

  return (
    <CartContext.Provider value={{ handleIncrease, handleDecrease, cartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
