import styled from "@emotion/styled";

type containerType = { width: string; height: string };

const ImageContainerStyle = {
  Container: styled.div<containerType>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    position: relative;
    user-select: none;

    .left-btn {
      font-size: ${({ theme }) => theme.size.font.large};
      position: absolute;
      bottom: 20%;
      left: -50px;
      top: 50%;
      color: ${({ theme }) => theme.color.third};
      cursor: pointer;
      user-select: none;
      height: fit-content;

      &::after {
        content: "<";
        font-size: ${({ theme }) => theme.size.font.large};
        position: absolute;
        bottom: 20%;
        left: 11px;
        top: 0;
        color: ${({ theme }) => theme.color.forth};
        cursor: pointer;
        user-select: none;
        height: fit-content;
      }
    }
  `,

  Image: styled.img`
    width: inherit;
    height: inherit;
    max-width: 100%;
    max-height: 900px;

    user-select: none;
  `,

  Caption: styled.div<{ fontSize: string }>`
    position: absolute;
    font-size: ${(props) => props.fontSize};
    bottom: 20%;
    left: 50%;
    color: ${({ theme }) => theme.color.priamry};
    transform: translateX(-50%);
    user-select: none;
  `,
};

export default ImageContainerStyle;
