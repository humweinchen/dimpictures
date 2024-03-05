/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/Layout";
import { env } from "@/env";
import { IoClose } from "react-icons/io5";
import { Rings } from "react-loader-spinner";

import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  useState,
  useEffect,
} from "react";
import { type Video, convertToReadableVideo } from "@/helper";

const WorksPage = () => {
  const [currentSelected, setCurrentSelected] = useState<Video>();
  const [videos, setVideos] = useState<Video[]>([]);

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      await fetch("/api/videos", { method: "GET" }).then((res) =>
        res.json().then((res2) => {
          const returnedVideos = res2.data.values as string[][];
          returnedVideos.shift();
          setVideos(convertToReadableVideo(returnedVideos));
          setPageLoading(false);
        }),
      );
    })();
  }, []);

  useEffect(() => {
    if (currentSelected) document.body.style.overflow = "hidden";
    if (!currentSelected) document.body.style.overflow = "";
  }, [currentSelected]);
  return (
    <Layout>
      {currentSelected && (
        <div className="absolute left-0 top-0 z-30 flex h-full max-h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-65 lg:px-24 lg:py-24">
          <IoClose
            onClick={() => setCurrentSelected(undefined)}
            className="absolute right-5 top-7 cursor-pointer rounded-md border-2 border-white p-1 text-white"
            size={35}
          />
          <div className="flex h-full w-full flex-col items-start bg-black lg:flex-row">
            <video
              controls
              disablePictureInPicture
              controlsList="nodownload"
              className="aspect-video max-h-full"
            >
              <source src={currentSelected.link} />
            </video>
            <div className="flex w-full flex-col px-5 py-3">
              <p className="font-helvetica w-full text-lg font-bold text-white">
                {currentSelected.name}
              </p>
              <p className="font-helvetica mt-2 text-xs text-gray-400">
                {currentSelected.client}
              </p>
              <div className="mt-5 flex flex-col overflow-y-auto">
                <p className="font-helvetica text-white">
                  {currentSelected.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {videos.length > 0 ? (
        <div className="z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((vid, i) => (
            <VideoElem
              loading={pageLoading}
              key={i}
              video={vid}
              setCurrentSelected={setCurrentSelected}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-grow flex-col items-center justify-center">
          <Rings
            visible={true}
            height="200"
            width="200"
            color="#000"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </Layout>
  );
};

export default WorksPage;

interface VideoElemProps {
  setCurrentSelected: Dispatch<SetStateAction<Video | undefined>>;
  loading?: boolean;
  video: Video;
}
const VideoElem: FunctionComponent<VideoElemProps> = ({
  setCurrentSelected,
  loading,
  video,
}) => {
  return (
    <button
      className="relative z-10 w-full"
      disabled={loading}
      onClick={() => setCurrentSelected(video)}
    >
      {/* <video controls>
        <source src={link} />
      </video> */}
      <img
        className="aspect-video w-full object-cover"
        src={video.thumb}
        alt={video.name}
      />
    </button>
  );
};
