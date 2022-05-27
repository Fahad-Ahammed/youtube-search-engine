import React from "react";
import { connect } from "react-redux";
import { NewSearchItem, getVideos } from "../../redux/search/search-action";
import "./Search.css";
function Search({
  ishomePage,
  NewSearchItem,
  searchItem,
  searchCount,
  getVideos,
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        ishomePage();
        if (searchItem !== "") getVideos(searchItem, searchCount);
      }}
    >
      <input
        placeholder="Search"
        type="sumbit"
        onChange={(event) => {
          NewSearchItem(event.target.value);
        }}
      />
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    searchItem: state.searchReducer.newSearchItem,
    searchCount: state.searchReducer.searchCount,
  };
};

export default connect(mapStateToProps, { NewSearchItem, getVideos })(Search);
