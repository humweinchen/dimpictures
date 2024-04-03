/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Carousel } from "@/components/Carousel";
import { Layout } from "@/components/Layout";
import { useEffect, useState, type FunctionComponent } from "react";

const AboutPage = () => {
  useEffect(() => {
    void (async () => {
      await fetch("/api/logos", { method: "GET" }).then((r) =>
        r.json().then((res: string[]) => {
          res.shift();
          const data = res.map((a) => {
            return {
              src: String(a[0]),
              bg: a[1] ?? undefined,
              type: String(a[2]),
            };
          });
          setLogos(data);
        }),
      );
    })();
  }, []);

  const [logos, setLogos] = useState<
    { src: string; bg?: string; type: string }[]
  >([]);

  useEffect(() => {
    void (async () => {
      await fetch("/api/founders", { method: "GET" }).then((r) =>
        r.json().then((res: string[]) => {
          res.shift();
          const data = res.map((a) => {
            return {
              name: String(a[0]),
              src: String(a[1]),
              pos: String(a[2]),
            };
          });
          setFounders(data);
        }),
      );
    })();
  }, []);

  const [founders, setFounders] = useState<
    { name: string; src: string; pos: string }[]
  >([]);

  return (
    <Layout>
      <div className="relative w-full">
        <p className="landing-text-shadow absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-bebas text-5xl text-white">
          ABOUT US
        </p>
        <img
          className="z-10 h-40 w-full object-cover object-center brightness-50 grayscale md:h-56"
          src="https://assets-global.website-files.com/61841eeeb196d8bb217a08c2/64dc1ed3a926ddaf9d6eecab_importance-of-editing.jpg"
          alt="About Landing Image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-20 pb-32 pt-24">
        <article className="max-w-[320px] md:max-w-screen-md">
          <p className="text-justify font-helvetica text-xl">
            <span className="text-3xl font-bold uppercase">
              Started in 2022,
            </span>{" "}
            two friends decided to put their ideas and creativity to the test.
            Hence the birth of Dim Pictures.
            <br />
            <br />
            <span className="text-xl font-bold">DIM</span> has 2 meanings here.
            <br />
            <br />
            One being the control of lighting which is our obsession with
            filming with the right amount lighting; another being the canto word
            掂 (great) which represents our guarantee that what you receive from
            us will always be associated with the word 掂 (great).
            <br />
            <br />
            Here at Dim Pictures we have experiences in several projects
            spanning from music videos, corporate brand videos, commercials,
            product shoots and many more. We strive to whip up content that will
            cater to your every need.
            <br />
            <br />
            <span className="text-xl font-bold">
              We look forward to hearing what your ideas are and how we can work
              together with you. Turning your vision into a journey we share.
            </span>
          </p>
        </article>
        {founders.length > 0 ? (
          <div className="flex w-full max-w-[320px] flex-col md:max-w-screen-md">
            <p className="font-bebas text-[3.5rem] text-black">
              THE MACHINES BEHIND.
            </p>
            <div className="mt-8 grid w-full gap-12 md:grid-cols-2">
              {founders.map((pax) => (
                <PeopleImage
                  key={pax.name}
                  name={pax.name}
                  src={pax.src}
                  pos={pax.pos}
                />
              ))}
            </div>
          </div>
        ) : null}
        {logos.length > 0 ? (
          <div className="flex w-full max-w-[320px] flex-col items-center justify-center md:max-w-screen-md">
            <p className="mb-12 font-bebas text-[3rem] font-bold uppercase">
              Our Clients
            </p>
            <div className="flex w-full flex-col items-center gap-10">
              {/* TODO: Add customizability through googlesheets */}
              {/* merge line 2 and line 3 */}
              <Carousel
                images={logos.filter((lg) => lg.type === "row#1")}
                speed={0.5}
              />
              <Carousel
                images={logos.filter((lg) => lg.type === "row#2")}
                speed={0.5}
                reverse
              />
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default AboutPage;

interface PeopleImageProps {
  src: string;
  name: string;
  pos: string;
}
const PeopleImage: FunctionComponent<PeopleImageProps> = ({
  name,
  src,
  pos,
}) => {
  return (
    <div className="flex flex-col justify-start">
      <img
        src={src}
        alt={name}
        className="h-[300px] object-cover object-center"
      />
      <p className="mt-2 font-bebas text-3xl tracking-tight">{name}</p>
      <p className="-mt-1 text-lg font-thin uppercase">{pos}</p>
    </div>
  );
};
