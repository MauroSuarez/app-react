import styled from 'styled-components';
import { Layout, Menu, Icon } from 'antd';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export const LayoutHome = styled(Layout)`
    min-height: 100vh;
`;

export const MenuHome = styled(Menu)`
    padding: 10;
`;

export const IconHome = styled(Icon)``;
export const IconSpanHome = styled.span``;

export const ContentHome = styled(Content)`
    margin: 0 16px;
`;

export const FooterHome = styled(Footer)`
    text-align: center;
    height: "auto";
`;

export const SubMenuHome = styled(SubMenu)`
    float: right
`;

export const SiderHome = styled(Sider)``;