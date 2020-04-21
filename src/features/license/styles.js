import styled from "styled-components";
import {
  Form,
  Icon,
  Input,
  Button,
  Layout,
  Card,
  Col,
  Row,
  Select,
  Upload,
  Modal
} from "antd";

const FormItem = Form.Item;
const { Footer, Content, Sider } = Layout;
const { Meta } = Card;
const { Option } = Select;

export const SelectLicense = styled(Select)`
  width: 100%;
`;
export const OptionLicense = styled(Option)``;
export const UploadLicense = styled(Upload)``;
export const ModalLicense = styled(Modal)``;
export const FormLicense = styled.div`
  margin: auto;
  min-width: 250px;
`;
export const IconLicense = styled(Icon)`
`;
export const InputLicense = styled(Input)`
  color: rgba(0, 0, 0, 0.25);
  width: 100%;
`;
export const ButtonLicense = styled(Button)`
  width: 100%;
`;

export const LayoutLicense = styled(Layout)`
  background: white;
  height: auto;
  min-height: auto;
`;
export const FormItemLicense = styled.div`
  padding: 2%;
`;

export const ContentLicense = styled(Content)``;
export const FooterLicense = styled(Footer)`
  text-align: center;
`;
export const ContainerLicense = styled.div`
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

export const SiderLicense = styled(Sider)``;

export const LayoutMain = styled(Layout)`
  height: -webkit-fill-available;
  background: white;
  margin: 2%;
`;

export const ImageBackgroundLicense = styled.img`
  width: 100%;
  height: 100%;
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

export const CardLicense = styled(Card)`
  margin: 5%;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
`;

export const MetaLicense = styled(Meta)`
  text-align: center;
`;

export const CardGridLicense = styled(Card.Grid)``;

export const ColLicense = styled(Col)`
  padding: 1%;
`;
export const RowLicense = styled(Row)``;

export const ImgCardLicense = styled.img`
  width: 50%;
  margin-left: 25%;
`;

export const ImgModalLicense = styled.img`
  width: 100%;
`;
