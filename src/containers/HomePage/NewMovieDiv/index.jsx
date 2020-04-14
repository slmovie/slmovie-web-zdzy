import React from "react";
import RecTabMovie from "../../../component/RecTabMovie";
import Title from "../../../component/MovieListTitle";
import RequestUrl from "../../../constant/Url";

const NewMovieDiv = (props) => (
  <div style={{
    display: "flex", flexDirection: "column", textAlign: "left", borderRadius: "10px", background: "#fff", marginTop: "1vmax",
  }}
  >
    <Title title1="最新" title2="电影" />
    <RecTabMovie tabs={[5, 6, 7, 4, 8, 9, 10, 11]}
      url={RequestUrl.ApiRoot + RequestUrl.IndexNewMovies}
      history={props.history} />
  </div>
);

export default NewMovieDiv;
