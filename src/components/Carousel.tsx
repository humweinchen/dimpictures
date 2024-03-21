/* eslint-disable @next/next/no-img-element */

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import { type FunctionComponent } from "react";

interface CarouselProps {
  images: { bg: string; src: string }[];
  speed?: number;
  reverse?: boolean;
  square?: boolean;
}
export const Carousel: FunctionComponent<CarouselProps> = ({
  images,
  reverse,
  square,
  speed,
}) => {
  return (
    <Splide
      className="w-full"
      extensions={{ AutoScroll }}
      options={{
        arrows: false,
        autoStart: true,
        pauseOnHover: true,
        pagination: false,
        type: "loop",
        perPage: 5,
        drag: "free",
        direction: reverse ? "rtl" : "ltr",
        infinite: true,
        autoScroll: {
          speed: speed ?? 1,
        },
      }}
    >
      {images.map((src, i) => (
        <SplideSlide key={i} className="w-[unset_!important]">
          <img
            style={{ background: src.bg }}
            className={`mr-5 h-[100px] w-[100px] object-contain`}
            src={`/assets/logos/${src.src}`}
            alt={src.src}
            onClick={() => console.log(src)}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
