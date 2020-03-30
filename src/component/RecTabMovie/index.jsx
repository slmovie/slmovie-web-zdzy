import React from "react";
import Tabs from "antd/es/tabs";
import RecMovieList from "../RecMovieList";

const TabPane = Tabs.TabPane;

class RecTabMovie extends React.Component {
  renderTabs() {
    const { tabs, url } = this.props;
    const tablist = [];
    for (let i = 0; i < tabs.length; i += 1) {
      tablist.push(
        <TabPane tab={tabs[i]} key={i}>
          <RecMovieList url={url + i} history={this.props.history} />
        </TabPane>,
      );
    }
    return tablist;
  }

  render() {
    return (
      <Tabs defaultActiveKey="0" style={{ marginLeft: "2vmin", marginRight: "2vmin" }}>
        {this.renderTabs()}
      </Tabs>
    );
  }
}

export default RecTabMovie;
