import React from "react";
import InfoFeature from "./components/Info/Info";
import Chart from "./components/Chart/Chart";
import { userData } from "../../dummyData";
import "./home.scss";
import WidgetSm from "./components/WidgetSm/WidgetSm";
import WidgetLg from "./components/WidgetLg/WidgetLg";

function HomePage(props) {
  return (
    <div className="home">
      <InfoFeature />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default HomePage;
