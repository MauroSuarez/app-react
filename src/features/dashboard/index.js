import React from "react";
import { connect } from "react-redux";
import * as LoginActions from "../login/actions";
import Sidebar from "./components/sidebar";
import AppRouter from "./components/app_router";
import { bindActionCreators } from "redux";
import { Actions } from "./actions";
import {
  LayoutHome,
  MenuHome,
  ContentHome,
  SiderHome,
  SubMenuHome,
  FooterHome,
  IconSpanHome,
  IconHome
} from "./styles";
import * as ActionsUsers from "../users/actions";
import * as ActionsCars from "../cars/actions";

class Home extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.setUrl(this.props.match);
    actions.dashboardRequest();
  }

  _handleClick(e) {
    if (e.key === "signOut") {
      this.actions.loginActions.signOut();
      localStorage.clear();
    }
  }

  render() {
    const { url } = this.props.match;
    const { current } = this.props.state;
    const { actions, loginActions, usersActions,carsActions } = this.props;
    return (
      <LayoutHome>
        <SiderHome
          collapsible
          collapsed={this.props.state.collapsed}
          onCollapse={() => actions.setCollapsed()}
        >
          <Sidebar
            url={url}
            selectedKeys={current}
            onClickMenu={e => actions.setPath(e.key)}
          />
        </SiderHome>
        <LayoutHome>
          <MenuHome
            mode="horizontal"
            onClick={e =>
              e.key === "signOut"
                ? (loginActions.signOut(),
                  localStorage.clear(),
                  usersActions.userSetInitialStateRestart(),
                  carsActions.carSetInitialStateRestart())
                : null
            }
          >
            <SubMenuHome
              title={
                <IconSpanHome>
                  <IconHome type="user" />
                  {this.props.stateLogin.username}
                </IconSpanHome>
              }
            >
              <MenuHome.Item key="signOut">
                <IconSpanHome>
                  <IconHome type="poweroff" />
                  Cerrar sesion
                </IconSpanHome>
              </MenuHome.Item>
            </SubMenuHome>
          </MenuHome>
          <ContentHome>
            <AppRouter path={this.props.state.path} />
          </ContentHome>
          <FooterHome>©2020 Power by Ant Design</FooterHome>
        </LayoutHome>
      </LayoutHome>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.dashboardReducer,
    stateLogin: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...Actions }, dispatch),
    loginActions: bindActionCreators({ ...LoginActions.Actions }, dispatch),
    usersActions: bindActionCreators({ ...ActionsUsers.Actions }, dispatch),
    carsActions: bindActionCreators({ ...ActionsCars.Actions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
