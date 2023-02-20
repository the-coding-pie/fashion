import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header w-full flex items-center justify-between my-container py-7">
      <div className="logo-container flex items-center justify-start">
        <Logo />
      </div>
      <nav className="nav flex-1 flex items-center justify-end">
        <ul className="flex text-sm items-center gap-x-12 font-medium">
          <li>
            <Link href={"#"}>CATALOGUE</Link>
          </li>
          <li>
            <Link href={"#"}>FASHION</Link>
          </li>
          <li>
            <Link href={"#"}>FAVOURITE</Link>
          </li>
          <li>
            <Link href={"#"}>LIFESTYLE</Link>
          </li>
          <li>
            <Link className="btn primary" href={"#"}>SIGN UP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
