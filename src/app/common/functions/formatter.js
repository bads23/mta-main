import getMonth from './dates'

const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const FormatDate = str => {
  var dstr = str.split('T')
  var time = dstr[1].split('.')
  var sec = time[0].split(':')
  var date = dstr[0].split('-')

  time = sec[0] + ':' +sec[1]

  var month = getMonth(date[1])
  var fDate = month+' '+date[2]+', '+date[0]

  var dateObj = {
    date: dstr[0],
    time: time,
    fDate: fDate
  }

  console.log(dateObj)
  return dateObj
}

export default formatNumber