import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function PlayerExample() {
  const [videoFilePath, setVideoFilePath] = useState('http://www.w3schools.com/html/mov_bbb.mp4', 'http://www.w3schools.com/html/mov_bbb.mp4');

  const handleVideoUpload = (event) => {
    const [file] = event.target.files;
    setVideoFilePath(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="mt-n4 mb-n1 ml-n2 height-5" style={{height:'60%'}}>
        {/* <input type="file" onChange={handleVideoUpload} /> */}
        <ReactPlayer url={videoFilePath} width="100%" height="10%" controls={true} playing={true} playIcon={true} loop={true} />
      </div>
    </>
  );
}