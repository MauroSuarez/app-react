import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "./actions";
import {
  RowDrivers,
  LayoutDrivers,
  TableDrivers,
  ColDrivers,
  MetaDrivers,
  ButtonDrivers,
  ContainerDrivers,
  InputDrivers,
  CardDrivers,
  ImgCardDrivers
} from "./styles";
import { message } from "antd";
import ModalDrivers from "./components/modal";
import { ActionsUsers } from "../users/actions";
import * as DashActions from "../dashboard/actions";

class Drivers extends React.Component {
  _showModal = () => {
    const { actions } = this.props;
    actions.setVisible(true);
  };

  _showModalUpdate = request => {
    const { actions } = this.props;
    actions.setVisible(true);
    actions.setUpdate(true);
    actions.setID(request.id);
    actions.setDescripcion(request.descripcion);
    actions.setPrecio(request.precio);
    actions.setCategoria(request.categoria);
    actions.setCantidad(request.cantidad);
  };

  _handleOk = e => {
    const { actions } = this.props;
    const { descripcion, precio, categoria, cantidad } = this.props.state;
    actions.productAdd({
      descripcion: descripcion,
      precio: precio,
      categoria: categoria,
      cantidad: cantidad
    });
  };

  _handleUpdate = e => {
    const { actions } = this.props;
    const { descripcion, precio, categoria, cantidad, id } = this.props.state;
    actions.productUpdate({
      id: id,
      descripcion: descripcion,
      precio: precio,
      categoria: categoria,
      cantidad: cantidad
    });
  };

  _handleCancel = e => {
    const { actions } = this.props;
    actions.setVisible(false);
    actions.setUpdate(false);
    actions.clearAll();
  };

  componentDidMount() {
    const { actions } = this.props;
    this.props.actionsUsers.restartState();
  }
  _handleDelete = key => {
    const { actions } = this.props;
    actions.productDelete(key);
    message.error("Fila Eliminada");
  };

  _handleDelete = key => {
    const { actions } = this.props;
    actions.productDelete(key);
    message.error("Fila Eliminada");
  };

  render() {
    const columns = [
      {
        title: "Descripción",
        dataIndex: "descripcion",
        key: "descripcion",
        width: 400,
        sorter: (a, b) => a.descripcion.length - b.descripcion.length
      },
      {
        title: "Precio",
        dataIndex: "precio",
        key: "precio",
        width: 400,
        sorter: (a, b) => a.precio.length - b.precio.length
      },
      {
        title: "Categoria",
        dataIndex: "categoria",
        key: "categoria",
        width: 400
      },
      {
        title: "Cantidad",
        dataIndex: "cantidad",
        key: "cantidad",
        width: 300
      },
      {
        title: "Modificar",
        dataIndex: "",
        key: "x",
        width: 100,
        render: record => (
          <ButtonDrivers
            type="primary"
            shape="circle"
            icon="edit"
            onClick={() => this._showModalUpdate(record)}
          />
        )
      },
      {
        title: "Borrar",
        dataIndex: "id",
        key: "id",
        width: 100,
        render: record => (
          <ButtonDrivers
            type="danger"
            shape="circle"
            icon="delete"
            onClick={() => this._handleDelete(record)}
          />
        )
      }
    ];
    const { actions,actionsDash } = this.props;
    return (
      <ContainerDrivers>
        <LayoutDrivers>
          <RowDrivers>
            <ColDrivers span={8}>
            </ColDrivers>
            <ColDrivers span={8}>
            </ColDrivers>
            <ColDrivers span={8}>
            </ColDrivers>
          </RowDrivers>
        </LayoutDrivers>
        <ModalDrivers
          btnTextOk={this.props.state.update ? "Modificar" : "Agregar"}
          visible={this.props.state.visible}
          title={this.props.state.update ? "Modificar" : "Agregar"}
          handleOk={
            this.props.state.update ? this._handleUpdate : this._handleOk
          }
          handleCancel={this._handleCancel}
        >
          <InputDrivers
            onChange={e => actions.setDescripcion(e.target.value)}
            placeholder="Descripción"
            value={this.props.state.descripcion}
          />
          <InputDrivers
            onChange={e => actions.setPrecio(e.target.value)}
            placeholder="Precio"
            value={this.props.state.precio}
          />
          <InputDrivers
            onChange={e => actions.setCategoria(e.target.value)}
            placeholder="Categoria"
            value={this.props.state.categoria}
          />
          <InputDrivers
            onChange={e => actions.setCantidad(e.target.value)}
            placeholder="Cantidad"
            value={this.props.state.cantidad}
          />
        </ModalDrivers>
      </ContainerDrivers>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.homeReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...Actions }, dispatch),
    actionsUsers: bindActionCreators({ ...ActionsUsers }, dispatch),
    actionsDash: bindActionCreators({ ...DashActions.Actions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);
