"use client";
import Image from "next/image";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Hamburger from "hamburger-react";
import Footer from "./Footer";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="flex flex-row justify-between p-6">
      <Image src="/logo.svg" alt="logo" width="70" height="70"></Image>
      <div className="flex self-center">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        {/*         <button onClick={toggleDrawer}>Show</button>
         */}{" "}
        <Drawer
          style={{ backgroundColor: "hsl(var(--extra-dark))" }}
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
        >
          <div className="h-full flex flex-col">
            <div className="flex m-2">
              <Image src="/logo.svg" alt="logo" width="48" height="48"></Image>

              {/*             <Hamburger toggled={isOpen} toggle={setIsOpen} />
               */}
            </div>
            <div className="flex flex-col items-center gap-8 mt-12">
              <Link className="text-2xl" href="#">
                Home
              </Link>
              <Link className="text-2xl" href="#">
                Tickets
              </Link>
              <Link className="text-2xl" href="#">
                Program
              </Link>
            </div>
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
