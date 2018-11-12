import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../components/login/login'
import Register from '../components/login/register'
import Http from '../http/loginPage.js';
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
    this.setState({ index: (currentIndex + 1) % 8})
  }

  beforePic = () =>{
    var currentIndex = this.state.index;
    var newIndex = 0
    if(currentIndex === 0){
      newIndex = 7;
    }else{
      newIndex = currentIndex -1  ;
    }
    this.setState({ index: newIndex})
  }

  next(s){
    return(
      <div className="pic-button" onClick={this.nextPic}>
      <svg class="pic-icon" aria-hidden="true">
        <use xlinkHref={s}></use>
      </svg>
    </div>
    )
  }

  before(s){
    return(
      <div className="pic-button" onClick={this.beforePic}>
      <svg class="pic-icon" aria-hidden="true">
        <use xlinkHref={s}></use>
      </svg>
    </div>
    )
  }

  render() {
    return (
      <div className="main" align="center" style={{ 'background-image': `url(${this.state.url[this.state.index]})` }}>
        <BrowserRouter>
          <div>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </BrowserRouter>

        <div className="bottom-box">
          {this.before("#icon-tubiaozhizuo-1")}
          {this.next("#icon-tubiaozhizuo-2")}
        </div>
      </div>
    );
  }
}