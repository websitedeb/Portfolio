"use client";

import { useId } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ProjectSection({
  Image,
  Title,
  Images,
  Paragraphcontent,
  Link,
}: {
  Image: React.ReactNode;
  Title: React.ReactNode;
  Images: React.ReactNode[];
  Paragraphcontent: React.ReactNode;
  Link: string;
}) {
  const id = useId();

  return (
    <section
      id={`project-${id}`}
      className="
        mx-auto
        w-full
        max-w-6xl
        px-4
        sm:px-6
      "
    >
      <Card
        className="
          overflow-hidden
          rounded-3xl!
          border-white/10
          bg-gray-950/60!
          backdrop-blur-xl
          shadow-2xl
          transition-all
          duration-500
          hover:border-[#2A81FF]/30
          hover:shadow-[#2A81FF]/10
        "
      >
        <CardHeader className="px-6 pb-5 pt-6 sm:px-8 sm:pt-8">
          <div className="flex items-center gap-4">
            <div
              className="
                relative
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
              "
            >

              <div className="relative z-10 h-full w-full">
                {Image}
              </div>
            </div>

            <div className="min-w-0">

              <CardTitle
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                {Title}
              </CardTitle>
            </div>
          </div>

          <CardDescription
            className="
              mt-5
              max-w-3xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
            "
          >
            {Paragraphcontent} <br /> <a href={Link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">Visit Project</a>
          </CardDescription>
        </CardHeader>

        <CardContent className="px-4 pb-6 sm:px-8 sm:pb-8">
          <div
            className="
              relative
              rounded-2xl
              border
              border-white/10
              bg-black/30
              p-2
              shadow-inner
              sm:p-3
            "
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent className="-ml-4">
                {Images.map((image, index) => (
                  <CarouselItem
                    key={`${id}-${index}`}
                    className="
                      basis-full
                      pl-4
                    "
                  >
                    <div
                      className="
                        group/image
                        relative
                        aspect-video
                        overflow-hidden
                        rounded-xl
                        border
                        border-white/10
                        bg-gray-900
                        shadow-lg
                        transition-all
                        duration-300
                        hover:border-[#67BED9]/40
                        hover:shadow-[#2A81FF]/10
                      "
                    >
                      <div
                        className="
                          h-full
                          w-full
                          transition-transform
                          duration-500
                          group-hover/image:scale-[1.02]
                        "
                      >
                        {image}
                      </div>

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-linear-to-t
                          from-[#2A81FF]/10
                          via-transparent
                          to-[#67BED9]/5
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover/image:opacity-100
                        "
                      />

                      <div
                        className="
                          absolute
                          bottom-3
                          right-3
                          rounded-full
                          border
                          border-white/10
                          bg-black/60
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-gray-300
                          backdrop-blur-md
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                className="
                  left-3
                  border-white/10
                  bg-gray-950/80
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:border-[#67BED9]/40
                  hover:bg-[#2A81FF]
                  hover:text-white
                "
              />

              <CarouselNext
                className="
                  right-3
                  border-white/10
                  bg-gray-950/80
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:border-[#67BED9]/40
                  hover:bg-[#2A81FF]
                  hover:text-white
                "
              />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}