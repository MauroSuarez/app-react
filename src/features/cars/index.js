import React from "react";
import {
  FormCar,
  IconCar,
  InputCar,
  ButtonCar,
  FormItemCar,
  ContentCar,
  CardCar,
  ImgCardCar,
  ColCar,
  RowCar,
  SelectCar,
  OptionCar
} from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "./actions";

class CarForm extends React.Component {
  componentDidMount() {
    if (this.props.stateLogin.userInfo.length !== undefined) {
      this.props.actions.getCarRequest(this.props.stateLogin.userInfo[0].id);
      this.props.actions.getBrandRequest();
    }
  }

  render() {
    const { actions } = this.props;
    return (
      <ContentCar>
        <CardCar title="TU VEHICULO">
          <RowCar>
            <ColCar span={3}>
              {this.props.state.update ? (
                <ButtonCar
                  onClick={() => actions.carSetUpdate("Se cancelo la edicion")}
                >
                  Cancelar
                </ButtonCar>
              ) : (
                <ButtonCar
                  type="primary"
                  onClick={() =>
                    actions.carSetUpdate("Vas a actualizar tus datos")
                  }
                >
                  Editar
                </ButtonCar>
              )}
            </ColCar>
          </RowCar>
          <FormCar>
            <RowCar>
              <ColCar span={12}>
                <FormItemCar>
                  <SelectCar
                    prefix={<IconCar type="car" />}
                    placeholder="Marca"
                    onChange={e => actions.carSetBrand(e)}
                    value={this.props.state.brand}
                    disabled={this.props.state.disabled}
                  >
                    {this.props.state.brands.map(b => (
                      <OptionCar key={b.brand}>{b.brand}</OptionCar>
                    ))}
                  </SelectCar>
                </FormItemCar>
                <FormItemCar>
                  <InputCar
                    prefix={<IconCar type="car" />}
                    placeholder="Año"
                    onChange={e => actions.carSetYear(e.target.value)}
                    value={this.props.state.year}
                    disabled={this.props.state.disabled}
                  />
                </FormItemCar>

                <FormItemCar>
           
                  <SelectCar
                    prefix={<IconCar type="car" />}
                    placeholder="Modelo"
                    onChange={e => actions.carSetModel(e)}
                    value={this.props.state.model}
                    disabled={this.props.state.disabledModel}
                  >
                    {this.props.state.models.map(b => (
                      <OptionCar key={b}>{b}</OptionCar>
                    ))}
                  </SelectCar>
                </FormItemCar>
                <FormItemCar>
                  <InputCar
                    prefix={<IconCar type="car" />}
                    placeholder="Version"
                    onChange={e => actions.carSetVersion(e.target.value)}
                    value={this.props.state.version}
                    disabled={this.props.state.disabled}
                  />
                </FormItemCar>
                <FormItemCar>
                  <InputCar
                    prefix={<IconCar type="car" />}
                    placeholder="Gnc"
                    onChange={e => actions.carSetGnc(e.target.value)}
                    value={this.props.state.gnc}
                    disabled={this.props.state.disabled}
                  />
                </FormItemCar>
                <FormItemCar>
                  <ButtonCar
                    type="primary"
                    className="login-form-button"
                    disabled={this.props.state.disabled}
                    onClick={() =>
                      actions.carRequest({
                        brand: this.props.state.brand,
                        year: this.props.state.year,
                        model: this.props.state.model,
                        version: this.props.state.version,
                        gnc: this.props.state.gnc,
                        username: this.props.stateLogin.username,
                        password: this.props.stateLogin.password,
                        update: this.props.state.update
                      })
                    }
                  >
                    {this.props.state.update ? "Actualizar" : "Guardar"}
                  </ButtonCar>
                </FormItemCar>
              </ColCar>
              <ColCar span={12}>
              </ColCar>
            </RowCar>
          </FormCar>
        </CardCar>
      </ContentCar>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.carReducer,
    stateLogin: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...Actions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarForm);
