/*
 * @Author: BaojunCZ
 * @Date: 2019-01-05 11:44:09
 * @LastEditors: your name
 * @LastEditTime: 2019-02-07 17:19:55
 * @Description: movie card in homepage
 */
import React from "react";
import imgHolder from "../../res/image/img_holder.png";
import { IMovieDetail } from "../../typing/detail-typing";
import Urls from "../../constant/Url";

interface Props {
  movie: IMovieDetail,
  history: any,
}

interface States {
  post: string,
}

export default class MovieCard extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {
      post: this.props.movie.post
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.movie !== this.props.movie) {
      this.setState({
        post: nextProps.movie.post
      });
    }
  }

  render() {
    return (
      <li style={{
        float: "left",
        paddingLeft: "0.5vw",
        paddingRight: "0.5vw",
      }}
      >
        <div style={{
          display: "flex", flexDirection: "column", marginTop: "1vmin", alignItems: "center", width: "13vmax", height: "25vmax"
        }}
          onClick={() => {
            window.open(Urls.SLYS_IP + '/sub/' + this.props.movie.id)
            // this.props.history.push('/sub/' + this.props.movie.id)
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={this.state.post}
              alt="post"
              style={{
                width: "13vmax", height: "18vmax",
              }}
              onError={() => this.setState({ post: imgHolder })}
            />
            <text style={{
              position: "absolute",
              overflow: "hidden",
              color: "#000000",
              fontSize: "1.5vmax",
              textAlign: "center",
              backgroundColor: "#d0d0d0",
              paddingLeft: 5,
              paddingRight: 5,
              left: 0,
            }}
            >
              {this.props.movie.year}
            </text>
            <text style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              overflow: "hidden",
              color: "#000000",
              fontSize: "1.5vmax",
              textAlign: "center",
              backgroundColor: "#d0d0d0",
              paddingLeft: 5,
              paddingRight: 5,
            }}
            >
              {this.props.movie.location}
            </text>
          </div>
          <text style={{
            marginTop: "5px",
            fontWeight: "bold",
            fontSize: "2vmax",
            width: "13vmax",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
          >
            {this.props.movie.name}
          </text>
        </div>
      </li >
    );
  }


};
