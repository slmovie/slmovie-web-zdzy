/*
 * @Author: BaojunCZ
 * @Date: 2019-01-03 19:21:28
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 16:58:12
 */
import React from "react";
import { Layout } from "antd";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import HotMovie from "./HotMovieDiv";
import NewMovie from "./NewMovieDiv";
import NewTv from "./NewTvDiv";
import PropTypes from 'prop-types';

const { Content } = Layout;

class HomePage extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    return (
      <Layout>
        <Header />
        <Content style={{
          marginTop: "5vh", marginLeft: "10vw", marginRight: "10vw", textAlign: "center",
        }}
        >
          <HotMovie history={this.context.router.history} />
          <NewMovie history={this.context.router.history} />
          <NewTv history={this.context.router.history} />
        </Content>
        <Footer />
      </Layout >
    );
  }
};

export default HomePage;
