export interface Video {
  name: string;
  client: string;
  desc: string;
  link: string;
  thumb: string;
  category: string;
}

export interface ReadableVideoByCategory {
  category: string;
  videos: Video[] | undefined;
}

export const convertToReadableVideo = (
  video: string[][],
): ReadableVideoByCategory[] => {
  const videosByCategory: Record<string, Video[]> = {};

  video.forEach((v) => {
    const category = v[5] ?? ""; // Use category as key
    const videoObj = {
      name: v[0] ?? "", // Ensure a default value in case of undefined
      client: v[1] ?? "", // Ensure a default value in case of undefined
      desc: v[2] ?? "", // Ensure a default value in case of undefined
      link: v[3] ?? "", // Ensure a default value in case of undefined
      thumb: v[4] ?? "",
      category: category,
    };

    if (videosByCategory[category]) {
      videosByCategory[category]?.push(videoObj);
    } else {
      videosByCategory[category] = [videoObj];
    }
  });

  const readableVideosByCategory: ReadableVideoByCategory[] = [];

  for (const category in videosByCategory) {
    if (videosByCategory.hasOwnProperty(category)) {
      readableVideosByCategory.push({
        category: category,
        videos: videosByCategory[category],
      });
    }
  }

  return readableVideosByCategory;
};
