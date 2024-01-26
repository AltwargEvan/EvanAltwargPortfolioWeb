import WrapGiftsLogo from "@/assets/WrapGifts";
import ZenithLogo from "@/assets/Zenith";
import portfolioimage from "@/assets/portfolio.png";
import React, { ReactNode } from "react";
import WoTdleImage from "@/assets/WoTdle.png";
export type ProjectType = {
  name: string;
  description: string;
  thumbnail: ReactNode;
  link: string;
  id: string;
};

const WoTdle: ProjectType = {
  name: "WoTdle",
  id: "wotdle",
  description: "World of Tanks Vehicle Guessing Game",
  thumbnail: (
    <div
      style={{
        backgroundImage: WoTdleImage,
      }}
      className="h-96 bg-neutral-800 w-full"
    >
      <img src={WoTdleImage} className="rounded max-h-96 h-auto w-full" />
    </div>
  ),
  link: "https://github.com/AltwargEvan/WoTdle",
};

const Zenith: ProjectType = {
  name: "Zenith Installer",
  id: "zenith",
  description: "Desktop Plugin Installer for video game World of Tanks",
  thumbnail: (
    <div className="bg-black rounded">
      <ZenithLogo className="fill-red-500 w-full h-96 scale-75" />
    </div>
  ),
  link: "https://github.com/AltwargEvan/ZenithWotModpack",
} as const;

const Portfolio: ProjectType = {
  name: "Portfolio",
  id: "portfolio",
  description: "This website",
  thumbnail: <img src={portfolioimage} className="rounded max-h-96 h-auto" />,
  link: "https://github.com/AltwargEvan/EvanAltwargPortfolioWeb",
} as const;

const WrapGifts: ProjectType = {
  name: "wrap.gifts",
  id: "wrapgifts",
  description: "Environmentally friendly eCards",
  thumbnail: <WrapGiftsLogo className="w-full h-96 pl-2 scale-75" />,
  link: "http://wrap.gifts",
} as const;

export const ProjectData: Array<ProjectType> = [
  WoTdle,
  Zenith,
  Portfolio,
  WrapGifts,
] as const;
