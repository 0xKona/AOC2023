// const input = require('./day3-input')
const input = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..", 
]

const arr = [];
const makeArr = (inputArray) => {
    inputArray.forEach((e, i) => {
        arr.push(e.split(''))
    })
}
makeArr(input);

const numReplacer = (arr) => {
    const newArr = [];
    arr.forEach((e, i) => {
        console.log(e)
    })
}
numReplacer(arr)
//To Make Work: insert each number into the indexes of each indivual digit. Needs to account for when duplicates are detected by symbol. 

const part1 = (input) => {
    input.forEach((line, lineIndex) => {
        line.forEach((char, charIndex) => {
            if (/[^A-Za-z0-9.]/.test(char)) {
                    if (/^[0-9]/.test(input[lineIndex-1][charIndex-1]) ) console.log(input[lineIndex-1][charIndex-1])
                    if (/^[0-9]/.test(input[lineIndex-1][charIndex])  )console.log(input[lineIndex-1][charIndex])
                    if (/^[0-9]/.test(input[lineIndex-1][charIndex+1]) ) console.log(input[lineIndex-1][charIndex+1])
                    if (/^[0-9]/.test(input[lineIndex][charIndex-1])  )console.log(input[lineIndex][charIndex-1])
                    if (/^[0-9]/.test(input[lineIndex][charIndex+1])  )console.log(input[lineIndex][charIndex+1]) 
                    if (/^[0-9]/.test(input[lineIndex+1][charIndex-1]) ) console.log(input[lineIndex+1][charIndex-1])
                    if (/^[0-9]/.test(input[lineIndex+1][charIndex])  )console.log(input[lineIndex+1][charIndex])
                    if (/^[0-9]/.test(input[lineIndex+1][charIndex+1]) ) console.log(input[lineIndex+1][charIndex+1])
            }
        })
    })





    result = 0;
    return result
}
part1(arr)
//I surrender