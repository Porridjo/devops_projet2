const { checkName } = require('../utils/utils')

describe('utils library test suite', () => {
    it('should return false if empty string', () => {
        expect(checkName('')).toBe(false)
    })
    it('should return false if contains a lowercase letter', () => {
        expect(checkName('EXOPLANeT')).toBe(false)
    })
    it('should return true if only uppercase letters', () => {
        expect(checkName('EXOPLANET')).toBe(true)
    })
    it('should return true if contains "-"', () => {
        expect(checkName('EXOPLANET-')).toBe(true)
    })
    it('should return true if contains "."', () => {
        expect(checkName('EXOPLANET.')).toBe(true)
    })
    it('should return false if contains unauthorized characters', () => {
        expect(checkName('Trappiste$****01****-00')).toBe(false)
    })
})
