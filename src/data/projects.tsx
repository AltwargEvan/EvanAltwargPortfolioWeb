import WrapGiftsLogo from "@/assets/WrapGifts";
import ZenithLogo from "@/assets/Zenith";
import portfolioimage from "@/assets/portfolio.png";
import React, { ReactNode } from "react";

export type ProjectType = {
  name: string;
  description: string;
  thumbnail: ReactNode;
  id: string;
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
} as const;

const Portfolio: ProjectType = {
  name: "Portfolio",
  id: "portfolio",
  description: "This website",
  thumbnail: <img src={portfolioimage} className="rounded max-h-96 h-auto" />,
} as const;

const WrapGifts: ProjectType = {
  name: "wrap.gifts",
  id: "wrapgifts",
  description: "Environmentally friendly eCards",
  thumbnail: <WrapGiftsLogo className="w-full h-96 pl-2 scale-75" />,
} as const;
export const ProjectData: Array<ProjectType> = [
  Zenith,
  WrapGifts,
  Portfolio,
] as const;
