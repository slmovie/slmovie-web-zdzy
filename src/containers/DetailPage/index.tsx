import * as React from 'react';
import Urls from '../../constant/Url';
import Service from '../.././utils/service';
import Layout from "antd/es/layout"
import Spin from "antd/es/spin"
import message from "antd/es/message"
import Rate from "antd/es/rate"
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const { Content } = Layout;

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

interface States {
  movie: any,
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
    Service.getMovie(url).then((data) => {
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
        <div style={{ marginTop: "2vmax" }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center', justifyItems: 'center' }}>
            <img src={this.state.movie.post} alt={"post"} style={Styles.PostImg} />
            {this._renderAverageStar()}
          </div>
          <ul style={Styles.InfoUl}>
            {this._renderInfo()}
            {this._renderImdb()}
            {this._renderDouban()}
            {this._renderAverage()}
          </ul>
          {this._getDescribe(this.state.movie.describe)}
          <ul style={Styles.UrlsUl}>
            {this._renderUrls()}
          </ul>
        </div>
      )
    } else {
      return (<Spin size="large" />)
    }
  }

  //渲染电影信息
  _renderInfo() {
    let info = []
    for (let i = 0; i < this.state.movie.detail.length; i++) {
      if (this.state.movie.detail[i] !== '详情:')
        if (this.state.movie.detail[i].indexOf("IMDB") === -1)
          info.push(this._getInfo(this.state.movie.detail[i]))
    }
    return info;
  }

  //电影信息样式
  _getInfo(info: any) {
    return (
      <li style={Styles.InfoLi}>{info}</li>
    )
  }

  _renderImdb() {
    if (this.state.movie.details.IMDB)
      return (
        <li style={Styles.InfoLi}>
          <text>{"IMDB："}</text>
          <a href={"https://www.imdb.com/title/" + this.state.movie.details.IMDB} target="_blank" rel="noopener noreferrer">
            {this.state.movie.details.IMDB}
          </a>
        </li>
      )
  }

  _renderDouban() {
    if (this.state.movie.doubanID)
      return (
        <li style={Styles.InfoLi}>
          <text>{"豆瓣："}</text>
          <a href={"https://movie.douban.com/subject/" + this.state.movie.doubanID} target="_blank" rel="noopener noreferrer">
            {this.state.movie.doubanID}
          </a>
        </li>
      )
  }

  _renderAverageStar() {
    if (this.state.movie.details.average !== "0") {
      const average = parseFloat(this.state.movie.details.average);
      return (
        <Rate defaultValue={average / 2} allowHalf={true} disabled={true} style={{ marginTop: 10 }} />
      )
    }
  }

  _renderAverage() {
    if (this.state.movie.details.average !== "0") {
      return (
        <li style={Styles.InfoLi}>{"评分：" + this.state.movie.details.average}</li>
      )
    }
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

  //渲染下载链接
  _renderUrls() {
    let urls = []
    for (let i = 0; i < this.state.movie.files.length; i++) {
      urls.push(this._getUrl(this.state.movie.files[i]))
    }
    return urls;
  }

  //下载地址样式
  _getUrl(url: any) {
    let name = ''
    if (url.fileSize !== '') {
      name = '[' + url.fileSize + ']'
    }
    name = name + url.name
    return (
      <li style={Styles.UrlLi}>
        <a href={url.download} style={{ textDecoration: 'none', fontSize: "2vmax" }}>{name}</a>
        <div>
          <input style={Styles.UrlInput}
            value={url.download}
            onFocus={(e) => e.target.select()} />
        </div>
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
    },
    InfoLi: {
      fontSize: "1.7vmax",
      marginTop: "0.5vmax",
    },
    UrlsUl: {
      listStyleType: 'none',
      padding: 0,
      marginTop: 30,
    },
    UrlLi: {
      fontSize: "1.7vmax",
      marginTop: "0.5vmax",
    },
    UrlInput: {
      fontSize: "2vmax",
      width: '100%',
      backgroundColor: '#f9f9f9',
      border: 'solid',
      borderColor: '#e4e4e4',
      borderWidth: 1,
      textOverflow: 'ellipsis',
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