"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <h1>MUSIC FESTIVAL</h1>
      <p>7 DAYS, 24/7</p>
      <Button className="hover:bg-yellow-300 py-2 w-52 block">TICKETS</Button>
      <Button variant="outline" className="hover:bg-yellow-300 border-yellowaccent text-yellowaccent py-2 w-52 block">
        PROGRAM
      </Button>

      <h2>ABOUT FOOFEST</h2>
      <p>
        Our week-long 24/7 festival brings together a diverse lineup of artists for an unforgettable experience. Camp under the stars, enjoy top-notch facilities, and immerse yourself in the rhythm of
        the music. Join us for a down-to-earth celebration at this year’s Foofest.
      </p>
    </main>
  );
}
