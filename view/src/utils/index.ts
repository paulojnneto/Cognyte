import moment from "moment"

export const formatDate = (date: string | Date) => {
  return moment(date).format('D/MM/YYYY')
}