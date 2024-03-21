/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/Layout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Head from "next/head";

const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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
                src={`/assets/home/${src}.jpg`}
                alt={src}
              />
            </SplideSlide>
          ))}
        </Splide>
      </Layout>
    </>
  );
}
