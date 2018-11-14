import React from 'react';
import './assets/css/loginPage.scss'
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../components/login/login'
import Register from '../components/login/register'
import Http from '../http/loginPage.js';
import Tooltip from '@material-ui/core/Tooltip';
export default class InsterPage extends React.Component {
  state = {
    index: 0,
    length: '',
    url: [],
  };
  componentDidMount() {
    let urlArray = [];
    Http.getImage().then(response => {
      this.setState({ length: response.data.images.length })
      for (let index = 0; index < this.state.length; index++) {
        urlArray.push("https://cn.bing.com" + response.data.images[index].url)
      }
      this.setState({ url: urlArray });
    })
  }

  nextPic = () => {
    var currentIndex = this.state.index;
    this.setState({ index: (currentIndex + 1) % 8 })
  }

  beforePic = () => {
    var currentIndex = this.state.index;
    var newIndex = 0
    if (currentIndex === 0) {
      newIndex = 7;
    } else {
      newIndex = currentIndex - 1;
    }
    this.setState({ index: newIndex })
  }


  changeImg(direction) {
    const iconHerf = {
      left: "#icon-tubiaozhizuo-1",
      right: "#icon-tubiaozhizuo-2",
    }
    const label = {
      left:"上一张",
      right:"下一张"
    }
    const option = {
      left: () => this.beforePic(),
      right: () => this.nextPic()
    }
    return (
      <Tooltip title={label[direction]}>
        <div className="pic-button" onClick={option[direction]}>
          <svg className="pic-icon" aria-hidden="true">
            <use xlinkHref={iconHerf[direction]}></use>
          </svg>
        </div>
      </Tooltip>
    )
  }

  render() {
    return (
      <div className="main" style={{ 'backgroundImage': `url(${this.state.url[this.state.index]})` }}>
        <BrowserRouter>
          <div>
            <Route path="/user/login" component={Login} />
            <Route path="/user/register" component={Register} />
          </div>
        </BrowserRouter>

        <div className="bottom-box">
          {this.changeImg("left")}
          {this.changeImg("right")}
        </div>
      </div>
    );
  }
}