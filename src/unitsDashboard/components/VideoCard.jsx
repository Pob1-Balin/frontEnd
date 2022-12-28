import React, { useState } from "react";
import ReactPlayer from "react-player";
import { API } from "../../config";

// 'http://www.w3schools.com/html/mov_bbb.mp4'

export default function PlayerExample(props) {
  const [videoFilePath, setVideoFilePath] = useState(`${API}/videos/${props.video_link}`, `${API}/videos/${props.video_link}`);

  const handleVideoUpload = (event) => {
    const [file] = event.target.files;
    setVideoFilePath(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="mt-n4 mb-n1 ml-n2 height-5" style={{height:'60%'}}>
        <ReactPlayer url={videoFilePath} width="100%" height="10%" controls={true} playing={true} playIcon={true} loop={true} />
      </div>
    </>
  );
}