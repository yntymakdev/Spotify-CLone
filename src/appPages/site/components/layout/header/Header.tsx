import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>Header</h1>
        <div className="header_head">
          <Link href={"/auth/sign-in"}>
            <h1>Auth</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
