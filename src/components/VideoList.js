import React from "react";
import { VideoItem } from "./VideoItem";

export const VideoList = ({ videos, onVideoSelect }) => {
  //mapping over the videos array from the App component
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
