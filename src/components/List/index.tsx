import React, { useEffect, useState } from "react";
import { theme } from "src/styles/theme";
import ListItem, { itmeType } from "../ListItem";
import ListStyle from "./List.styles";

interface ListProps {
  listItems: itmeType[];
}

const List: React.FC<ListProps> = ({ listItems }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (
        document.body.clientWidth <=
        +theme.size.device.tablet.replace(/[a-z]/g, "")
      ) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <div>햄버거</div>;
  }

  return (
    <ListStyle.Ul>
      {listItems.map((item) => (
        <ListItem item={item} />
      ))}
    </ListStyle.Ul>
  );
};

export default List;
