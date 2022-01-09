import styled from "@emotion/styled";
const BannerStyle = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,

  Bar: styled.div<{
    width: string;
    height: string;
    backgroundColor: string;
  }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ theme }) => theme.color.fontBlack};
    font-weight: 600;
    font-family: "Nanum Gothic", sans-serif;
    margin-bottom: 10px;
  `,
};

export default BannerStyle;
