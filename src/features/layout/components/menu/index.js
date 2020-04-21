import React from "react";
import {
  Link
} from "react-router-dom";
import { Menu, Button } from 'antd';
import options from "./options";
import './styles.css';

const stripTrailingSlash = str => {
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
    const { id, key, label, leftIcon, children } = singleOption;
    const url = stripTrailingSlash(this.props.url);
    console.log(this.props);
    return (
      <Menu.Item key={id}>
        {
          key !== 'close'
            ? <Link to={`${url}/${key}`}>{label}</Link>
            : <Button className="logout" onClick={() => [ this.props.signOut(), localStorage.clear() ] }>Salir</Button>
        }
      </Menu.Item>
    );
  };

  render() {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        {options.map(singleOption => this.getMenuItem({ singleOption }))}
      </Menu>
    );
  }
}

export default MenuBar;