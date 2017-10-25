import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Icon } from 'antd';

import styles from './index.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.data.placeholder,
      type:'text',
      value:''
    };

    
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ 
      value: '' 
    });
  }
  onChangeUserName = (e) => {
    
    this.setState({ 
      value: e.target.value 
    });

    this.props.data.changePrice(e.target.value)

  }
  render() {
    const { value } = this.state;
    const suffix = value ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <Input
        placeholder={this.state.placeholder}
        prefix={<Icon type="user" />}
        suffix={suffix}
        value={value}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}
      />
    );
  }
}
