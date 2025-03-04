/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/Layout";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

type Image = {
  src: string;
  type: string;
};

export default function Home() {
  useEffect(() => {
    void (fetch("/api/slides")
      .then(res => res.json())
      .then((data: { data: string[] }) => {
        data.data.shift();
        setImages(data.data.map((a) => ({ src: String(a[0]), type: String(a[1]) })));
      }));
  }, []);


  const [images, setImages] = useState<Image[]>([]);

  return images.length > 0 ? (
    <>
      <Head>
        <title>Dim Pictures</title>
        <meta name="description" content="Film Studio & Production House" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="hidden h-full w-full flex-grow lg:flex">
          <Splide
            className=""
            options={{
              pagination: false,
              rewind: true,
              type: "fade",
              arrows: false,
              autoplay: true,
              pauseOnHover: false,
              interval: 3500,
            }}
          >
            {images
              .filter((img) => img.type === "desktop")
              .map((src, i) => (
                <SplideSlide key={i}>
                  <img
                    className="h-[calc(100vh-70px-52px)] w-full object-cover"
                    src={src.src}
                    alt={src.src}
                  />
                </SplideSlide>
              ))}
          </Splide>
        </div>
        <div className="flex h-full w-full flex-grow lg:hidden">
          <Splide
            className=""
            options={{
              pagination: false,
              rewind: true,
              type: "fade",
              arrows: false,
              autoplay: true,
              pauseOnHover: false,
              interval: 3500,
            }}
          >
            {images
              .filter((img) => img.type === "mobile")
              .map((src, i) => (
                <SplideSlide key={i}>
                  <img
                    className="h-[calc(100vh-70px-50px)] w-full object-cover"
                    src={src.src}
                    alt={src.src}
                  />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </Layout>
    </>
  ) : (
    <div className="flex min-h-screen w-full flex-grow flex-col items-center justify-center">
      <Rings
        visible={true}
        height="200"
        width="200"
        color="#fff"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
