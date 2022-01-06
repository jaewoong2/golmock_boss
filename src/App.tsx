import styled from "@emotion/styled";
import React from "react";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import ImageContainer from "./components/ImageContaienr";
import Layout from "./components/Layout";
import List from "./components/List";
import Item from "./components/Slider/Item";
import { theme } from "./styles/theme";

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* &::after {
    left: 50%;
    top: 50%;
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);

    width: 90%;
    height: 450px;
    border: 7px solid ${({ theme }) => theme.color.priamry};
    border-radius: ${({ theme }) => theme.border.radius};
  } */

  /* &::before {
    content: "용인시 \\A 보정동 카페거리";
    left: 10%;
    top: 40%;
    display: inline-block;
    white-space: pre;
    line-height: 70px;
    font-size: ${({ theme }) => theme.size.font.title};
    color: ${({ theme }) => theme.color.fontWhite};
    position: absolute;
  } */

  @media screen and (max-width: ${({ theme }) => theme.size.device.mobile}) {
    width: 100%;
    /* &::before {
      font-size: ${({ theme }) => theme.size.font.large};
    } */
  }
`;

const App = () => {
  return (
    <Layout>
      <Banner
        width="100%"
        height="30px"
        backgroundColor={theme.color.listBackground}
      >
        용인시 스마트도시 골목대장
      </Banner>
      <Gallery
        itemHeight="450px"
        items={[
          { value: "asdasd" },
          { value: "asdasd" },
          { value: "asdasd" },
          { value: "asdasd" },
          { value: "asdasd" },
          { value: "asdasd" },
          { value: "asdasd" },
        ]}
        column={5}
      />

      {/* <ImageWrapper>
        <ImageContainer
          caption="보정동 카페거리"
          fontSize="42px"
          width="auto"
          height="100%"
          src="images/cafe.jpg"
          alt="보정동"
        />
      </ImageWrapper> */}
    </Layout>
  );
};

export default App;
