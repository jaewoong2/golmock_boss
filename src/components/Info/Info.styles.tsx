import styled from "@emotion/styled";

const InfoStyles = {
  Container: styled.div`
    width: 60%;
    display: flex;
    padding: 30px 10px 30px 10px;
    margin-left: 20%;
    margin-top: 70px;
    background-color: #a8a2a26f;
    border-radius: 20px;
    position: relative;

    @media screen and (max-width: ${({ theme }) => theme.size.device.tablet}) {
      width: 90%;
      margin-left: 3%;
      padding: 10px 10px 10px 10px;

      &::after {
        position: absolute;
        width: 100%;
        height: 3px;
        top: -30px;
        left: 20px;
        content: "Information";
      }
    }

    &::after {
      position: absolute;
      width: 100%;
      height: 3px;
      top: -30px;
      left: 5px;
      content: "Information";
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
  `,

  InfoContainer: styled.div`
    padding: 0;
    margin: 0;

    font-weight: 600;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.font.primary};

    .title {
      font-size: 1.2em;
      margin-bottom: 10px;
      color: white;
    }
  `,
};

export default InfoStyles;
