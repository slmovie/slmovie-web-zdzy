/*
 * @Author: BaojunCZ
 * @Date: 2019-01-06 21:30:08
 * @LastEditors: your name
 * @LastEditTime: 2019-01-08 11:38:34
 * @Description: hot movie component
 */
import React from "react";
import RecMovieList from "../../component/RecMovieList";
import Title from "../../component/MovieListTitle";
import RequestUrl from "../../constant/Url";

const HotMovieDiv = () => (
  <div style={{
    display: "flex", flexDirection: "column", textAlign: "left", borderRadius: "10px", background: "#fff",
  }}
  >
    <Title title1="热门" title2="电影" />
    <RecMovieList url={RequestUrl.WebRoot + RequestUrl.IndexHotMovies} />
  </div>
);

export default HotMovieDiv;
