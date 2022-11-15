import React from "react";

export default class SearchBar extends React.Component {
  state = { text: "" };
  onInputChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.text);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type={"text"}
              style={{ width: "100%" }}
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
