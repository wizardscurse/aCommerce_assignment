const currencyFormat = (num) => {
  var formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  })

  return formatter.format(num)
}

export default currencyFormat
