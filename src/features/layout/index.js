import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../login/actions";
import { Layout, Button } from 'antd';
import HeaderBar from './components/header';
import MenuBar from './components/menu';
import FooterBar from './components/footer';
import BreadcrumbBar from './components/breadcrumb';
import AppRouter from './AppRouter';
import './styles.css';

const { Content } = Layout;

class WebApp extends React.Component {
  render() {
    const { url } = this.props.match;
    const { loginActions } = this.props;
    return (
      <Layout className="layout">
        <HeaderBar>
          <MenuBar url={url} {...loginActions} />
        </HeaderBar>
        <Content style={{ padding: '0 50px' }}>
          <BreadcrumbBar />
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
    loginActions: bindActionCreators({ ...LoginActions.Actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WebApp);