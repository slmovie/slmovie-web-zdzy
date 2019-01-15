import React from "react";
import { Tabs } from "antd";
import RecMovieList from "../RecMovieList";

const TabPane = Tabs.TabPane;

class RecTabMovie extends React.Component {
  renderTabs() {
    const { tabs, url } = this.props;
    const tablist = [];
    for (let i = 0; i < tabs.length; i += 1) {
      tablist.push(
        <TabPane tab={tabs[i]} key={i}>
          <RecMovieList url={url + i} />
        </TabPane>,
      );
    }
    return tablist;
  }

  render() {
    return (
      <Tabs defaultActiveKey="0" style={{ marginLeft: "20px", marginRight: "20px" }}>
        {this.renderTabs()}
      </Tabs>
    );
  }
}

export default RecTabMovie;