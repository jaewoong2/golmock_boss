import React from "react";
import ListItemStyle from "./ListItem.styles";

export type itmeType = {
  value: string;
};

interface ListItemProps {
  item: itmeType;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <ListItemStyle.Li>
      <span>{item.value}</span>
    </ListItemStyle.Li>
  );
};

export default ListItem;
