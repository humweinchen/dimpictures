/* eslint-disable @next/next/no-img-element */

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import { type FunctionComponent } from "react";

interface CarouselProps {
  images: string[];
}
export const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
  return (
    <Splide
      className="w-full"
      extensions={{ AutoScroll }}
      options={{
        rewind: true,
        arrows: false,
        autoStart: true,
        pauseOnHover: true,
        pagination: false,
        type: "loop",
        drag: "free",
        infinite: true,
        autoScroll: {
          speed: 1,
        },
      }}
    >
      {images.map((src, i) => (
        <SplideSlide key={i}>
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
