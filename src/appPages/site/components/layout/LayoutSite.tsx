import React, { Children, FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface ILayoutSite {
  children: ReactNode;
}
const LayoutSite: FC<ILayoutSite> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutSite;
