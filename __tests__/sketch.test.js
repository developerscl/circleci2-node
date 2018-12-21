const { sum, prod, substract } = require('../sketch')

describe('Sketch tests', () => {
  it('should adds 1+2 and return 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  it('should 7*5 and return 35', () => {
    expect(prod(7, 5)).toBe(35)
  })
  it('should substact and return 35', () => {
    expect(substract(70, 35)).toBe(35)
  })
})
