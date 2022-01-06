import React from "react";
import ImageContainerStyle from "./ImageContainer.styles";

interface ImageContainerProps {
  /** large = full , small = 10% */
  size?: "small" | "large";
  width?: string;
  height?: string;
  src: string;
  alt: string;
  fontSize: string;
  caption: string;
}

/** size or width & height is necessary */
const ImageContainer: React.VFC<ImageContainerProps> = ({
  src,
  alt,
  size,
  width,
  height,
  fontSize,
  caption,
}) => {
  return (
    <ImageContainerStyle.Container
      width={
        width
          ? width
          : size === "large"
          ? `100%`
          : size === "small"
          ? "10%"
          : "0px"
      }
      height={height ? height : size ? "auto" : "0px"}
    >
      <span className="left-btn">{"<"}</span>
      <ImageContainerStyle.Image src={src} alt={alt} />
      <ImageContainerStyle.Caption fontSize={fontSize}>
        {caption}
      </ImageContainerStyle.Caption>
    </ImageContainerStyle.Container>
  );
};

export default ImageContainer;
