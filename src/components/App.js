import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import { VideoList } from "./VideoList";

export default class App extends React.Component {
  state = { videos: [], selectedvideo: null };

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
    console.log("video selected", video);
  };

  render() {
    return (
      <div className="ui-container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}
