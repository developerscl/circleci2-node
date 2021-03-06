const { sum, prod, subtract, divide, sample } = require('../sketch')
const { toBeType } = require('jest-tobetype')
expect.extend({ toBeType })

describe('Sketch tests', () => {
  it('should adds 1+2 and return 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  it('should 7*5 and return 35', () => {
    expect(prod(7, 5)).toBe(35)
  })
  it('should subtact and return 35', () => {
    expect(subtract(70, 35)).toBe(35)
  })
  it('should divide and return 35', () => {
    expect(divide(70, 2)).toBe(35)
  })
  it('should be a string', () => {
    const sampleString = sample()
    expect(sampleString).toBeType('string')
  })
  it('should be SAMPLE STRING str', () => {
    const sampleString = sample()
    expect(sampleString).toBe('sample string')
  })

})
