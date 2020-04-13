import React from "react";
import RecTabMovie from "../../../component/RecTabMovie";
import Title from "../../../component/MovieListTitle";
import RequestUrl from "../../../constant/Url";

const NewMovieDiv = (props) => (
  <div style={{
    display: "flex", flexDirection: "column", textAlign: "left", borderRadius: "10px", background: "#fff", marginTop: "1vmax",
  }}
  >
    <Title title1="最新" title2="电视剧" />
    <RecTabMovie tabs={[12, 13, 14, 15, 19, 20, 21]}
      url={RequestUrl.WebRoot + RequestUrl.IndexNewMovies}
      history={props.history} />
  </div>
);

export default NewMovieDiv;
