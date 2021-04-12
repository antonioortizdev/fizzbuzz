import isDivisible from "../src/isDivisible"

describe('isDivisible', () => {
    it('should say 12 is divisible by 3', () => {
        expect(isDivisible(12, 3)).toBe(true)
    })
    it('should say 7 is not divisible by 3', () => {
        expect(isDivisible(7, 3)).toBe(false)
    })
    it('should say 8 is divisible by 4', () => {
        expect(isDivisible(8, 4)).toBe(true)
    })
    it('should say 30 is not divisible by 7', () => {
        expect(isDivisible(30, 7)).toBe(false)
    })
    it('should say 40 is divisible by 5', () => {
        expect(isDivisible(40, 5)).toBe(true)
    })
    it('should say 0 is divisible by 3 (or any number)', () => {
        expect(isDivisible(0, 3)).toBe(true)
        expect(isDivisible(0, 6456456434342)).toBe(true)
        expect(isDivisible(0, 234231342)).toBe(true)
    })
})