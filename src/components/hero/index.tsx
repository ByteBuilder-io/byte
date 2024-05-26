"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "EDH",
    link: "https://cursor.so",
    thumbnail: "/edh.png",
  },
  {
    title: "Stelaro",
    link: "https://userogue.com",
    thumbnail: "/stelaro.png",
  },

  {
    title: "Mariette",
    link: "https://editorially.org",
    thumbnail: "/mariette.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Dermoteca",
    link: "https://ui.aceternity.com",
    thumbnail: "/dermoteca.png",
  },
  {
    title: "Nude",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/nude.png",
  },
  {
    title: "Montero",
    link: "https://smartbridgetech.com",
    thumbnail: "/montero.png",
  },
  {
    title: "Almond Cow",
    link: "https://renderwork.studio",
    thumbnail: "/ac.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
];
