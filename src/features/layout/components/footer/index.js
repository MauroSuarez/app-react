import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterBar extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>©2020 Power By Ant Design</Footer>
    );
  }
}

export default FooterBar;