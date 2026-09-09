"use client";

import { Button } from "@/components/ui/button"; 
import { Headphones, Lightbulb } from "lucide-react";
import { playstore } from "@/hooks/store";

export default function PlayButton() {
  const setClicked = playstore().setClicked;
  const clicked = playstore((state) => state.clicked);

  return (
    <div className={`${clicked ? "hidden" : "flex"} items-center justify-center h-screen w-screen`}> 
        <Button
          variant="default"
          className="background self-center flex p-7 gap-x-1.5 text-xl cursor-pointer text-white"
          onClick={() => setClicked(true)}
        >
          <Headphones /> Site Contains Sound and Flashing Lights, Click Here to Enter <Lightbulb />
        </Button>
    </div>
  );
}