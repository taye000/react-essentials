import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTextSubmit = async (text) => {
    //using the youtube api to search for videos
    const response = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video});
  };

  render() {
    return (
      <div className="ui-container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}
