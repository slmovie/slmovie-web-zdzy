/*
 * @Author: BaojunCZ
 * @Date: 2019-01-04 17:34:33
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 20:26:42
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
    console.log(movies);
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
        marginLeft: "15px", marginRight: "15px", marginBottom: "10px",
      }}
      >
        {this.renderList()}
      </div>
    );
  }
}
