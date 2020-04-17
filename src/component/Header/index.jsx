/*
 * @Author: BaojunCZ
 * @Date: 2019-01-06 21:41:03
 * @LastEditors: your name
 * @LastEditTime: 2019-02-08 14:10:43
 * @Description: Header
 */
import React from "react";
import Input from "antd/es/input";
import Color from "../../utils/color";
import Urls from "../../constant/Url";

const Search = Input.Search;

const Styles = {
  Content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "7vmin",
    paddingRight: "5vmin",
    background: Color.PrimaryColor,
    height: "14vmin",
    flexWrap: "wrap",
  },
};

const Header = (props) => (
  <div style={Styles.Content}>
    <div style={{ textAlign: "center" }}>
      <a href={Urls.SLYS_IP} target="_blank" rel='noreferrer noopener'>
        <text style={{ color: "#fff", fontSize: "6vmin" }}>双龙影视</text>
      </a>
      <a href={Urls.SLYS_URL} target="_blank" rel='noreferrer noopener'>
        <text style={{ color: "#fff", fontSize: "3vmin", marginLeft: "3vmin", textDecoration: "underline", fontStyle: "italic" }}>slys.in</text>
      </a>
    </div>
    {SearchDiv(props)}
  </div>
);

const SearchDiv = (props) => {
  if (props.history !== undefined) {
    return <div style={{ textAlign: "center" }}>
      <Search placeholder="片名/导演/演员"
        style={{ width: "45vmin" }}
        size="small"
        onSearch={value => {
          if (value.length > 0) {
            window.open(Urls.SLYS_IP + "/find/" + value)
            // props.history.push("/find/" + value);
          }
        }} />
    </div>
  } else {
    return null;
  }
};

export default Header;
