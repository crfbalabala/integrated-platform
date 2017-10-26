import React, { Component } from 'react';

import { HeadNav, InputDefault, InputPicCode, WeChatLogin } from '../component'

import { Button } from 'antd';


export default class LoginView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      price: 0
    }
  }

  

  render() {

    return(
      <div className="login-view">
        <HeadNav/>
        <div className='login-wrap'>
          111111111111
        </div>
        
      </div>
    )
  }
}

