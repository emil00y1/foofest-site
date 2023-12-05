import Image from "next/image";

function Header() {
  return (
    <header>
      <Image src="/logo.svg" width="100" height="100"></Image>
      <nav></nav>
    </header>
  );
}

export default Header;
