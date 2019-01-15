/*
 * @Author: BaojunCZ
 * @Date: 2019-01-07 11:18:54
 * @LastEditors: your name
 * @LastEditTime: 2019-01-08 10:14:20
 * @Description: recmmand movie title
 */
import React from "react";
import Color from "../../utils/color";

const Styles = {
  Content: {
    borderBlockEndStyle: "solid",
    borderWidth: "0.3px",
    borderColor: Color.BorderColor,
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "10px",
  },
  MarginContent: {
    margin: "10px",
    marginBottom: "10px",
  },
  OutStandingText: {
    color: Color.TitleOutStanding,
    fontSize: "1.5em",
    fontWeight: "bold",
    letterSpacing: "3px",
  },
  NormalText: {
    fontSize: "1.3em",
    fontWeight: "bold",
  },
};

const MovieListTitle = (props) => {
  const { title1, title2 } = props;
  return (
    <div style={Styles.Content}>
      <div style={Styles.MarginContent}>
        <text style={Styles.OutStandingText}>
          {title1}
        </text>
        <text style={Styles.NormalText}>{title2}</text>
      </div>
    </div>
  );
};
export default MovieListTitle;
