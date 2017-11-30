import React, { Component } from 'react';
import styles from './css/Calendar.css';

class Calendar extends Component {
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

    let now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()+1
    const endMonthDate = new Date(now.getFullYear(), month, 0).getDate()
    const startDateWeek = new Date(now.getFullYear(), month, 1).getDay()

    


    let weekHtml = []
    const week = ["月","火","水","木","金","土","日"]
    week.forEach((v)=>{
      weekHtml.push(<td style={styles.calendarCell}>{v}</td>)
    })

    let dateHtml = []
    for(let i=0; i<endMonthDate; i++) {
      if((i+1 % 7) == 0) {
        if(startDateWeek < i) {
          dateHtml.push(<td style={styles.calendarCell}></td>)
        }else{
          dateHtml.push(<td style={styles.calendarCell}>{i+1}</td>)
        }
      }
    }

    return (
      <div style={styles.calendar}>
        <p>カレンダーサンプル</p>
        <div className="date"></div>
        <table>
          <tr>
            {weekHtml}
          </tr>
          {dateHtml}
        </table>
      </div>
    );
  }

  
}

export default Calendar;
