/*
 * @Author: BaojunCZ
 * @Date: 2019-01-04 17:34:33
 * @LastEditors: your name
 * @LastEditTime: 2019-01-08 14:21:05
 * @Description: movie list componnt
 */
import React from "react";
import MovieCard from "../MovieCard";
import getHotMovies from "../../utils/service";

export default class RecMovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const { url } = this.props;
    getHotMovies(url).then((data) => {
      if (data !== undefined) {
        this.setState({ movies: data });
      }
    });
  }

  renderList() {
    const { movies } = this.state;
    const length = movies.length;
    if (length !== 0) {
      const movieList = [];
      for (let x = 0; x < length; x += 1) {
        const moviesCol = [];
        moviesCol.push(<MovieCard movie={movies[x]} />);
        movieList.push(
          <ul style={{
            listStyleType: "none",
            padding: 0,
            display: "inline-block",
          }}
          >
            {moviesCol}
          </ul>,
        );
      }
      return movieList;
    }
    return null;
  }

  render() {
    return (
      <div style={{
        marginLeft: "15px", marginRight: "15px", marginBottom: "10px",
      }}
      >
        {this.renderList()}
      </div>
    );
  }
}