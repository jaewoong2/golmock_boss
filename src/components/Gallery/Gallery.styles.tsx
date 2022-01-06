import styled from "@emotion/styled";

const GalleryStyle = {
  Container: styled.div<{ column: number; itemHeight: string }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .items-container {
      width: 80%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .item {
      width: ${({ column }) => `${Math.floor(100 / column)}%`};
      height: ${({ itemHeight }) => itemHeight};

      border-radius: 5px;
      background-color: #00000090;
      margin: 5px 10px 0px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
};

export default GalleryStyle;
