const capitalize = (arg) => {
    if (typeof arg !== "string") return arg
    const result = arg.match(new RegExp(String.raw`(?<firstLetter>^.)(?<restOfSentences>.*)`))
    const output = `${result.groups.firstLetter.toUpperCase()}${result.groups.restOfSentences}`
    return output
}

const reverseString = (arg) => {
    if (typeof arg !== "string") return arg
    const output = [...arg].sort((a,b)=>-1).join('')
    return output
}

class calculator {
    static add = (arg, arg2)=>{
        if (typeof arg !== "number" || typeof arg2 !== "number") return undefined
        return arg + arg2
    }
    static substract = (arg,arg2) => {
        if (typeof arg !== "number" || typeof arg2 !== "number") return undefined
        return arg - arg2
    }
    static divide = (arg, arg2) => {
        if (typeof arg !== "number" || typeof arg2 !== "number") return undefined
        return arg / arg2
    }
    static multiply = (arg,arg2) => {
        if (typeof arg !== "number" || typeof arg2 !== "number") return undefined
        return arg * arg2
    }
}

export { capitalize, reverseString, calculator }