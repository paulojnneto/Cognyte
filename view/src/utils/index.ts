import moment from "moment"

export const formatDate = (date: string | Date) => {
  return moment(date).format('D/MM/YYYY')
}

export const validateDates = (start: string | Date, end: string | Date) => {
  return moment(start).isBefore(moment(end))
}