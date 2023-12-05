import Image from "next/image";

function Header() {
  return (
    <header className="flex flex-row p-6">
      <Image src="/logo.svg" width="70" height="70"></Image>
      <nav></nav>
    </header>
  );
}

export default Header;
