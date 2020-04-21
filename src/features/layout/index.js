import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout, Breadcrumb, } from 'antd';
import HeaderBar from './components/header';
import MenuBar from './components/menu';
import FooterBar from './components/footer';
import AppRouter from './AppRouter';

const { Content } = Layout;

class WebApp extends React.Component {
  render() {
    const { url } = this.props.match;
    return (
      <Layout>
        <HeaderBar>
          <div className="logo" />
          <MenuBar url={url} />
        </HeaderBar>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
           <AppRouter url={url} />
          </div>
        </Content>
        <FooterBar />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.licenseReducer,
    stateLogin: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WebApp);