import React from "react";
import "../index.css";

export const VideoItem = ({ video, onVideoSelect }) => {
  return (
    //using the onVideoSelect callback function from the App component to select a video onclick
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
