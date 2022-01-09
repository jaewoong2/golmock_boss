import React from "react";
import InfoStyles from "./Info.styles";

interface InfoProps {}

const Info: React.FC<InfoProps> = ({}) => {
  return (
    <InfoStyles.Container>
      <InfoStyles.InfoContainer>
        <div className="title">용인시 보정동카페거리</div>
        <div className="description">
          전통찻집, 카페, 레스토랑 등 100여개가 밀집되어 있는 문화거리, 구석구석
          독특한 인테리어로 눈도 호강할 수 있는 곳입니다.
        </div>
      </InfoStyles.InfoContainer>
    </InfoStyles.Container>
  );
};

export default Info;
