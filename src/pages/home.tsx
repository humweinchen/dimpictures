/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/Layout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Head from "next/head";

const images = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.jpg",
  "9.jpg",
  "10.jpg",
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
                className="h-[calc(100vh-70px-52px)] w-full object-cover object-center"
                src={`/assets/home/${src}`}
                alt={src}
              />
            </SplideSlide>
          ))}
        </Splide>
      </Layout>
    </>
  );
}
