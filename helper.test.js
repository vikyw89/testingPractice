import { analyzeArray, caesarCypher, calculator, capitalize, reverseString } from "./helper";

// A capitalize function that takes a string and returns it with the first character capitalized.

describe("capitalize",()=>{
    test("undefined to be undefined", ()=>{
        expect(capitalize(undefined)).toBeUndefined()
    })
    test("a to be A", ()=>{
        expect(capitalize("a")).toBe("A")
    })
    test("A to be A", ()=>{
        expect(capitalize("A")).toBe("A")
    })
    test("4 to be 4", () => {
        expect(capitalize(4)).toBe(4)
    })
    test(`"4" to be "4"`, ()=>{
        expect(capitalize("4")).toBe("4")
    })
    test("there's a dog", ()=>{
        expect(capitalize("there's a dog")).toBe("There's a dog")
    })
})

describe("reverseString", ()=>{
    test("Abc to be cbA", ()=>{
        expect(reverseString("Abc")).toBe("cbA")
    })
    test("2342 to be 2342", ()=>{
        expect(reverseString(2342)).toBe(2342)
    })
})

describe("calculator", () =>{
    test("4 add 5 toEqual 9", ()=>{
        expect(calculator.add(4,5)).toEqual(9)
    })
    test(`"4" add 4 toEqual undefined`, ()=>{
        expect(calculator.add("4",4)).toEqual(undefined)
    })
    test("4 - 6 toEqual -2", ()=>{
        expect(calculator.substract(4,6)).toEqual(-2)
    })
    test("10 / 5 toEqual 2", () =>{
        expect(calculator.divide(10,5)).toEqual(2)
    })
    test("10 * 5 toEqual 50", ()=>{
        expect(calculator.multiply(10,5)).toEqual(50)
    })
})

describe("caesarCypher", ()=>{
    test("a shift 1 toBe b", ()=>{
        expect(caesarCypher("a",1)).toBe("b")
    })
    test("a shift -1 toBe z", ()=>{
        expect(caesarCypher("a",-1)).toBe("z")
    })
    test("A shift 1 to be B", ()=>{
        expect(caesarCypher("A",1)).toBe("B")
    })
    test("A shift -1 to be Z", ()=>{
        expect(caesarCypher("A",-1)).toBe("Z")
    })
    test(`"6 cars !" shift 28 to be "6 dbst !"`, ()=>{
        expect(caesarCypher("6 cars !",28)).toBe("6 ectu !")
    })
    test(`shift by big negative number`, ()=>{
        expect(caesarCypher("a",-127)).toBe("d")
    })
})

describe("analyzeArray", () => {
    test("empty array", () =>{
        expect(analyzeArray([])).toEqual({
            length: 0, average: NaN, min: Infinity, max: -Infinity 
        })
    })
    test("array of number", ()=>{
        expect(analyzeArray([1,2,3,4,5])).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        })
    })
})