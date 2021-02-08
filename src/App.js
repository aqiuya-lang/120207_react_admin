import React, { Component } from 'react'
import { Button } from 'antd';

import {Route} from 'react-router-dom'

//引入登录路由
import Login from './pages/Login/login';

//引入管理端路由
import Admin from './pages/Admin/admin'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Login}></Route>
        <Route path="/admin" component={Admin}></Route>
      </div>
    )
  }
}

