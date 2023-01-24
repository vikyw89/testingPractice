const capitalize = (arg) => {
    if (typeof arg !== "string") return arg
    const result = arg.match(new RegExp(String.raw`(?<firstLetter>^.)(?<restOfSentences>.*)`))
    const output = `${result.groups.firstLetter.toUpperCase()}${result.groups.restOfSentences}`
    return output
}

export { capitalize }