import {sumTwoNumber} from '../src/index'
describe('Test Sum', () => {
    test('should sum correctly', () => {
        expect(sumTwoNumber(2,3)).toEqual(5)
    })
})