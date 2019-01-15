/*
 * @Author: BaojunCZ
 * @Date: 2019-01-06 21:41:03
 * @LastEditors: your name
 * @LastEditTime: 2019-01-08 10:57:43
 * @Description: Header
 */
import React from "react";
import { Input } from "antd";
import Color from "../../utils/color";

const Styles = {
  Content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "10vw",
    paddingRight: "10vw",
    background: Color.PrimaryColor,
    height: "80px",
    flexWrap: "wrap",
  },
};

const Header = () => (
  <div style={Styles.Content}>
    <div style={{ textAlign: "center" }}><text style={{ color: "#fff", fontSize: "2em" }}>双龙影视</text></div>
    <div style={{ textAlign: "center" }}><Input placeholder="片名/导演/演员" style={{ width: "35vw" }} /></div>
  </div>
);

export default Header;
