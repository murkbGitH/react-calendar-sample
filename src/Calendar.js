import React, { Component } from 'react';
import styles from './css/Calendar.css';

class Calendar extends Component {

  constructor(props) {
    super(props)

    let now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()+1
    const endMonthDate = new Date(now.getFullYear(), month-1, 0).getDate()
    const startDateWeek = new Date(now.getFullYear(), month-1, 1).getDay()

    this.week = ["日","月","火","水","木","金","土"]
    this.startDateWeek = startDateWeek
    this.endMonthDate  = endMonthDate
  }
 
  render() {
    const styles = {
      calendar: {
        fontSize: "2em"
      },
      calendarCell: {
        padding: "10px",
        border: "1px solid #333"
      }
    }

    let weekHtml = []
    this.week.forEach((v)=>{
      weekHtml.push(<td style={styles.calendarCell}>{v}</td>)
    })

    return (
      <div style={styles.calendar}>
        <p>カレンダーサンプル</p>
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
    let calendarRow = Math.ceil(this.endMonthDate / 7) + this.startDateWeek
    let date = 0
    console.log(calendarRow)
    for(let i=0; i<calendarRow; i++) {
      tds = this.week.map((v, index) => {
        //カレンダー1行目
        if(i === 0 && index < this.startDateWeek) {
          return(<td></td>)
        }else if(date > this.endMonthDate) {
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
