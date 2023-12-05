"use client";
import Image from "next/image";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="flex flex-row align-between p-6">
      <Image src="/logo.svg" alt="logo" width="70" height="70"></Image>
      <div className="">
        <button onClick={toggleDrawer}>Show</button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className=""
        >
          <div>Hello World</div>
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
