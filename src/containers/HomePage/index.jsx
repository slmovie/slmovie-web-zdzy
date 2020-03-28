/*
 * @Author: BaojunCZ
 * @Date: 2019-01-03 19:21:28
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 18:06:12
 */
import React from "react";
import { Layout } from "antd";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import HotMovie from "./HotMovieDiv";
import NewMovie from "./NewMovieDiv";
import NewTv from "./NewTvDiv";

const { Content } = Layout;

class HomePage extends React.Component {

  render() {
    return (
      <Layout>
        <Header history={this.props.history} />
        <Content style={{
          marginTop: "5vh", marginLeft: "10vw", marginRight: "10vw", textAlign: "center",
        }}
        >
          <HotMovie history={this.props.history} />
          <NewMovie history={this.props.history} />
          <NewTv history={this.props.history} />
        </Content>
        <Footer />
      </Layout >
    );
  }
};

export default HomePage;
