import * as React from 'react';
import Urls from '../../constant/Url';
import Service from '../.././utils/service';
import { Layout, Spin, message } from "antd";
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
        <Content style={{ marginTop: "5vh", marginLeft: "10vw", marginRight: "10vw" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            borderRadius: "10px",
            background: "#fff",
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 30,
            paddingBottom: 30,
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
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={this.state.movie.post} alt={"post"} style={Styles.PostImg} />
            <ul style={Styles.InfoUl}>
              {this._renderInfo()}
            </ul>
          </div>
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

  _getDescribe(describe: string) {
    if (describe !== '') {
      return (
        <ul style={Styles.DescribeUl}>
          <li style={Styles.DescribeTitle}>剧情简介</li>
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
        <a href={url.download} style={{ textDecoration: 'none' }}>{name}</a>
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
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    PostImg: {
      width: 200,
      height: 200 * 180 / 130,
    },
    InfoUl: {
      listStyleType: 'none',
      padding: 0,
      marginLeft: 40,
      width: '50%'
    },
    InfoLi: {
      fontSize: 17,
      marginTop: 6,
    },
    UrlsUl: {
      listStyleType: 'none',
      padding: 0,
      marginTop: 30,
    },
    UrlLi: {
      fontSize: 20,
      marginTop: 15,
    },
    UrlInput: {
      fontSize: 18,
      width: '100%',
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
    DescribeTitle: {
      fontSize: 20,
    },
    DescribeText: {
      fontSize: 16,
      width: '100%',
      marginTop: 20,
    }
  }