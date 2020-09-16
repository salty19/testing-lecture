const {sum, sayHello} = require('../functions')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(1,2)).not.toBeNaN()
})

test('sayHello returns hello', () => {
    expect(sayHello()).toBe('hello')
})

test('object assignment', () => {
    const data = {one: 1}
    data["two"] = 2
    expect(data).toEqual({one: 1, two: 2})
})

test('expect true to be truthy', () => {
    expect(true).toBeTruthy()
})

test('expect false to be falsy', () => {
    expect(false).toBeFalsy()
})

// let names = ['John', 'Aria', 'Gavos']

// test('Names array contains Aria', () => {
//     expect(names).toContain('Aria')
//     expect(names).toContain('Scott')
// })