/*
 * @Author: BaojunCZ
 * @Date: 2019-01-03 19:21:28
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 13:49:36
 */
import React from "react";
import { Layout } from "antd";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import HotMovie from "./HotMovieDiv";
import NewMovie from "./NewMovieDiv";
import NewTv from "./NewTvDiv";

const { Content } = Layout;

const HomePage = () => (
  <Layout>
    <Header />
    <Content style={{
      marginTop: "5vh", marginLeft: "10vw", marginRight: "10vw", textAlign: "center",
    }}
    >
      <HotMovie />
      <NewMovie />
      <NewTv />
    </Content>
    <Footer />
  </Layout>
);

export default HomePage;
