import React from 'react';
import "./login.css"
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Logo from '../common/logo'
import picture from './picture.jpg'
export default class Register extends React.Component {
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
      this.setState(state => ({ isTouch: false }));
      this.setState(state => ({ touchText: "获取验证码" }));
      this.setState(state => ({ time: this.state.defaultTime }))
      clearInterval(this.interval);
    } else {
      this.setState(state => ({ time: a }))
      this.setState(state => ({ touchText: a + "s" }))
    }
  }

  touch = () => {
    this.setState(state => ({ isTouch: true }));
    this.setState(state => ({ time: this.state.defaultTime }))
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