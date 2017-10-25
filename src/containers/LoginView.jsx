import React, { Component } from 'react';

import { HeadNav, Input001 } from '../component'

import { Button } from 'antd';


export default class LoginView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      price: 0
    }
  }

  changePrice(price){
    this.setState({price: price})
  }

  handleMenuClick(e) {
    console.log( this.state );
  }

  render() {

    //  changePrice这个方法是要传到子组件里去的
    let data = {
      placeholder: "请输入用户名",
      changePrice: this.changePrice.bind(this)
    }


    return(
      <div className="login-view">

        <div className='login-wrap'>
          <div className='login-info'>111111</div>
          <div className='login-container'>
              <Input001 data={data}/>
              2222222
          </div>
          <Button onClick={this.handleMenuClick.bind(this)}>00000</Button >
        </div>
        
      </div>
    )
  }
}

