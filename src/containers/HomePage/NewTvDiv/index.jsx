import React from "react";
import RecTabMovie from "../../../component/RecTabMovie";
import Title from "../../../component/MovieListTitle";
import RequestUrl from "../../../constant/Url";

const NewMovieDiv = (props) => (
  <div style={{
    display: "flex", flexDirection: "column", textAlign: "left", borderRadius: "10px", background: "#fff", marginTop: "30px",
  }}
  >
    <Title title1="最新" title2="电视剧" />
    <RecTabMovie tabs={["最新", "国产", "港剧", "美剧", "日剧"]}
      url={RequestUrl.WebRoot + RequestUrl.IndexNewTVs}
      history={props.history} />
  </div>
);

export default NewMovieDiv;
