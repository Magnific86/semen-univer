export const percent = (number, percent) => {
  const number_percent = (number / 100) * percent

  return number + number_percent
}
