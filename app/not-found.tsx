"use client";

import Link from "next/link";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

import ThreeDBackground from "@/components/threedbg";
import { DotPattern } from "@/components/dotPattern";
import fonts from "@/hooks/fontManager";

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-950 px-4"
      style={{
        fontFamily: fonts.style.inter.fontFamily,
      }}
    >
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <DotPattern />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <ThreeDBackground />
      </div>

      <div
        className="
          appear
          relative
          w-full
          max-w-xl
          rounded-3xl
          border
          border-white/10
          bg-gray-900/45
          p-8
          text-center
          text-white
          shadow-2xl
          backdrop-blur-xl
          sm:p-12
        "
      >
        <div
          className="
            mx-auto
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-400/20
            bg-cyan-400/10
            text-cyan-300
            shadow-lg
          "
        >
          <FaExclamationTriangle size={28} />
        </div>

        <h1
          className="
            text-7xl
            font-black
            tracking-tight
            text-white
            sm:text-8xl
          "
        >
          404
        </h1>

        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
          Oh, Hello!
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-red-400 sm:text-lg">
          You are not suppose to be here.
        </p>

        <Link
          href="/"
          className="
            mx-auto
            mt-8
            flex
            w-fit
            items-center
            gap-2
            rounded-xl
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-6
            py-3
            font-semibold
            text-cyan-300
            transition-all
            duration-300
            hover:border-cyan-300/40
            hover:bg-cyan-400/20
            hover:text-white
            hover:shadow-lg
            hover:shadow-cyan-500/10
            active:scale-95
          "
        >
          <FaHome />
          Return Home
        </Link>
      </div>
    </main>
  );
}