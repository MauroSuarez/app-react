import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from "../../utils/asyncFunc";

const routes = [
  {
      path: "car",
      component: asyncComponent(() => import("../cars/index"))
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;