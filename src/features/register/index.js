import React from "react";
import {
  FormRegister,
  IconRegister,
  InputRegister,
  ButtonRegister,
  FormItemRegister,
  FooterRegister,
  ContentRegister,
  ContainerRegister,
  ContainerLogo,
  ContainerImg,
  LayoutMain,
  ContainerLogoMobile,
  ContainerLink,
  LinkLeft
} from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "./actions";

class RegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { actions } = this.props;
    return (
      <LayoutMain>
        <ContentRegister>
          <ContainerRegister>
            <ContainerLogo>
             
            </ContainerLogo>
            <FormRegister onSubmit={this.handleSubmit}>
              <FormItemRegister>
                {getFieldDecorator("userName", {
                  rules: [
                    { required: true, message: "Porfavor ingrese su Usuario!" }
                  ]
                })(
                  <InputRegister
                    prefix={<IconRegister type="user" />}
                    placeholder="Usuario"
                    onChange={e => actions.setUsername(e.target.value)}
                  />
                )}
              </FormItemRegister>
              <FormItemRegister>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Email no valido",
                      type: "email"
                    }
                  ]
                })(
                  <InputRegister
                    prefix={<IconRegister type="user" />}
                    placeholder="Email"
                    onChange={e => actions.setEmail(e.target.value)}
                  />
                )}
              </FormItemRegister>
              <FormItemRegister>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Porfavor ingrese su Password!" }
                  ]
                })(
                  <InputRegister
                    prefix={<IconRegister type="lock" />}
                    type="password"
                    placeholder="Password"
                    onChange={e => actions.setPassword(e.target.value)}
                    onKeyPress={e =>
                      e.key === "Enter"
                        ? actions.loginRequest({
                            username: this.props.state.username,
                            pass: this.props.state.password
                          })
                        : null
                    }
                  />
                )}
              </FormItemRegister>

              <FormItemRegister>
                <ButtonRegister
                  type="primary"
                  className="login-form-button"
                  onClick={() => actions.registerRequest({ "username": this.props.state.username, "pass": this.props.state.password,"email": this.props.state.email })}>
                  Registrar
                </ButtonRegister>
              </FormItemRegister>
              <ContainerLink>
                <LinkLeft onClick={() => this.props.history.push("/")}>
                  Volver al login
                </LinkLeft>
              </ContainerLink>
            </FormRegister>
          </ContainerRegister>
        </ContentRegister>
        <FooterRegister>
          Ant Design ©2020 Created by Nahuel Roldan
        </FooterRegister>
        {this.props.state.isRegistedIn ?  this.props.history.push("/") : null}
      </LayoutMain>
    );
  }
}

const WrappedNormalRegisterForm = FormRegister.create()(RegisterForm);

function mapStateToProps(state) {
  return {
    state: state.registerReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...Actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalRegisterForm);
