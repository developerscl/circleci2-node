const sum = require('../sketch')

describe('Sketch tests', () => {
  it('should adds 1+2 and return 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
