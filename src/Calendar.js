import React, { Component } from 'react';
import styles from './css/Calendar.css';

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

    this.state = {
      year: year,
      month: month,
      startDateWeek: startDateWeek,
      endMonthDate: endMonthDate,
      fullDate: now
    }
  }

  handleChangeCalendarPage = (event) => {
    let page = event.currentTarget.getAttribute("data-page")
    let tmpMonth = this.state.month + parseInt(page)
    let fullDate = this.state.fullDate
    fullDate.setMonth(tmpMonth-1)
    const year = fullDate.getFullYear()
    let month =fullDate.getMonth()+1
    console.log(fullDate)
    console.log(month)

    const endMonthDate = new Date(year, month, 0).getDate()
    const startDateWeek = new Date(year, month-1, 1).getDay()

    console.log("handleChangeCalendarPage: " + startDateWeek)

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
        border: "1px solid #333"
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
      <div style={styles.calendar}>
        <h1>カレンダーサンプル</h1>
        <h2>{this.state.year}年{this.state.month}月</h2>
        <div style={styles.buttonWrapper}>
          <button style={styles.buttonLeft} onClick={this.handleChangeCalendarPage} data-page="-1">前</button>
          <button style={styles.buttonRight} onClick={this.handleChangeCalendarPage} data-page="1">次</button>
        </div>
        <div className="date"></div>
        <table>
          <tbody>
            <tr>
              {weekHtml}
            </tr>
            {this.renderDateTable()}
          </tbody>
        </table>
      </div>
    );
  }
  renderDateTable() {
    let tr = []
    let td = []
    let tds = []
    let calendarRow = Math.ceil(this.state.endMonthDate / 7) + this.state.startDateWeek
    let date = 0
    console.log(calendarRow)
    for(let i=0; i<calendarRow; i++) {
      tds = this.week.map((v, index) => {
        //カレンダー1行目
        if(i === 0 && index < this.state.startDateWeek) {
          return(<td></td>)
        //最後の行
        }else if(date >= this.state.endMonthDate) {
          date += 1
          return(<td></td>)
        }else{
          date += 1
          return(<td>{date}</td>)
        }
      })
      tr.push(<tr>{tds}</tr>)
    }
    return tr
  }
}

export default Calendar;
