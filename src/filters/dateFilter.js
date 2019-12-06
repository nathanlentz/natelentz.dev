export default (value, format) => {
  format = "MM DD YYYY"
  const date = new Date(value);
  return date.toDateString(format);
}