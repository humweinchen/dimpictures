/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @next/next/no-img-element */
import { Layout } from "@/components/Layout";
import { IoClose } from "react-icons/io5";
import { Rings } from "react-loader-spinner";

import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  useState,
  useEffect,
} from "react";
import {
  type ReadableVideoByCategory,
  type Video,
  convertToReadableVideo,
} from "@/helper";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const WorksPage = () => {
  const [currentSelected, setCurrentSelected] = useState<Video>();
  const [videosGroup, setVideosGroup] = useState<ReadableVideoByCategory[]>([]);

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      await fetch("/api/videos", { method: "GET" }).then((res) =>
        res.json().then((res2) => {
          const returnedVideos = res2.data.values as string[][];
          returnedVideos.shift();
          setVideosGroup(convertToReadableVideo(returnedVideos));
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
    <Layout bgColor="black">
      {currentSelected && (
        <div className="fixed left-0 top-0 z-30 flex h-full max-h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-65 lg:px-24 lg:py-24">
          <IoClose
            onClick={() => setCurrentSelected(undefined)}
            className="absolute right-5 top-7 cursor-pointer rounded-md border-2 border-white p-1 text-white"
            size={35}
          />
          <div className="flex h-full w-full flex-col items-start bg-black lg:flex-row">
            <div className="flex h-full flex-col justify-center">
              <video
                controls
                disablePictureInPicture
                controlsList="nodownload"
                className="aspect-video max-h-full"
              >
                <source src={currentSelected.link} />
              </video>
            </div>
            <div className="flex flex-col px-5 py-3">
              <p className="w-full font-helvetica text-lg font-bold text-white">
                {currentSelected.name}
              </p>
              <p className="mt-2 font-helvetica text-xs text-gray-400">
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
      {videosGroup.length > 0 ? (
        <div className="relative z-10 flex flex-col items-center">
          {videosGroup.map((vid, i) => (
            <div className="relative flex w-full flex-col items-center" key={i}>
              <div className="sticky top-0 flex w-full flex-row bg-black py-1.5 pl-3 font-helvetica text-xl text-white">
                {vid.category}
              </div>
              <Splide
                className="w-full"
                options={{
                  autoplay: true,
                  // type: "loop",
                  perPage: 3,
                  perMove: 1,
                  breakpoints: {
                    1024: {
                      perPage: 2,
                    },
                    768: {
                      perPage: 1,
                    },
                  },
                  arrows: vid?.videos!.length > 3,
                }}
              >
                {vid.videos?.map((v, i) => (
                  <SplideSlide key={i} className="w-full">
                    <VideoElem
                      loading={pageLoading}
                      video={v}
                      setCurrentSelected={setCurrentSelected}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-grow flex-col items-center justify-center">
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
      <img className="w-full object-cover" src={video.thumb} alt={video.name} />
    </button>
  );
};
