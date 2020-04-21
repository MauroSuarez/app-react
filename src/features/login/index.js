import React from "react";
import {
    FormLogin,
    IconLogin, 
    InputLogin,
    ButtonLogin, 
    LayoutLogin,
    FormItemLogin,
    FooterLogin,
    ContentLogin,
    ContainerLogin,
    ContainerLogo,
    ContainerImg,
    SiderLogin,
    LayoutMain,
    ImageBackgroundLogin,
    ContainerLogoMobile,
    ContainerLink,
    LinkRight,
    LinkLeft
} from './styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, Redirect } from 'react-router-dom';
import { Actions } from "./actions";
import images from '../../utils/constants/Images';
import { NotificationHelper } from '../../utils/helpers/notifications';

class Login extends React.Component {
    
    componentDidMount(){}

    handleSubmit = (e, actions) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                NotificationHelper.notification('info', 'Info', 'Se ha producido un error al intentar obtener el último consumo. Intente más tarde.');
            }else {
                actions.loginRequest({ "username": values.username, "pass": values.password })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { actions } = this.props;
        const from = { pathname: '/app' };

        if (this.props.state.isLoggedIn) {
        return <Redirect to={from} />;
        }
        return (
            <LayoutMain>
                <SiderLogin 
                    width={"50%"}      
                    breakpoint="lg"
                    collapsedWidth="0"
                    trigger={null}
                >
                    <ImageBackgroundLogin src={images.login.imgBack} />
                </SiderLogin>
                <LayoutLogin>
                    <ContentLogin>
                        <ContainerLogin>      
                            <ContainerLogo>
                                <ContainerImg src={images.login.logo} style={{width: '350px', height: '100px'}} />
                                <ContainerLogoMobile src={images.login.iconLogo} />
                            </ContainerLogo>                  
                            <FormLogin onSubmit={this.handleSubmit}>
                                <FormItemLogin>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Porfavor ingrese su Usuario!' }],
                                    })(
                                        <InputLogin prefix={<IconLogin type="user"/>} placeholder="Usuario"
                                            onChange={e => actions.setUsername(e.target.value)} />
                                    )}
                                </FormItemLogin>
                                <FormItemLogin>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Porfavor ingrese su Password!' }],
                                    })(
                                        <InputLogin prefix={<IconLogin type="lock"/>} type="password" placeholder="Password"
                                            onChange={e => actions.setPassword(e.target.value)}
                                            onKeyPress={e => e.key === "Enter" ?
                                            this.handleSubmit(e, actions) : null}
                                        />
                                    )}
                                </FormItemLogin>
                                <FormItemLogin>
                                    <ButtonLogin type="primary" className="login-form-button"
                                        onClick={(e) => this.handleSubmit(e, actions)}
                                    >
                                        Ingresar
                                    </ButtonLogin>
                                </FormItemLogin>
                                <ContainerLink>
                                    <LinkLeft>Olvidaste tu contraseña? </LinkLeft>
                                    {/*<LinkRight onClick={()=>this.props.history.push("/register")} >Registrate</LinkRight>*/}
                                </ContainerLink>
                            </FormLogin>
                        </ContainerLogin>
                    </ContentLogin>
                    <FooterLogin>
                        ©2020 Power by Ant Design
                    </FooterLogin>
                </LayoutLogin>
                {/*this.props.state.isLoggedIn ? this.props.history.push("/app") : null*/}
            </LayoutMain>

        );
    }
}

const WrappedNormalLoginForm = FormLogin.create()(Login);

function mapStateToProps(state) {
    return {
        state: state.loginReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...Actions }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);