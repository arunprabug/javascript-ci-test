export function countDigit(n) {
  let no = 0
  do {
    var rm = parseInt(n / 10)
    n = rm
    no++
  } while (rm !== 0)
  return no
}

export function countDigit2(n) {
  return n.toString().length
}

/**
 *
 * @param {input number} n
 *
 * Mathematics formula to calculate number of digit in a  number = log10(n) + 1
 */
export function countDigit3(n) {
  return Math.floor(Math.abs(Math.log10(n) + 1))
}
