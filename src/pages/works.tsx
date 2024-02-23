/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/Layout";
import { env } from "@/env";
import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  useState,
  useEffect,
} from "react";

const WorksPage = () => {
  const [currentSelected, setCurrentSelected] = useState("");

  useEffect(() => {
    if (currentSelected) document.body.style.overflow = "hidden";
    if (!currentSelected) document.body.style.overflow = "";
  }, [currentSelected]);
  return (
    <Layout>
      {currentSelected && (
        <div
          className="absolute left-0 top-0 z-30 h-full min-h-screen w-screen bg-black opacity-65"
          onClick={() => setCurrentSelected("")}
        ></div>
      )}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {Array<string>(30)
          .fill("1WhknbWX8try_x5zfiTEwMkY9PqC5C4QZ")
          .map((id, i) => (
            <VideoElem
              key={i}
              id={id}
              setCurrentSelected={setCurrentSelected}
            />
          ))}
      </div>
    </Layout>
  );
};

export default WorksPage;

interface VideoElemProps {
  id: string;
  setCurrentSelected: Dispatch<SetStateAction<string>>;
}
const VideoElem: FunctionComponent<VideoElemProps> = ({
  id,
  setCurrentSelected,
}) => {
  return (
    <button
      className="relative z-10 w-full"
      onClick={() => setCurrentSelected(id)}
    >
      {/* <video controls>
        <source
          src={`https://www.googleapis.com/drive/v3/files/1WhknbWX8try_x5zfiTEwMkY9PqC5C4QZ?key=${env.NEXT_PUBLIC_API_KEY}&alt=media`}
        />
      </video> */}
      <img
        className="aspect-video w-full object-cover"
        src={`https://drive.google.com/thumbnail?id=${id}`}
        alt=""
      />
    </button>
  );
};
