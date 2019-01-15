/*
 * @Author: BaojunCZ
 * @Date: 2019-01-05 11:44:09
 * @LastEditors: your name
 * @LastEditTime: 2019-01-08 14:27:51
 * @Description: movie card in homepage
 */
import React from "react";

const MovieCard = (props) => {
  const { movie } = props;
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
      >
        <div style={{ position: "relative" }}>
          <img
            src={movie.post}
            alt="post"
            style={{
              width: 150, height: 207,
            }}
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
            {movie.year}
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
            {movie.douban}
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
          {movie.name}
        </text>
      </div>
    </li>
  );
};

export default MovieCard;
