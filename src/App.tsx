import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Gallery from "./components/Gallery";
import ImageContainer from "./components/ImageContaienr";
import Info from "./components/Info";
import Layout from "./components/Layout";
import List from "./components/List";
import Item from "./components/Slider/Item";
import { theme } from "./styles/theme";

const MapContainer = styled.div`
  width: 60%;
  margin-left: 20%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;

  &::after {
    position: absolute;
    width: 100%;
    height: 3px;
    top: -30px;
    left: 5px;
    content: "찾아가기";
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: 600;
    color: #81ca9df6;
  }

  &::before {
    position: absolute;
    width: 97%;
    height: 3px;
    top: -10px;
    left: 2%;
    content: "";
    background-color: #81ca9d9d;
    font-family: ${({ theme }) => theme.font.primary};
    border-radius: 50px;
  }

  @media screen and (max-width: ${({ theme }) => theme.size.device.tablet}) {
    width: 90%;
    margin-left: 3%;
  }
`;

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
      <Item />
      <Info />
      <Card
        cards={[
          { title: "신세계 백화점", image: "images/sinsae.jpg" },
          { title: "수지레스피아", image: "images/suji.jpg" },
          { title: "죽전패션타운", image: "images/fasion.jpg" },
          { title: "X파크", image: "images/xpark.jpg" },
        ]}
      />

      <MapContainer className="map-container">
        <img alt="지도" src="images/jido.jpg" />
      </MapContainer>
    </Layout>
  );
};

export default App;
