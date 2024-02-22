import { Layout } from "@/components/Layout";
import { useState } from "react";

const WorksPage = () => {
  const [currentSelected, setCurrentSelected] = useState("");
  return (
    <Layout>
      <div className="grid grid-cols-3">
        <VideoElem />
      </div>
    </Layout>
  );
};

export default WorksPage;

interface VideoElemProps {
  thumbnail: string;
  video: string;
}
const VideoElem = () => {
  return (
    <div className="relative w-full pt-[56.25%]">
      <video controls>
        <source src="https://drive.google.com/uc?id=1MwS1f0bXyOB5V-6qBuTg5p70IYpeeq49&sz=w1000" />
      </video>
    </div>
  );
};
