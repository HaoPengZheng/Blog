import React, { Component } from 'react';
import "./App.css"
import picture from './picture.jpg';
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
import TextField from '@material-ui/core/TextField';
import {blue,red} from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});
export class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="main">
        <InsterPage></InsterPage>
      </div>
    </MuiThemeProvider>
    );
  }
}
export class InsterPage extends React.Component {
  render() {
    return (
      <div className="inster-page" align="center">
        {/* <Login></Login>
        <Register></Register> */}
      </div>
    );
  }
}
export class Logo extends React.Component {
  render() {
    return (
      <div>
        <h1>小本</h1>
      </div>
    )
  }
}

export class Login extends React.Component {
  state = {
    name: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    alertName: '请输入正确手机号',
    isNameError: false,
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

  render() {
    const StyledButton = withStyles({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 40,
        width:320,
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
      <div className="login" align="center">
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
        <StyledButton>登录</StyledButton>
        <div>
          <p><span>没有账号？</span><span style={{ color: "#0084ff", marginRight: "120px", cursor: "pointer" }}>注册</span><span style={{ color: "#0084ff", cursor: "pointer" }}>忘记密码？</span></p>
        </div>
      </div>);
  }
}
export class Register extends React.Component {
  state = {
    defaultTime: 10,
    time: 0,
    name: '',//手机号
    password: '',//密码
    surePassWord: '',//确定密码
    weight: '',
    weightRange: '',
    verification: '',//验证码
    touchText: '获取验证码',
    alertName: '请输入正确手机号',
    alertpwd: '密码设置不规范',
    alertsurePwd: '两次密码输入不同',
    isNameError: false,
    isPwdError: false,
    isPwdSame: false,
    isTouch: false,
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });

  };

  handleValidateName = () => {
    var s = "^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$";//手机号的正则表达式
    if (this.state.name === "" || this.state.name === null || !this.state.name.match(s)) {
      this.setState(state => ({ isNameError: true }));
    } else {
      this.setState(state => ({ isNameError: false }));
    }
  };

  handleValidatePassWord = () => {
    var s = "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$";//密码的正则表达式
    if (this.state.password === "" || this.state.password === null || !this.state.password.match(s)) {
      this.setState(state => ({ isPwdError: true }));
    } else {
      this.setState(state => ({ isPwdError: false }));
    }
  };

  handleCheckPwdSame = () => {
    if (this.state.password === this.state.surePassWord) {
      this.setState(state => ({ isPwdSame: false }));
    } else {
      this.setState(state => ({ isPwdSame: true }));
    }
  };

  tick = () => {
    var a = this.state.time - 1;
    if (a === 0) {
      this.setState(state => ({ isTouch: false}));
      this.setState(state => ({ touchText: "获取验证码" }));
      this.setState(state =>({time:this.state.defaultTime}))
      clearInterval(this.interval);
    } else {
      this.setState(state => ({ time: a }))
      this.setState(state => ({ touchText: a + "s" }))
    }
  }

  touch = () => {
    this.setState(state => ({ isTouch: true}));
    this.setState(state =>({time:this.state.defaultTime}))
    this.interval = setInterval(() => this.tick(), 1000)
  }

  render() {
    let errorNameAlert = "";
    let errorPassWordAlert = "";
    let errorPwdSameAlert = "";
    let getVerificate = "";
    if (this.state.isNameError) {//手机号不规范提示
      errorNameAlert = <FormHelperText id="weight-helper-text" error style={{ margin: "8px 0" }}>{this.state.alertName}</FormHelperText>
    }
    if (this.state.isPwdError) {//密码不规范提示
      errorPassWordAlert = <FormHelperText id="weight-helper-text" error style={{ margin: "8px 0" }}>{this.state.alertpwd}</FormHelperText>
    }
    if (this.state.isPwdSame) {//密码不相同规范提示
      errorPwdSameAlert = <FormHelperText id="weight-helper-text" error style={{ margin: "8px 0" }}>{this.state.alertsurePwd}</FormHelperText>
    }
    if (!this.state.isTouch) {//按钮点击事件
      getVerificate = <Button variant="outlined" color="primary" size="small" style={{ width: "115px", marginTop: "18px" }} onClick={this.touch}>{this.state.touchText}</Button>
    } else {
      getVerificate = <Button variant="outlined" color="primary" size="small" style={{ width: "115px", marginTop: "18px" }} disabled="disable">{this.state.touchText}</Button>
    }
    return (
      <div className="register" align="center">
        <Logo></Logo>
        <FormControl fullWidth>
          <InputLabel htmlFor="adornment-password">手机号</InputLabel>
          <Input
            error={this.state.isNameError}
            id="adornment-id"
            value={this.state.name}
            onChange={this.handleChange('name')}
            onBlur={this.handleValidateName}
          />
          {errorNameAlert}
        </FormControl>
        <TextField
          id="standard-password-input"
          label="设置密码"
          type="password"
          autoComplete="current-password"
          margin="normal"
          value={this.state.password}
          onChange={this.handleChange('password')}
          onBlur={this.handleValidatePassWord}
          fullWidth
        />
        {errorPassWordAlert}
        <TextField
          id="standard-password-input"
          label="确定密码"
          type="password"
          autoComplete="current-password"
          margin="normal"
          value={this.state.surePassWord}
          onChange={this.handleChange('surePassWord')}
          onBlur={this.handleCheckPwdSame}
          fullWidth
        />
        {errorPwdSameAlert}
        <div className="verificate">
          <TextField
            id="standard-password-input"
            label="请输入验证码"
            margin="normal"
            value={this.state.verification}
            onChange={this.handleChange('verification')}
            fullWidth
          />
          <img src={picture} style={{ width: "90px", marginTop: "16px" }}></img>
        </div>
        <div className="verificate">
          <TextField
            id="standard-password-input"
            label="短信验证码"
            margin="normal"
            value={this.state.verification}
            onChange={this.handleChange('verification')}
            fullWidth
          />
          {getVerificate}
        </div>
        <Button variant="contained" color="primary" size="large" fullWidth style={{ marginTop: "20px" }}>注册</Button>
      </div>
    )
  }
}
export default App;