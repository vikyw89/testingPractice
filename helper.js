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

const caesarCypher = (string, shift) => {
    const simplifiedShift = (shift % 26) + 26
    // make string loopable
    const loopableString = [...string]
    const cracked = loopableString.reduce((output, item)=>{
        console.log({output})
        switch(true){
            case item.match(new RegExp(String.raw`[a-z]`)) !== null:
                console.log('trigger')
                const aCharCode = 'a'.charCodeAt(0)
                output.push(String.fromCharCode(((item.charCodeAt(0) - aCharCode) + simplifiedShift)%26 + aCharCode))
                break
            case item.match(new RegExp(String.raw`[A-Z]`)) !== null:
                const ACharCode = 'A'.charCodeAt(0)
                output.push(String.fromCharCode(((item.charCodeAt(0) - ACharCode) + simplifiedShift)%26 + ACharCode))
                break
            default:
                output.push(item)
                break
        }
        return output
    },[]).join('')
    return cracked
}

const analyzeArray = (arr) => {
    // length
    const length = arr.length
    // average
    const average = arr.reduce((output, item)=>output+item,0) / length
    // min
    const min = Math.min(...arr)
    // max
    const max = Math.max(...arr)
    console.log({length, average,min,max})
    return {
        average:average,
        min:min,
        max:max,
        length:length
    }
}

export { capitalize, reverseString, calculator, caesarCypher, analyzeArray }