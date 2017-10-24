import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Tour extends Component {
    render() {
        return (
            <div>
                <span>404!页面没有找到，请</span>
                <Link>返回首页</Link>
            </div>
        )
    }
}
