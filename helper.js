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

export { capitalize, reverseString }