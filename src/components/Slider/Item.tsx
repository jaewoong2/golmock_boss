import styled from "@emotion/styled";
import React from "react";
import Slick from "./Slick";

interface itemsProps {
  item: string;
  name: string;
}

const SliderItem = styled.div`
  width: 100%;
  height: auto;

  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

  &:focus {
    outline: none;
  }

  img {
    max-width: 90%;
    max-height: 500px;
    height: auto;
  }

  .item-description {
    position: absolute;
    bottom: 25%;
    color: ${({ theme }) => theme.color.fontWhite};
    background-color: #000000af;
    padding: 10px;
    font-family: "Nanum Gothic", sans-serif;
  }
`;

const items: itemsProps[] = [
  {
    item: "images/cafe.jpg",
    name: "이미지01",
  },
  {
    item: "images/bojung1.jpg",
    name: "이미지02",
  },
  {
    item: "images/bojung.jpg",
    name: "이미지03",
  },
];

const Item = () => {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.item} alt={item.name} />
          <div className="item-description">용인시 보정동 카페거리</div>
        </SliderItem>
      ))}
    </Slick>
  );
};

export default Item;
