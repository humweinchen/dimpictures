/* eslint-disable @next/next/no-img-element */
import { Carousel } from "@/components/Carousel";
import { Layout } from "@/components/Layout";
import { FunctionComponent } from "react";

const people: PeopleImageProps[] = [
  {
    src: "https://via.placeholder.com/200",
    name: "Samuel",
    pos: "Cheif",
  },
  {
    src: "https://via.placeholder.com/200",
    name: "???",
    pos: "???",
  },
];

const logos = [
  "1.png",
  "2.png",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.png",
  "7.png",
  "8.png",
  "9.jpg",
  "10.jpg",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.jpg",
  "19.jpeg",
  "20.png",
  "21.png",
  "22.png",
  "23.jpg",
];

const AboutPage = () => {
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
          <p className="text-justify font-arial text-xl">
            <span className="text-3xl font-bold uppercase">
              Started in 2022,
            </span>{" "}
            two friends decided to put their ideas and creativity to the test.
            Hence the birth of Dim Pictures.
            <br />
            <br />
            Dim has 2 meanings here.
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
        <div className="flex w-full max-w-screen-md flex-col px-12">
          <div className="flex h-[30px] w-full flex-row items-center justify-center bg-black">
            <p className="font-outline-2 font-bebas text-[4.5rem] text-white">
              The Brains
            </p>
          </div>

          <div className="mt-12 grid w-full justify-items-center gap-12 md:grid-cols-2">
            {people.map((pax, i) => (
              <PeopleImage
                key={pax.name}
                name={pax.name}
                src={pax.src}
                pos={pax.pos}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <p className="mb-12 font-arial text-4xl font-bold uppercase">
            Our Clients
          </p>
          <Carousel images={logos} />
        </div>
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
      <img src={src} alt={name} className="w-full" />
      <p className="mt-2 font-bebas text-3xl tracking-tight">{name}</p>
      <p className="-mt-1 text-lg font-thin uppercase">{pos}</p>
    </div>
  );
};
