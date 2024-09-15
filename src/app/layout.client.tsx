import React, { ReactNode } from "react";

const LayoutRootClient = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default LayoutRootClient;
