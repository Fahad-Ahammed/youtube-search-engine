import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Video from "../Video/Video";
import { infiniteScroll, getTrending } from "../../redux/search/search-action";
import "./HomePage.css";
import { Link } from "react-router-dom";
class HomePage extends Component {
  state = {
    trending: true,
  };
  componentDidMount() {
    const { getTrending, offset } = this.props;
    getTrending(offset);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleTrending = () => {
    this.setState({ trending: false });
  };

  handleScroll = (e) => {
    const { searchItem, searchCount, infiniteScroll, nextPageToken } =
      this.props;
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 3 >=
      e.target.documentElement.scrollHeight
    ) {
      if (!this.state.trending)
        infiniteScroll(searchItem, searchCount, nextPageToken);
    }
  };
  render() {
    const { videoDetails, islogin } = this.props;
    const user = this.props.location.state;

    return (
      <div>
        <div className="homepage-header">
          <Header />
          {islogin && <Search ishomePage={this.handleTrending} />}
          {!islogin ? (
            <Link to="/login" className="link">
              <button className="header-login-btn">Login</button>
            </Link>
          ) : (
            <div className="logged-user">
              <i className="fa fa-user-circle-o"></i>
              <p className="logged-username">{user}</p>
            </div>
          )}
        </div>
        {!videoDetails.length ? (
          <div className="invalid-search">Sorry no result found</div>
        ) : (
          <div className="wrapper">
            {this.state.trending && (
              <h1 className="trending">Trending in India</h1>
            )}
            <div className="main-container">
              <Video videoDetails={videoDetails} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    searchItem: state.searchReducer.newSearchItem,
    videoDetails: state.searchReducer.searchResult,
    offset: state.searchReducer.offset,
    searchCount: state.searchReducer.searchCount,
    nextPageToken: state.searchReducer.nextPageToken,
    islogin: state.searchReducer.login,
  };
};

export default connect(mapStateToprops, { getTrending, infiniteScroll })(
  HomePage
);
