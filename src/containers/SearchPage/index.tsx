import * as React from 'react';
import Urls from '../../constant/Url';
import Service from '../.././utils/service';
import { Layout, Spin, message, Pagination } from "antd";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import RecMovieList from "../../component/RecMovieList";
import PropTypes from 'prop-types';

const { Content } = Layout;

interface Props {
  match: {
    params: {
      search: string
    }
  },
  history: any
}

interface States {
  showMovies: any,
  total: number,
  search: string,
}

const pageSize = 30;
let movies: any = undefined;

export default class SearchPage extends React.Component<Props, States> {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      showMovies: undefined,
      total: 0,
      search: props.match.params.search
    }
  }
  componentWillReceiveProps(nextProps: Props) {
    this._getMovie(Urls.WebRoot + Urls.SearchAll + nextProps.match.params.search)
  }
  componentDidMount() {
    this._getMovie(Urls.WebRoot + Urls.SearchAll + this.props.match.params.search);
  }

  render() {
    return (
      <Layout>
        <Header history={this.props.history} />
        <Content style={{ marginTop: "5vh", marginLeft: "10vw", marginRight: "10vw", textAlign: "center", }}>
          {this._render()}
        </Content>
        <Footer />
      </Layout>
    );
  }

  _getMovie(url: string) {
    Service.getMovie(url).then((data) => {
      if (data !== undefined) {
        movies = data;
        this.setState({ showMovies: this._getShowMovies(0), total: data.length });
      } else {
        message.error("加载失败，请刷新网页");
      }
    });
  }

  _getShowMovies(index: number) {
    let tempMovies = [];
    for (let i = 0; i < pageSize; i++) {
      let id = index * pageSize + i;
      if (movies[id] !== undefined) {
        tempMovies.push(movies[index * pageSize + i]);
      }
    }
    return tempMovies;
  }

  _render() {
    if (this.state.showMovies !== undefined) {
      if (this.state.showMovies.length === 0) {
        return (
          <text style={{ fontWeight: 'bold', fontSize: 20 }}>
            对不起，没有此电影
          </text>
        )
      } else {
        return (
          <div style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            borderRadius: "10px",
            background: "#fff",
            paddingTop: 30,
            paddingBottom: 30,
          }}>
            <div style={{ textAlign: 'center', marginLeft: '30px' }}>
              <RecMovieList movies={this.state.showMovies} history={this.props.history} />
            </div>
            <Pagination defaultCurrent={1} total={this.state.total} defaultPageSize={pageSize} onChange={(page) => {
              this.setState({ showMovies: this._getShowMovies(page - 1) });
            }} />
          </div>
        )
      }
    } else {
      return (<Spin size="large" />)
    }
  }
}