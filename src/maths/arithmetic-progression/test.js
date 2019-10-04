import {
  findNthNumberInArithProgression,
  findSumOfArithmeticProgression,
} from "./index"

describe("Arithmetic progression", () => {
  test("find nth number in arithmetic progression", () => {
    const progression = [1, 3, 5, 7, 9]
    const n = 3
    expect(findNthNumberInArithProgression(progression, n)).toBe(5)
  })

  test("find nth number in arithmetic progression - undefined progression", () => {
    const progression = undefined
    const n = 3
    expect(findNthNumberInArithProgression(progression, n)).toBeUndefined()
  })

  test("find nth number in arithmetic progression - null progression", () => {
    const progression = null
    const n = 3
    expect(findNthNumberInArithProgression(progression, n)).toBeUndefined()
  })
})

describe("Sum of arithmetic progression", () => {
  test("sum of progression", () => {
    const progression = [1, 3, 5, 7, 9]
    expect(findSumOfArithmeticProgression(progression)).toBe(25)
  })

  test("sum of progression: error null or undefined progression", () => {
    const progression = undefined
    try {
      findSumOfArithmeticProgression(progression)
    } catch (error) {
      expect(error.message).toBe("Progression is not defined")
    }
  })

  test("sum of progression: single value array", () => {
    const progression = [1]
    try {
      findSumOfArithmeticProgression(progression)
    } catch (error) {
      expect(error.message).toBe("Not a valid progression")
    }
  })
})
