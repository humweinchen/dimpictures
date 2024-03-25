/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/Layout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Head from "next/head";

const images = [
  { src: "1.webp", pos: "25% 0" },
  { src: "2.webp", pos: "65% center" },
  { src: "3.webp", pos: "65% center" },
  { src: "4.webp", pos: "55% center" },
  { src: "5.webp", pos: "center" },
  { src: "6.webp", pos: "center" },
  { src: "7.webp", pos: "30% 0" },
  { src: "8.jpg", pos: "center" },
  { src: "9.jpg", pos: "37.5% 0" },
  { src: "10.jpg", pos: "65% 0" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Dim Pictures</title>
        <meta name="description" content="Film Studio & Production House" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Splide
          className=""
          options={{
            pagination: false,
            rewind: true,
            type: "fade",
            arrows: false,
            autoplay: true,
            interval: 2500,
          }}
        >
          {images.map((src, i) => (
            <SplideSlide key={i}>
              <img
                style={{
                  objectPosition: src.pos,
                }}
                className="h-[calc(100vh-70px-52px)] w-full object-cover"
                src={`/assets/home/${src.src}`}
                alt={src.src}
              />
            </SplideSlide>
          ))}
        </Splide>
      </Layout>
    </>
  );
}
