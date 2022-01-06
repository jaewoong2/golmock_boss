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
  img {
    max-width: 100%;
    max-height: 500px;
    height: auto;
  }
`;

const items: itemsProps[] = [
  {
    item: "images/cafe.jpg",
    name: "이미지01",
  },
  {
    item: "images/cafe.jpg",
    name: "이미지02",
  },
  {
    item: "images/cafe.jpg",
    name: "이미지03",
  },
];

const Item = () => {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.item} alt={item.name} />
        </SliderItem>
      ))}
    </Slick>
  );
};

export default Item;
