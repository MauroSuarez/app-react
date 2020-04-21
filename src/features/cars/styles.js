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
  Select
} from "antd";

const FormItem = Form.Item;
const { Footer, Content, Sider } = Layout;
const { Meta } = Card;
const { Option } = Select;

export const SelectCar = styled(Select)`
  width: 100%;
`;
export const OptionCar = styled(Option)``;
export const FormCar = styled.div`
  margin: auto;
  min-width: 250px;
`;
export const IconCar = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`;
export const InputCar = styled(Input)`
  color: rgba(0, 0, 0, 0.25);
  width: 100%;
`;
export const ButtonCar = styled(Button)`
  width: 100%;
`;

export const LayoutCar = styled(Layout)`
  background: white;
  height: auto;
  min-height: auto;
`;
export const FormItemCar = styled.div`
  padding: 2%;
`;

export const ContentCar = styled(Content)``;
export const FooterCar = styled(Footer)`
  text-align: center;
`;
export const ContainerCar = styled.div`
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

export const SiderCar = styled(Sider)``;

export const LayoutMain = styled(Layout)`
  height: -webkit-fill-available;
  background: white;
  margin: 2%;
`;

export const ImageBackgroundCar = styled.img`
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

export const CardCar = styled(Card)`
  margin: 5%;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
`;

export const MetaCar = styled(Meta)`
  text-align: center;
`;

export const CardGridCar = styled(Card.Grid)``;

export const ColCar = styled(Col)`
  padding: 1%;
`;
export const RowCar = styled(Row)``;

export const ImgCardCar = styled.img`
  width: 50%;
  margin-left: 25%;
`;
