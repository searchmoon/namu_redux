import React from "react";
import IceAndHot from "./IceAndHot";
import styled from "styled-components";

function Drink1Menu({ drink1Menu, setAddLists, setError }) {
  return (
    <>
      {drink1Menu.map((menu, index) => (
        <WrapDiv key={index}>
          <MenuDiv>{menu}</MenuDiv>
          <IceAndHot menu={menu} setAddLists={setAddLists} setError={setError}/>
        </WrapDiv>
      ))}
    </>
  );
}

  const MenuDiv = styled.div`
    width: 90px;
    text-align: center;
  `
  const WrapDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 290px;
    font-weight: 700;
    color: #444;
  `

export default Drink1Menu;
