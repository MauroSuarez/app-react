import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { Container, LabelItem, ContainerTitle } from "./styles";
import options from "./options";

const SubMenu = Menu.SubMenu;
const stripTrailingSlash = str => {
  if (str.substr(-1) === "/") {
    return str.substr(0, str.length - 1);
  }
  return str;
};

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.getMenuItem = this.getMenuItem.bind(this);
  }

  getMenuItem = ({ singleOption }) => {
    const { key, label, leftIcon, children } = singleOption;
    const url = stripTrailingSlash(this.props.url);

    // if (children) {
    //   return (
    //     <SubMenu
    //       key={key}
    //       title={
    //         <ContainerTitle>
    //           <Icon type={leftIcon} /> <LabelItem>{label}</LabelItem>
    //         </ContainerTitle>
    //       }
    //     >
    //       {children.map(child => {
    //         const linkTo = child.withoutDashboard
    //           ? `/${child.key}`
    //           : `${url}/${child.key}`;
    //         return (
    //           <Menu.Item key={child.key}>
    //             <Link to={linkTo}>{child.label}</Link>
    //           </Menu.Item>
    //         );
    //       })}
    //     </SubMenu>
    //   );
    // }
    return (
      
      <Menu.Item key={key}>                     
        <Icon type={leftIcon} />
        <LabelItem>{label}</LabelItem>
      </Menu.Item>
    );
  };
  render() {
    return (
      <Container>
        <Menu
          theme="dark"
          mode="inline"
          onClick={this.props.onClickMenu}
          selectedKeys={this.props.selectedKeys}
        >
          {options.map(singleOption => this.getMenuItem({ singleOption }))}
        </Menu>
      </Container>
    );
  }
}
