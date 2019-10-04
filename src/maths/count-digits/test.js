import {countDigit3, countDigit2, countDigit} from "./index"

test("test sum of numbers", () => {
  expect(countDigit(123)).toBe(3)
})

test("test sum of numbers variant 2", () => {
  expect(countDigit2(123)).toBe(3)
})

test("test sum of numbers variant 3", () => {
  expect(countDigit3(123)).toBe(3)
})
