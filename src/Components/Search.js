import React, { Component } from "react";
import { APIUrls } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";
class Search extends Component {
  constructor(props) {
    super(props);
    // state to maintain search result and loading state
    this.state = {
      result: [],
      isLoading: false,
    };
    this.intervalId = null;
  }

  // function to fetch result on the basis of search key
  fetchResult = (searchKey) => {
    this.setState({ isLoading: true });
    const url = APIUrls.getSearchResult();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ searchKey: searchKey }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        this.setState({ result: data.data.questions });
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 500);
      });
  };

  // handle change to save searchKey in state on changingn input of search key
  // using debaunce to reduce function call
  handleChange = (e) => {
    let context = this;
    if (e.target.value.length > 0) {
      clearInterval(this.intervalId);
      let fetchFunction = this.fetchResult;
      let argument = [];
      argument.push(e.target.value);
      this.intervalId = setTimeout(() => {
        fetchFunction.apply(context, argument);
      }, 300);
    }
  };

  // rendering search component
  render() {
    const { result, isLoading } = this.state;
    return (
      <div className="search-input">
        <input placeholder="Search" onChange={this.handleChange} />
        <ul className="result">
          {isLoading ? (
            <li>Loading</li>
          ) : result.length === 0 ? (
            <li className="no-result">No Result Found</li>
          ) : (
            result.map((r) => {
              return <li>{r.query}</li>;
            })
          )}
        </ul>
      </div>
    );
  }
}

export default Search;
