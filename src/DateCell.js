import React, { Component } from 'react';
import CSSModules from 'react-css-modules'
import styles from './css/DateCell.css';

import isToday from './lib/date_util.js';

class DateCell extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let style=""
    if(isToday(this.props.year, this.props.month, this.props.date)) {
      style="today"
    }
    return (
      <td styleName={style}>{this.props.date}</td>
    )
  }
}

export default CSSModules(DateCell, styles);
