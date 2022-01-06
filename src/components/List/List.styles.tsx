import styled from "@emotion/styled";

const ListStyle = {
  Ul: styled.ul`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.color.forth};
    color: ${({ theme }) => theme.color.priamry};
    padding: 10px;
    z-index: 1;

    @media screen and (max-width: ${({ theme }) => theme.size.device.tablet}) {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
};

export default ListStyle;
