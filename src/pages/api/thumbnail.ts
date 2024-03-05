/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// pages/api/thumbnail.ts

import type { NextApiRequest, NextApiResponse } from "next";
import ffmpeg from "fluent-ffmpeg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const videoUrl = req.query.video;

  const time = "00:00:50";
  const seconds = parseTimeToSeconds(time as string);

  try {
    // Extract thumbnail using ffmpeg
    ffmpeg(videoUrl as string)
      .screenshots({
        timestamps: [seconds],
        size: "400x?",
      })
      .toFormat("dataURL")
      .on("end", (dataURL) => {
        // Send the thumbnail data URL
        res.status(200).json({ thumbnailUrl: dataURL });
      })
      .on("error", (err) => {
        console.error("Error generating thumbnail:", err);
        res.status(500).json({ error: "Error generating thumbnail" });
      });
  } catch (error) {
    console.error("Error generating thumbnail:", error);
    res.status(500).json({ error: "Error generating thumbnail" });
  }
}

function parseTimeToSeconds(time: string): number {
  const [hours = 0, minutes = 0, seconds = 0] = (time || "00:00:00")
    .split(":")
    .map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}
