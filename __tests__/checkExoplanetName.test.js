const { checkName } = require('../utils/utils')

describe('checkCapitalName', () => {
    it('should return true if all letters are capital', () => {
        expect(checkName('TEST')).toBe(true)
    })
})
