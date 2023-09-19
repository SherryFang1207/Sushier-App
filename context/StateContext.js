"use client";
import React from "react";
import { useContext, createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
// Manage user session usingh local storage: 1:45:20
const Context = createContext();

const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [userEmail, setUserEmail] = useState("");

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    setTotalPrice((prevTotalPrice) => {
      let newTotalPrice = prevTotalPrice + product.price * quantity;
      newTotalPrice = Math.round(newTotalPrice * 100) / 100;
      return newTotalPrice;
    });
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        //Different:
        return cartProduct;
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems((prevCartItems) => [...prevCartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
    // setQty(1);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) {
        return 1;
      }
      return prevQty - 1;
    });
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    setTotalPrice((prevTotalPrice) => {
      let newTotalPrice =
        prevTotalPrice - foundProduct.price * foundProduct.quantity;
      newTotalPrice = Math.round(newTotalPrice * 100) / 100;
      return newTotalPrice;
    });
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);

    if (value === "inc") {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: foundProduct.quantity + 1 };
          }
          return item;
        })
      );
      setTotalPrice((prevTotalPrice) => {
        let newTotalPrice = prevTotalPrice + foundProduct.price * 1;
        newTotalPrice = Math.round(newTotalPrice * 100) / 100;
        return newTotalPrice;
      });
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity - 1 >= 1) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: foundProduct.quantity - 1 };
            }
            return item;
          })
        );
        setTotalPrice((prevTotalPrice) => {
          let newTotalPrice = prevTotalPrice - foundProduct.price * 1;
          newTotalPrice = Math.round(newTotalPrice * 100) / 100;
          return newTotalPrice;
        });
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        setQty,
        toggleCartItemQuantity,
        onRemove,
        setUserEmail,
        userEmail,
      }}
    >
      <Toaster />
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

export default StateContext;
