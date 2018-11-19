function weekCount(month_number, year) {

  // month_number is in the range 1..12

  const firstOfMonth = new Date(year, month_number - 1, 1)
  const lastOfMonth = new Date(year, month_number, 0)

  const used = firstOfMonth.getDay() + lastOfMonth.getDate()

  return Math.ceil(used / 7)
}

export default weekCount
