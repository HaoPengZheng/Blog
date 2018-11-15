import React from 'react';
import "./login.css"
import "./login.scss"
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormHelperText from '@material-ui/core/FormHelperText';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../common/logo'
import { NavLink } from "react-router-dom";
import http from '../../http/registerRequest'
export default class Login extends React.Component {
  state = {
    name: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    alertName: '请输入正确手机号',
    isNameError: false,
    open: false,
    vertical: 'top',
    horizontal: 'right',
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleValidateName = () => {
    var s = "^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$";//手机号码的正则表达式
    if (this.state.name === "" || this.state.name === null || !this.state.name.match(s)) {
      this.setState(state => ({ isNameError: true }));
    } else {
      this.setState(state => ({ isNameError: false }));
    }
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleLogin = () => {
    this.setState({ open: true });
    http.login({ username: this.state.name, password: this.state.password }).then((res) => {
      console.log(res.data)

    }).catch(err => {
      console.log(err.response.data);
    })
  }

  handleClose = () =>{
    this.setState({open:false})
  }

  render() {
    const StyledButton = withStyles({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 40,
        width: 320,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      label: {
        textTransform: 'capitalize',
      },
    })(Button);

    let errorNameAlert = "";
    if (this.state.isNameError) {
      errorNameAlert = <FormHelperText id="weight-helper-text" error style={{ margin: "8px 0" }}>{this.state.alertName}</FormHelperText>
    }
    return (
      <div className="login">
        <Snackbar
          anchorOrigin={{ vertical: this.state.vertical, horizontal: this.state.horizontal }}
          open={this.state.open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">账号或密码错误！</span>}
          action={
            [<IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,]
          }
        />
        <div className="login-top">
          <Logo></Logo>
          <FormControl fullWidth>
            <InputLabel htmlFor="adornment-password">手机号/邮箱</InputLabel>
            <Input
              error={this.state.isNameError}
              id="adornment-id"
              value={this.state.name}
              onChange={this.handleChange('name')}
              onBlur={this.handleValidateName}
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle style={{ marginRight: "12px" }} />
                </InputAdornment>
              }
            />
            {errorNameAlert}
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="adornment-password">密码</InputLabel>
            <Input
              style={{ marginBottom: "20px" }}
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <span style={{ color: "#0084ff", cursor: "pointer", float: 'right', fontSize: '14px' }}>忘记密码？</span>
          <StyledButton onClick={this.handleLogin}>登录</StyledButton>
        </div>
        <div className="login-bottom">
          <NavLink to="/user/register">没有账号？注册</NavLink>
        </div>

      </div>);
  }
}