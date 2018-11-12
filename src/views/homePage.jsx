import React from 'react'
import Nav from '../components/common/nav'
import './homepage.css'
import Item from '../components/common/eassy'
export default class HomePage extends React.Component {
  render() {
    return (
      <div className="whole-layout">
        <div className="home-top">
          <Nav></Nav>
        </div>
        <div className="home-middle">
        <ul>
          <li>
            <Item></Item>
          </li>
        </ul>
        </div>
        <div className="home-bottom">

        </div>

      </div>
    )
  }
}