import { Layout } from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dim Pictures</title>
        <meta name="description" content="Film Studio & Production House" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <video
          autoPlay
          muted
          loop
          className="h-[calc(100vh-70px)] object-cover"
        >
          <source src="/assets/stock.mp4" type="video/mp4" />
        </video>
      </Layout>
    </>
  );
}
