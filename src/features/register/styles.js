import styled from "styled-components";
import { Form, Icon, Input, Button, Layout } from "antd";

const FormItem = Form.Item;
const { Footer, Content, Sider } = Layout;

export const FormRegister = styled(Form)`
  margin: auto;
  width: 25%;
  min-width: 250px;
  margin-top: 6%;
`;
export const IconRegister = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`;
export const InputRegister = styled(Input)`
  color: rgba(0, 0, 0, 0.25);
`;
export const ButtonRegister = styled(Button)`
  width: 100%;
`;

export const LayoutRegister = styled(Layout)`
  background: white;
  height: auto;
  min-height: auto;
`;
export const FormItemRegister = styled(FormItem)``;

export const ContentRegister = styled(Content)`
  padding: 5%;
`;
export const FooterRegister = styled(Footer)`
  text-align: center;
`;
export const ContainerRegister = styled.div`
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

export const SiderRegister = styled(Sider)``;

export const LayoutMain = styled(Layout)`
  height: -webkit-fill-available;
  background: white;
`;

export const ImageBackgroundRegister = styled.img`
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