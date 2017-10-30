import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.scss'

console.log(styles)

export default class HeadNav extends Component {
    render() {
        return (
            <div className={styles.headnav}>
              <Link to='/'><span className={styles.headlogo}></span></Link> 
              <span className={styles.headtitle}>综合业务运营平台</span>
            </div>
        )
    }
}
