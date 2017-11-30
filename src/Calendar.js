import React, { Component } from 'react';
import styles from './css/Calendar.css';

class Calendar extends Component {

  constructor(props) {
    super(props)

    let now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()+1
    const endMonthDate = new Date(now.getFullYear(), month, 0).getDate()
    const startDateWeek = new Date(now.getFullYear(), month, 1).getDay()

    this.week = ["月","火","水","木","金","土","日"]
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
    var tr = ""
    var td = ""
    for(let i=0; i<this.endMonthDate; i++) {
      if((i+1 % 7) == 0) {
        td = this.week.map((v) => {
          return <td>{i}</td>
        })
        tr = <tr>{td}</tr>
      }else{
        td = this.week.map((v) => {
          return <td>{i}</td>
        })
        tr = td
      }
    }
    return tr
  }
 

  
}

export default Calendar;
