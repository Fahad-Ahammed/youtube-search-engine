import React from "react";
import "./Video.css";
export default function Video({ videoDetails }) {
  return (
    <>
      {videoDetails.map((video, index) => {
        return (
          <div
            key={index}
            className="video-conatainer"
          >
            <img
              className="image"
              src={video.snippet.thumbnails.medium.url}
              alt="thumbnail"
            />
            <div className="video-details">
              <p className="video-title">{video.snippet.title}</p>
              <p className="channel-title">{video.snippet.channelTitle}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
