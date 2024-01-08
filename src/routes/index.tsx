import * as React from "react";
import { FileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export const Route = new FileRoute('/').createRoute({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-screen justify-center items-center flex-col text-9xl select-none">
      <span>Hey. I'm Evan.</span>
      <span>I Code Stuff</span>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/evanaltwarg/" target="_blank">
          <Linkedin size={32} />
        </a>
        <a href="https://github.com/AltwargEvan" target="_blank">
          <Github size={32} />
        </a>
        <a href="mailto:evanaltwarg2021@gmail.com" target="_blank">
          <Mail size={32} />
        </a>
      </div>
    </div>
  );
}
