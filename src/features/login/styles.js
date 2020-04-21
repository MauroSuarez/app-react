import styled from "styled-components";
import { Form, Icon, Input, Button, Layout } from "antd";

const FormItem = Form.Item;
const { Footer, Content, Sider } = Layout;

export const FormLogin = styled(Form)`
  margin: auto;
  width: 25%;
  min-width: 250px;
  margin-top: 6%;
`;

export const IconLogin = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`;

export const InputLogin = styled(Input)`
  color: rgba(0, 0, 0, 0.25);
`;

export const ButtonLogin = styled(Button)`
  width: 100%;
`;

export const LayoutLogin = styled(Layout)`
  background: white;
  height: auto;
  min-height: auto;
`;
export const FormItemLogin = styled(FormItem)``;

export const ContentLogin = styled(Content)`
  padding: 10%;
`;

export const FooterLogin = styled(Footer)`
  text-align: center;
  background-color: #fff;
`;

export const ContainerLogin = styled.div`
  padding: 4%;
`;

export const ContainerLogo = styled.div`
  text-align: center;
  width: 100%;
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

export const SiderLogin = styled(Sider)``;

export const LayoutMain = styled(Layout)`
  height: -webkit-fill-available;
`;

export const ImageBackgroundLogin = styled.img`
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