import React, { Component } from 'react';
import CSSModules from 'react-css-modules'
import styles from './css/Calendar.css';

import isToday from './lib/date_util.js';
import Button from './Button'
import DateCell from './DateCell'

class Calendar extends Component {

  constructor(props) {
    super(props)

    let now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()+1
    //月末
    const endMonthDate = new Date(now.getFullYear(), month, 0).getDate()
    //月初の曜日
    const startDateWeek = new Date(now.getFullYear(), month-1, 1).getDay()

    this.week = ["日","月","火","水","木","金","土"]
    this.date = 0

    this.state = {
      year: year,
      month: month,
      startDateWeek: startDateWeek,
      endMonthDate: endMonthDate,
      fullDate: now
    }
  }

  updateCalendarDate = (year, month) => {
    const endMonthDate = new Date(year, month, 0).getDate()
    const startDateWeek = new Date(year, month-1, 1).getDay()
    this.date = 0

    this.setState({
      year: year,
      month: month,
      startDateWeek: startDateWeek,
      endMonthDate: endMonthDate
    })
  }

  render() {
    const styles = {
      calendar: {
        fontSize: "2em",
        width: "500px"
      },
      calendarCell: {
        padding: "10px",
      },
      buttonWrapper: {
        overflow: "hidden"
      },
      buttonLeft: {
        float: "left"
      },
      buttonRight: {
        float: "right"
      }
    }

    let weekHtml = []
    this.week.forEach((v)=>{
      weekHtml.push(<td style={styles.calendarCell}>{v}</td>)
    })


    return (
      <div styleName='calendar'>
        <h2>{this.state.year}年{this.state.month}月</h2>
        <Button fullDate={this.state.fullDate} updateCalendarDate={this.updateCalendarDate}/>
        <div className="date"></div>
        <table styleName="calendar--tbl">
          <tbody>
            <tr>
              {weekHtml}
            </tr>
            <tr>
              {this.renderBlankTable(1)}
            </tr>
            <tr>
              {this.renderBlankTable(2)}
            </tr>
            <tr>
              {this.renderBlankTable(3)}
            </tr>
            <tr>
              {this.renderBlankTable(4)}
            </tr>
            <tr>
              {this.renderBlankTable(5)}
            </tr>
            <tr>
              {this.renderBlankTable(6)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderBlankTable(row) {
    let td = []
    this.week.forEach((v, index) => {
      if(row === 1 && index < this.state.startDateWeek) {
        td.push(<DateCell date="" />)
      }else if(this.date >= this.state.endMonthDate) {
        td.push(<DateCell date="" />)
      }else{
        this.date += 1
        td.push(<DateCell year={this.state.year} month={this.state.month} date={this.date}/>)
      }
    })
    return td
  }
}

export default CSSModules(Calendar, styles);
