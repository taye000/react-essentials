import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import { VideoList } from "./VideoList";

export default class App extends React.Component {
    state = { videos: []};

  onTextSubmit = async (text) => {
    //using the youtube api to search for videos
    const response = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui-container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
