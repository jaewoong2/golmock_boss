import styled from "@emotion/styled";
import React from "react";
import ImageContainer from "./components/ImageContaienr";
import Layout from "./components/Layout";
import List from "./components/List";

const ImageWrapper = styled.div`
  width: 99%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
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
      <List
        listItems={[
          { value: "HOME" },
          { value: "소개" },
          { value: "안내사항" },
          { value: "골목대장" },
        ]}
      />
      <ImageWrapper>
        <ImageContainer
          caption="보정동 카페거리"
          fontSize="42px"
          width="auto"
          height="97%"
          src="images/cafe.jpg"
          alt="보정동"
        />
      </ImageWrapper>
    </Layout>
  );
};

export default App;
