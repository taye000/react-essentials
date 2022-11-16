import React from "react";
import "../index.css";

export const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div class="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
