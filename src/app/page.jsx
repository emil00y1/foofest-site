"use client";
import { Button } from "@/components/ui/button";
import { caesar } from "./fonts";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <div className={caesar.className}>
        <Marquee className="overflow-hidden">
          <p className="text-9xl pl-9">2024 FOOFEST 2024 FOOFEST 2024 FOOFEST</p>
        </Marquee>
        <Marquee className="overflow-hidden" direction="right">
          <p className="text-9xl pl-9">
            <span className="text-yellowaccent"> FOOFEST</span> 2024 <span className="text-yellowaccent"> FOOFEST</span> 2024 <span className="text-yellowaccent"> FOOFEST</span> 2024
          </p>
        </Marquee>
        <Marquee className="overflow-hidden">
          <p className="text-9xl pl-9"> FOOFEST 2024 FOOFEST 2024 FOOFEST 2024</p>
        </Marquee>
      </div>
      <main className="m-6">
        <h1 className="text-4xl font-black text-center">MUSIC FESTIVAL</h1>
        <p className="text-3xl font-black text-center">7 DAYS, 24/7</p>
        <Button className="hover:bg-yellow-300 py-2 w-52 block m-auto">TICKETS</Button>
        <Button variant="outline" className="hover:bg-yellow-300 border-yellowaccent text-yellowaccent py-2 w-52 block m-auto">
          PROGRAM
        </Button>
        <article className="flex flex-col gap-3">
          <h2>ABOUT FOOFEST</h2>
          <p>Our week-long 24/7 festival brings together a diverse lineup of artists for an unforgettable experience.</p>
          <p>Camp under the stars, enjoy top-notch facilities, and immerse yourself in the rhythm of the music.</p>
          <p>Join us for a down-to-earth celebration at this year’s Foofest.</p>
        </article>
      </main>
    </>
  );
}
