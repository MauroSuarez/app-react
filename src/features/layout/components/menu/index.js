import React from "react";
import {
  Link
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import options from "./options";

const stripTrailingSlash = str => {
  console.log(str);
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.getMenuItem = this.getMenuItem.bind(this);
  }

  getMenuItem = ({ singleOption }) => {
    const { key, label, leftIcon, children } = singleOption;
    const url = stripTrailingSlash(this.props.url);
    return (
      <Menu.Item key={key}>
        <Link to={`${url}/${key}`}>{label}</Link>
      </Menu.Item>
    );
  };

  render() {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {options.map(singleOption => this.getMenuItem({ singleOption }))}
      </Menu>
    );
  }
}

export default MenuBar;