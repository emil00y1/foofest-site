"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Button className="hover:bg-yellow-300">Yo</Button>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit" className="hover:bg-yellow-300">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
