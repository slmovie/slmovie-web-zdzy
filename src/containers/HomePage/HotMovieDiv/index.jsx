/*
 * @Author: BaojunCZ
 * @Date: 2019-01-06 21:30:08
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 19:51:53
 * @Description: hot movie component
 */
import React from "react";
import RecMovieList from "../../../component/RecMovieList";
import Title from "../../../component/MovieListTitle";
import RequestUrl from "../../../constant/Url";

const HotMovieDiv = (props) => (
  <div style={{
    display: "flex", flexDirection: "column", textAlign: "left", borderRadius: "10px", background: "#fff",
  }}
  >
    <Title title1="热门" title2="电影" />
    <div style={{ marginLeft: '2vmin' }}>
      <RecMovieList url={RequestUrl.ApiRoot + RequestUrl.IndexHotMovies} history={props.history} />
    </div>
  </div>
);

export default HotMovieDiv;
