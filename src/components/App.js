import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTextSubmit = async (text) => {
    //using the youtube api to search for videos
    const response = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    console.log(response);
  };
  render() {
    return (
      <div className="ui-container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
      </div>
    );
  }
}
export default App;
