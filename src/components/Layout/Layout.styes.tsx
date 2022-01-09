import styled from "@emotion/styled";

const LayoutStyle = {
  Main: styled.main`
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.color.background};
  `,
};

export default LayoutStyle;
