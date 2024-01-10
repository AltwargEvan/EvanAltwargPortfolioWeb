import * as React from "react";
import { FileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
export const Route = new FileRoute('/').createRoute({
  component: Home,
});

type Opacity = 0 | 100;
function Home() {
  const [opacity, setOpacity] = React.useState<Opacity>(0);

  const handleClickEmail = () => {
    navigator.clipboard.writeText("evanaltwarg2021@gmail.com");
    setOpacity(100);
    setTimeout(() => setOpacity(0), 500);
  };

  return (
    <div className="flex h-screen justify-between  items-center flex-col text-5xl md:text-8xl sm:text-8xl lg:text-9xl">
      <div></div>
      <div className="flex flex-col justify-center text-center py-8  gap-y-8 md:py-12  select-none">
        <span>Hey, I'm Evan</span>
        <span>I Code Stuff</span>
      </div>

      <div className="flex gap-x-12 md:h-20 h-16">
        <a href="https://www.linkedin.com/in/evanaltwarg/" target="_blank">
          <Linkedin
            size={32}
            className="hover:text-neutral-200 w-8 h-8 md:w-12 md:h-12"
          />
        </a>
        <a href="https://github.com/AltwargEvan" target="_blank">
          <Github
            size={32}
            className="hover:text-neutral-200 w-8 h-8 md:w-12 md:h-12"
          />
        </a>

        <div className="flex flex-col items-center">
          <Mail
            onClick={handleClickEmail}
            className="hover:cursor-pointer hover:text-neutral-200 w-8 h-8 md:w-12 md:h-12"
          />
          <span
            className="text-sm transition-opacity"
            style={{
              opacity: opacity,
              transitionDuration: opacity === 100 ? "300ms" : "1500ms",
            }}
          >
            Copied
          </span>
        </div>
      </div>
    </div>
  );
}
