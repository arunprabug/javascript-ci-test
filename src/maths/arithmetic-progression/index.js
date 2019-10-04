/**
 *
 * Arithmetic progression
 *
 * ex : 1 + 3 + 5 +7 + ......
 * In the above example first number in the progression = 1 (a)
 * Difference between two number in the progression = 2 (a)
 *
 * nth number in the arithmnetic progression is nth term of an AP = a + (n-1)*d
 * Sum of ‘n’ terms of an AP = 0.5 n (first term + last term) = 0.5 n [ 2a + (n-1) d ].
 * Geometric progression
 *
 *
 */

export function findNthNumberInArithProgression(progression, n) {
  if (!progression) {
    return
  }
  let a = progression[0]
  let d = progression[1] - progression[0]
  return a + (n - 1) * d
}

export function findSumOfArithmeticProgression(progression) {
  if (!progression) {
    throw Error("Progression is not defined")
  }
  if (progression && progression.length < 1) {
    throw Error("Not a valid progression")
  }
  const a = progression[0]
  const d = progression[1] - progression[0]
  const n = progression.length
  return (1 / 2) * n * (2 * a + (n - 1) * d)
}
