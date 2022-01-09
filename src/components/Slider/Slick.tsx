import { useMemo } from "react";
import styled from "@emotion/styled";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const SlideWrapper = styled.section`
  position: relative;
`;

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

function Slick({
  children,
  className,
  autoplay = true,
  speed = 300,
  loop = true,
}: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      centerMode: true,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === "boolean" ? 2000 : autoplay,
    }),
    [autoplay, loop, speed]
  );
  return (
    <SlideWrapper style={{ overflow: "hidden" }} className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}

export default Slick;
