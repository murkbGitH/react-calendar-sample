import React, { Component } from 'react';
import CSSModules from 'react-css-modules'
import styles from './css/Calendar.css';

class Button extends Component {
  constructor(props) {
    super(props)
  }

  handleChangeCalendarPage = (event) => {
    const page = event.currentTarget.getAttribute("data-page")
    const fullDate = this.props.fullDate
    const tmpMonth = fullDate.getMonth() + 1 + parseInt(page)

    fullDate.setMonth(tmpMonth-1)

    const year = fullDate.getFullYear()
    const month =fullDate.getMonth()+1

    //call parent component method
    this.props.updateCalendarDate(year, month)
  }

  render() {
    const styles = {
      buttonLeft: {
        float: "left"
      },
      buttonRight: {
        float: "right"
      }
    }

    return(
      <div styleName="button-wrapper">
        <button styleName="button" style={styles.buttonLeft} onClick={this.handleChangeCalendarPage} data-page="-1">&lt; 前</button>
        <button styleName="button" style={styles.buttonRight} onClick={this.handleChangeCalendarPage} data-page="1">次 &gt;</button>
      </div>
    )
  }
}
export default CSSModules(Button, styles);
