import styled from "styled-components";
import { Badge, Col, Table, Button, Layout, Row, Input, Card } from "antd";

const { Meta } = Card;

export const ContainerDrivers = styled.div`
  background: #fff;
  min-height: 500px;
`;

export const LayoutDrivers = styled(Layout)`
  background: #fff;
  margin: 2%;
`;
export const InputDrivers = styled(Input)`
  margin: 5px;
`;

export const TableDrivers = styled(Table)``;
export const ColDrivers = styled(Col)``;
export const BadgeDrivers = styled(Badge)``;
export const ButtonDrivers = styled(Button)``;
export const RowDrivers = styled(Row)`
  padding: 10%;
`;
export const CardDrivers = styled(Card)`
  border-radius: 3%;
  margin: 5%;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;
export const MetaDrivers = styled(Meta)`
  text-align: center;
`;

export const ButtonAddDrivers = styled(Button)`
  margin-bottom: 10px;
`;

export const InputDriversSearch = styled(Input)`
  margin-bottom: 5px;
`;

export const ImgCardDrivers = styled.img`
  width: 50%;
  margin-left: 25%;
`;
