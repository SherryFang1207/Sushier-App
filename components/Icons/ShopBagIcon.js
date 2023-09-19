"use client";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";
// ref: https://dev.to/ebereplenty/react-icons-tutorial-all-you-need-to-know-524

// const StyledIcon = styled(FaTwitter)`
//   color: blue;
//   font-size: 24px;
// `;

// function IconWithStyledComponents() {
//   return <StyledIcon />;
// }

// export default IconWithStyledComponents;
function ShopBagIcon({ color, size }) {
  return (
    <IconContext.Provider value={{ color: color, size: size }}>
      <AiOutlineShopping />
    </IconContext.Provider>
  );
}

export default ShopBagIcon;
