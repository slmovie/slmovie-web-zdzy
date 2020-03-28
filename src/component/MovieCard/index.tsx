/*
 * @Author: BaojunCZ
 * @Date: 2019-01-05 11:44:09
 * @LastEditors: your name
 * @LastEditTime: 2019-02-07 17:19:55
 * @Description: movie card in homepage
 */
import React from "react";
import imgHolder from "../../res/image/img_holder.png";

interface Props {
  movie: any,
  history: any,
}

interface States {
  post: any,
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
        paddingLeft: 17,
        paddingRight: 17,
      }}
      >
        <div style={{
          display: "flex", flexDirection: "column", marginTop: "10px", alignItems: "center",
        }}
          onClick={() => {
            if (this.props.movie.address === undefined) {
              window.open("http://152.136.103.63:3000/sub/" + this.props.movie.id)
            } else {
              window.open("http://152.136.103.63:3000/sub/" + this.props.movie.address)
            }
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={this.state.post}
              alt="post"
              style={{
                width: 150, height: 207,
              }}
              onError={() => this.setState({ post: imgHolder })}
            />
            <text style={{
              position: "absolute",
              overflow: "hidden",
              color: "#000000",
              fontSize: 12,
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
              fontSize: 12,
              textAlign: "center",
              backgroundColor: "#d0d0d0",
              paddingLeft: 5,
              paddingRight: 5,
            }}
            >
              {this.props.movie.douban}
            </text>
          </div>
          <text style={{
            marginTop: "5px",
            fontWeight: "bold",
            fontSize: 15,
            width: 130,
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
