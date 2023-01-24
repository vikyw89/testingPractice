import { capitalize } from "./helper";

// A capitalize function that takes a string and returns it with the first character capitalized.
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