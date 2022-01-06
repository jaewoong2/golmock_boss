import React from "react";
import LayoutStyle from "./Layout.styes";

const Layout: React.FC = ({ children }) => {
  return <LayoutStyle.Main>{children}</LayoutStyle.Main>;
};

export default Layout;
