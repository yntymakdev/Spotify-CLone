import LayoutSite from "@/appPages/site/components/layout/LayoutSite";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <LayoutSite>{children}</LayoutSite>
    </div>
  );
};

export default layout;
