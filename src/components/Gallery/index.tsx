import React from "react";
import GalleryStyle from "./Gallery.styles";

interface GalleryItemProps {
  className: string;
}
const GalleryItem: React.FC<GalleryItemProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

interface GalleryProps {
  items: { value: string }[];
  column: number;
  itemHeight: string;
}

const Gallery: React.FC<GalleryProps> = ({ items, column, itemHeight }) => {
  return (
    <GalleryStyle.Container column={column} itemHeight={itemHeight}>
      <div className="items-container">
        {items.map((item, index) => (
          <GalleryItem key={item.value + index} className="item">
            {item.value}
          </GalleryItem>
        ))}
      </div>
    </GalleryStyle.Container>
  );
};

export default Gallery;
