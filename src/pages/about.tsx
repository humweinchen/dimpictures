/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Carousel } from "@/components/Carousel";
import { Layout } from "@/components/Layout";
import { type FunctionComponent } from "react";

const people: PeopleImageProps[] = [
  {
    src: "/assets/founders/samuel.jpg",
    name: "Samuel Lee",
    pos: "Co-Founder",
  },
  { src: "/assets/founders/bryan.jpg", name: "Bryan Lee", pos: "Co-Founder" },
];

const logos = [
  {
    bg: "",
    src: "3.jpg",
  },
  {
    bg: "#000",
    src: "4.jpg",
  },
  {
    bg: "",
    src: "10.jpg",
  },
  {
    bg: "#00a2b2",
    src: "13.png",
  },
  {
    bg: "#ec313a",
    src: "16.png",
  },
  {
    bg: "#000",
    src: "23.jpg",
  },
  {
    bg: "",
    src: "5.jpg",
  },
  { src: "19.jpeg", bg: "" },
  { src: "6.png", bg: "" },
  { src: "8.png", bg: "" },
  { src: "18.jpg", bg: "" },
  { src: "20.png", bg: "" },

  { src: "12.png", bg: "" },
  { src: "11.png", bg: "" },
  { src: "9.jpg", bg: "" },
  { src: "7.png", bg: "" },
  { src: "21.png", bg: "" },
  { src: "22.png", bg: "" },
  { src: "24.png", bg: "" },
  { src: "1.png", bg: "" },
  { src: "2.png", bg: "" },
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
          <p className="text-justify font-helvetica text-xl">
            <span className="text-3xl font-bold uppercase">
              Started in 2022,
            </span>{" "}
            two friends decided to put their ideas and creativity to the test.
            Hence the birth of Dim Pictures.
            <br />
            <br />
            <span className="font-bebas text-2xl">D I M</span> has 2 meanings
            here.
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
        <div className="flex w-full max-w-[320px] flex-col md:max-w-screen-md">
          <p className="font-bebas text-[3.5rem] text-black">
            THE MACHINES BEHIND.
          </p>
          <div className="mt-8 grid w-full gap-12 md:grid-cols-2">
            {people.map((pax) => (
              <PeopleImage
                key={pax.name}
                name={pax.name}
                src={pax.src}
                pos={pax.pos}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-[320px] flex-col items-center justify-center md:max-w-screen-md">
          <p className="mb-12 font-helvetica text-4xl font-bold uppercase">
            Our Clients
          </p>
          <div className="flex w-full flex-col items-center gap-10">
            <Carousel images={logos.slice(0, 8)} speed={0.5} square />
            <Carousel images={logos.slice(8, 12)} speed={0.5} reverse />
            <Carousel images={logos.slice(12)} speed={0.5} />
          </div>
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
