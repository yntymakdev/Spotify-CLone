import LayoutAuth from "@/appPages/auth/components/layout/LayoutAuth";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <LayoutAuth>{children}</LayoutAuth>
    </div>
  );
};

export default layout;
