import { Layout } from 'antd';
import React from "react";
import './style.css';

const { Header } = Layout;

class HeaderBar extends React.Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        {this.props.children}
      </Header>
    );
  }
}

export default HeaderBar;