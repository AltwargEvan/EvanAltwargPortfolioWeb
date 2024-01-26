import { useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { ReactNode } from "react";

// TYPES
interface ILayoutProps {
  children: ReactNode;
}

const PageTransitionLayout = ({ children }: ILayoutProps) => {
  const router = useRouter();

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key={router.state.location.pathname}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
