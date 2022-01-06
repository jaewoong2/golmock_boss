import React from "react";
import BannerStyle from "./Banner.styles";

interface BannerProps {
  width?: string;
  height?: string;
  backgroundColor: string;
}

const Banner: React.FC<BannerProps> = ({
  children,
  width = "100%",
  height = "20px",
  backgroundColor,
}) => {
  return (
    <BannerStyle.Container>
      <BannerStyle.Bar
        width={width}
        height={height}
        backgroundColor={backgroundColor}
      >
        {children}
      </BannerStyle.Bar>
    </BannerStyle.Container>
  );
};

export default Banner;
