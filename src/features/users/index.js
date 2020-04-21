import React from "react";
import {
  FormUser,
  IconUser,
  InputUser,
  ButtonUser,
  FormItemUser,
  ContentUser,
  CardUser,
  CardGridUser,
  MetaUser,
  ColUser,
  RowUser
} from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "./actions";

class UserForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  componentDidMount() {
    if (this.props.stateLogin.userInfo.length !== undefined) {
      this.props.actions.getUserRequest(this.props.stateLogin.userInfo[0].id);
    }
  }

  render() {
    const { actions } = this.props;
    return (
      <ContentUser>
        <CardUser title="DATOS PERSONALES">
          <RowUser>
            <ColUser span={3}>
              {this.props.state.update ? (
                <ButtonUser
                  onClick={() => actions.userSetUpdate("Se cancelo la edicion")}
                >
                  Cancelar
                </ButtonUser>
              ) : (
                <ButtonUser
                  type="primary"
                  onClick={() =>
                    actions.userSetUpdate("Vas a actualizar tus datos")
                  }
                >
                  Editar
                </ButtonUser>
              )}
            </ColUser>
          </RowUser>
          <FormUser>
            <RowUser>
              <ColUser span={12}>
                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="Nombre"
                    onChange={e => actions.userSetName(e.target.value)}
                    value={this.props.state.name}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>
                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="Apellido"
                    onChange={e => actions.userSetSurName(e.target.value)}
                    value={this.props.state.surName}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>

                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="DNI"
                    onChange={e => actions.userSetDni(e.target.value)}
                    value={this.props.state.dni}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>
                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="Fecha de nacimiento"
                    onChange={e => actions.userSetDate(e.target.value)}
                    value={this.props.state.date}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>
              </ColUser>
              <ColUser span={12}>
                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="Calle"
                    onChange={e => actions.userSetStreet(e.target.value)}
                    value={this.props.state.street}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>
                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="Numero"
                    onChange={e => actions.userSetNumer(e.target.value)}
                    value={this.props.state.number}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>
                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="Pronvincia"
                    onChange={e => actions.userSetProvince(e.target.value)}
                    value={this.props.state.province}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>
                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="Localidad"
                    onChange={e => actions.userSetLocaltion(e.target.value)}
                    value={this.props.state.localtion}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>
                <FormItemUser>
                  <InputUser
                    prefix={<IconUser type="user" />}
                    placeholder="Codigo postal"
                    onChange={e => actions.userSetCp(e.target.value)}
                    value={this.props.state.cp}
                    disabled={this.props.state.disabled}
                  />
                </FormItemUser>
              </ColUser>
              <FormItemUser>
                <ButtonUser
                  type="primary"
                  className="login-form-button"
                  disabled={this.props.state.disabled}
                  onClick={() =>
                    actions.userRequest({
                      name: this.props.state.name,
                      surName: this.props.state.surName,
                      dni: this.props.state.dni,
                      date: this.props.state.date,
                      street: this.props.state.street,
                      number: this.props.state.number,
                      province: this.props.state.province,
                      localtion: this.props.state.localtion,
                      username: this.props.stateLogin.username,
                      password: this.props.stateLogin.password,
                      cp: this.props.state.cp,
                      update: this.props.state.update
                    })
                  }
                >
                  {this.props.state.update ? "Actualizar" : "Guardar"}
                </ButtonUser>
              </FormItemUser>
            </RowUser>
          </FormUser>
        </CardUser>
      </ContentUser>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.userReducer,
    stateLogin: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...Actions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
