export type Video = {
  name: string;
  link: string;
  desc: string;
  client: string;
  thumb: string;
};

export const convertToReadableVideo = (video: string[][]): Video[] => {
  return video.map((v) => {
    return {
      name: v[0] ?? "", // Ensure a default value in case of undefined
      client: v[1] ?? "", // Ensure a default value in case of undefined
      desc: v[2] ?? "", // Ensure a default value in case of undefined
      link: v[3] ?? "", // Ensure a default value in case of undefined
      thumb: v[4] ?? "",
    };
  });
};
