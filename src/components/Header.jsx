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
    <header className="flex flex-row justify-between p-4">
      <Image src="/logo.svg" alt="logo" width="60" height="60"></Image>
      <div className="flex self-center">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        <Drawer
          style={{ backgroundColor: "hsl(var(--extra-dark))" }}
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
        >
          <div className="h-full flex flex-col">
            <div className="flex m-4 justify-end">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
            <div className="flex flex-col items-center gap-8 mt-12">
              <Link className="text-2xl" href="/" onClick={toggleDrawer}>
                Home
              </Link>
              <Link
                className="text-2xl"
                href="/buy-tickets"
                onClick={toggleDrawer}
              >
                Tickets
              </Link>
              <Link className="text-2xl" href="#" onClick={toggleDrawer}>
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
