import styled from "styled-components";
import { Form, Icon, Input, Button, Layout, Card, Col, Row } from "antd";

const FormItem = Form.Item;
const { Footer, Content, Sider } = Layout;
const { Meta } = Card;

export const FormUser = styled.div`
  margin: auto;
  min-width: 250px;
`;
export const IconUser = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`;
export const InputUser = styled(Input)`
  color: rgba(0, 0, 0, 0.25);
  width: 100%;
`;
export const ButtonUser = styled(Button)`
  width: 100%;
`;

export const LayoutUser = styled(Layout)`
  background: white;
  height: auto;
  min-height: auto;
`;
export const FormItemUser = styled.div`
  padding: 2%;
`;

export const ContentUser = styled(Content)``;
export const FooterUser = styled(Footer)`
  text-align: center;
`;
export const ContainerUser = styled.div`
  padding: 1%;
`;

export const ContainerLogo = styled.div`
  text-align: center;
`;

export const ContainerLogoMobile = styled.img`
  display: none;
  @media (max-width: 768px) {
    text-align: center;
    display: inline;
  }
`;

export const ContainerImg = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SiderUser = styled(Sider)``;

export const LayoutMain = styled(Layout)`
  height: -webkit-fill-available;
  background: white;
  margin: 2%;
`;

export const ImageBackgroundUser = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(images/background-photo.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
`;
export const LinkRight = styled.a`
  float: right;
`;

export const ContainerLink = styled.div`
  width: 100%;
`;

export const LinkLeft = styled.a`
  float: left;
`;

export const CardUser = styled(Card)`
  margin: 5%;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
`;

export const MetaUser = styled(Meta)`
  text-align: center;
`;

export const CardGridUser = styled(Card.Grid)``;

export const ColUser = styled(Col)`
  padding: 1%;
`;
export const RowUser = styled(Row)``;
