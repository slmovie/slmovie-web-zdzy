/*
 * @Author: BaojunCZ
 * @Date: 2019-01-04 17:34:33
 * @LastEditors: your name
 * @LastEditTime: 2019-01-16 16:17:48
 * @Description: movie list componnt
 */
import React from "react";
import MovieCard from "../MovieCard";
import Service from "../../utils/service";

export default class RecMovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movies !== this.props.movies) {
      this.setState({
        movies: nextProps.movies
      });
    }
  }

  componentDidMount() {
    const { url, movies } = this.props;
    if (movies === undefined) {
      Service.getMovie(url).then((data) => {
        if (data !== undefined) {
          this.setState({ movies: data });
        }
      });
    } else {
      this.setState({ movies: movies });
    }
  }

  renderList() {
    const { movies } = this.state;
    const length = movies.length;
    if (length !== 0) {
      const moviesCol = [];
      for (let x = 0; x < length; x += 1) {
        moviesCol.push(<MovieCard movie={movies[x]} history={this.props.history} />);
      }
      return (
        <ul style={{
          listStyleType: "none",
          padding: 0,
          display: "inline-block",
        }}
        >
          {moviesCol}
        </ul>);
    }
    return null;
  }

  render() {
    return (
      <div style={{
        marginLeft: "1vw", marginRight: "1vw", marginBottom: "1vh",
      }}
      >
        {this.renderList()}
      </div>
    );
  }
}
