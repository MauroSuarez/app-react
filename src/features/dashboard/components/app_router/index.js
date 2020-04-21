import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "../../../../utils/asyncFunc";
import { Container } from "./styles";

export default class AppRouter extends Component {
  constructor(props) {
    super(props);
  }
  _renderSwitch() {
    const { path } = this.props;

    switch (path) {
      case "inicio":
        return (
          <Route
            exact={false}
            path="/"
            component={asyncComponent(() => import("../../../home/index"))}
          />
        );
      case "users":
        return (
          <Route
            exact={false}
            path="/"
            component={asyncComponent(() => import("../../../users/index"))}
          />
        );
      case "car":
        return (
          <Route
            exact={false}
            path="/"
            component={asyncComponent(() => import("../../../cars/index"))}
          />
        );
      case "license":
        return (
          <Route
            exact={false}
            path="/"
            component={asyncComponent(() => import("../../../layout/index"))}
          />
        );
      default:
      case "inicio":
        return (
          <Route
            exact={false}
            path="/"
            component={asyncComponent(() => import("../../../home/index"))}
          />
        );
    }
  }

  render() {
    return <Container>{this._renderSwitch()}</Container>;
  }
}
