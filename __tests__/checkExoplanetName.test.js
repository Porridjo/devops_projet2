const { checkName } = require('../utils/utils')

describe('utils library test suite', () => {
    it('should return false if empty string', () => {
        expect(checkName('')).toBe(false)
    })
    it('should return false if contains a lowercase letter', () => {
        expect(checkName('EXOPLANeT')).toBe(false)
    })
})
