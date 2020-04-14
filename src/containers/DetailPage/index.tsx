import * as React from 'react';
import Urls from '../../constant/Url';
import Service from '../.././utils/service';
import Layout from "antd/es/layout"
import Spin from "antd/es/spin"
import message from "antd/es/message"
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { IMovieDetail, IMovieFile } from '../../typing/detail-typing';
import { getMovieType } from '../../utils/movie-type';

const { Content } = Layout;

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

interface States {
  movie: IMovieDetail | undefined,
}

export default class DetailPage extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {
      movie: undefined,
    }
  }

  componentDidMount() {
    this._getMovie();
  }

  render() {
    return (
      <Layout>
        <Header />
        <Content style={{ marginTop: "5vmin", marginLeft: "5vmin", marginRight: "5vmin" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            borderRadius: "10px",
            background: "#fff",
            paddingLeft: "5vmin",
            paddingRight: "5vmin",
            paddingTop: "3vmin",
            paddingBottom: "3vmin",
          }}>
            {this._renderDetail()}
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }

  _getMovie() {
    const url = Urls.WebRoot + Urls.Detail + this.props.match.params.id;
    Service.getMovie(url).then((data: IMovieDetail) => {
      if (data !== undefined) {
        this.setState({ movie: data });
      } else {
        message.error("加载失败，请刷新网页")
      }
    });
  }

  //渲染详情页面
  _renderDetail() {
    if (this.state.movie !== undefined) {
      return (
        <div style={{ marginTop: "2vmax", display: "flex", flexDirection: "column" }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center', justifyItems: 'center' }}>
            <img src={this.state.movie.post} alt={"post"} style={Styles.PostImg} />
          </div>
          <ul style={Styles.InfoUl}>
            {this._renderInfo()}
          </ul>
          {this._getDescribe(this.state.movie.describe)}
          {this._renderDownloadDiv(this.state.movie.downloadUrls)}
          {this._renderOnlineDiv("在线播放", this.state.movie.webUrls)}
          {this._renderOnlineDiv("m3u8 在线播放", this.state.movie.m3u8Urls)}
        </div>
      )
    } else {
      return (<Spin size="large" />)
    }
  }

  //渲染电影信息
  _renderInfo() {
    const { movie } = this.state
    let info = []
    if (movie) {
      info.push(this._getInfo("片名：" + movie.name))
      info.push(this._getInfo("上映年代：" + movie.year))
      info.push(this._getInfo("地区：" + movie.location))
      if (movie.type) {
        info.push(this._getInfo("类型：" + getMovieType(Number(movie.type))))
      }
      info.push(this._getInfo("导演： " + movie.director))
      info.push(this._getInfo("主演：" + movie.actor))
      info.push(this._getInfo("更新时间：" + movie.addTime))
    }
    return info;
  }

  //电影信息样式
  _getInfo(info: any) {
    return (
      <li style={Styles.InfoLi}>{info}</li>
    )
  }

  _getDescribe(describe: string) {
    if (describe !== '') {
      return (
        <ul style={Styles.DescribeUl}>
          <li style={{ fontSize: "2.5vmax", fontWeight: "bold" }}>
            <text >剧情简介</text>
          </li>
          <li style={Styles.DescribeText}>{describe}</li>
        </ul>
      )
    } else {
      return null
    }
  }

  _renderDownloadDiv(downloadUrls: IMovieFile[] | undefined) {
    if (downloadUrls)
      return (
        <div>
          <text style={{ fontSize: "2.5vmax", fontWeight: "bold" }}>
            下载地址
        </text>
          <ul style={Styles.UrlsUl}>
            {this._renderDownloadUrls(downloadUrls)}
          </ul>
        </div>
      )
  }

  //渲染下载链接
  _renderDownloadUrls(downloadUrls: IMovieFile[]) {
    let urls = []
    for (let i = 0; i < downloadUrls.length; i++) {
      urls.push(this._getDownloadUrl(downloadUrls[i]))
    }
    return urls;
  }

  //下载地址样式
  _getDownloadUrl(file: IMovieFile) {
    if (file)
      return (
        <li style={Styles.UrlLi}>
          <a href={file.url} target="_blank" rel='noreferrer noopener' style={{ textDecoration: 'none', fontSize: "2vmax" }}>{file.name}</a>
          <div>
            <input style={Styles.UrlInput}
              value={file.url}
              onFocus={(e) => e.target.select()} />
          </div>
        </li>
      )
  }

  _renderOnlineDiv(title: string, webUrls: IMovieFile[] | undefined) {
    if (webUrls && webUrls.length > 0) {
      return (
        <div style={{ marginTop: "0.5vmax" }}>
          <text style={{ fontSize: "2.5vmax", fontWeight: "bold" }}>
            {title}
          </text>
          <ul style={Styles.UrlsUl}>
            {this._renderOnlineUrls(webUrls)}
          </ul>
        </div>
      )
    }
  }

  _renderOnlineUrls(webUrls: IMovieFile[]) {
    let urls = []
    for (let i = 0; i < webUrls.length; i++) {
      urls.push(this._getOnlineUrl(webUrls[i]))
    }
    return urls;
  }

  _getOnlineUrl(file: IMovieFile) {
    if (file)
      return (
        <li style={{
          fontSize: "1.7vmax",
          marginTop: "0.5vmax",
          marginRight: "0.5vmax",
          float: "left",
        }}>
          <a href={file.url} target="_blank" rel='noreferrer noopener' style={{ display: 'inline-block', fontSize: "2vmax" }}>{file.name}</a>
        </li>
      )
  }

}

const
  Styles = {
    Content: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    PostImg: {
      width: "50vmin",
      height: "69vmin",
    },
    InfoUl: {
      listStyleType: 'none',
      padding: 0,
      marginTop: "2.5vmax",
    },
    InfoLi: {
      fontSize: "1.7vmax",
      marginTop: "0.5vmax",
    },
    UrlsUl: {
      listStyleType: 'none',
      padding: 0,
      marginTop: 10,
    },
    UrlLi: {
      fontSize: "1.7vmax",
      marginTop: "0.5vmax",
    },
    UrlInput: {
      fontSize: "2vmax",
      width: '100%',
      paddingLeft: "5px",
      backgroundColor: '#f9f9f9',
      border: 'solid',
      borderColor: '#e4e4e4',
      borderWidth: 1,
      textOverflow: 'ellipsis'
    },
    DescribeUl: {
      listStyleType: 'none',
      padding: 0,
      marginTop: 30,
    },
    DescribeText: {
      fontSize: "1.7vmax",
      width: '100%',
      marginTop: "1vmax",
    }
  }