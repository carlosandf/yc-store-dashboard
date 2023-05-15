const formater = (str) => {
  const result = str.split(', ').map(item => item.split(': '))
  return result
}
export default formater
