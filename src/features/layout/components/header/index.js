import { Layout } from 'antd';
import React from "react";
import './styles.css';

const { Header } = Layout;

class HeaderBar extends React.Component {
  render() {
    return (
      <Header>
        <div className="logo" />
        {this.props.children}
      </Header>
    );
  }
}

export default HeaderBar;