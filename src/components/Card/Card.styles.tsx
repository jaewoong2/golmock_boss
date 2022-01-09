import styled from "@emotion/styled";

const CardStyles = {
  Container: styled.div`
    width: 60%;
    margin-left: 20%;
    margin-top: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    .card-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-around;

      .card-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        border-radius: 8px;
        margin: 0 10px 10px 10px;
        box-shadow: 1px 1px 10px #0000001c;
        background-color: ${({ theme }) => theme.color.fontWhite};

        img {
          margin-top: 10px;
          width: 99%;
          height: auto;
        }

        .title {
          margin-top: 20px;
          font-family: ${({ theme }) => theme.font.primary};
          padding-bottom: 20px;
          font-weight: 600;
        }
      }

      &::after {
        position: absolute;
        width: 100%;
        height: 3px;
        top: -30px;
        left: 5px;
        content: "주변 즐길거리";
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
    }

    @media screen and (max-width: ${({ theme }) => theme.size.device.tablet}) {
      width: 90%;
      margin-left: 3%;
    }

    @media screen and (max-width: ${({ theme }) => theme.size.device.mobile}) {
      .card-wrapper {
        flex-direction: column;
        width: 70%;
        justify-content: unset;
        align-items: center;
      }
    }
  `,
};

export default CardStyles;
