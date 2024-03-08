/* eslint-disable @next/next/no-img-element */

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import { type FunctionComponent } from "react";

interface CarouselProps {
  images: string[];
  speed?: number;
  reverse?: boolean;
}
export const Carousel: FunctionComponent<CarouselProps> = ({
  images,
  reverse,
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
            className="mr-5 h-[100px] w-[100px] object-scale-down transition duration-200 ease-in-out hover:scale-110"
            src={`/assets/logos/${src}`}
            alt={src}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
