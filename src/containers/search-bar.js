import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default class SearchBar extends Component {
  render() {
    return (
      <form onSubmit className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
