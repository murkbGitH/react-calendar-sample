const isToday = (year, month, date) => {
  let now = new Date()
  if (now.getFullYear() === year &&
     now.getMonth()+1 === month &&
     now.getDate() === date) {
    return true
  }
  return false
}

export default isToday
