//Part 1
const input = require('./day1input')

// const input = [
//     'two1nine',
//     'eightwothree',
//     'abcone2threexyz',
//     'xtwone3four',
//     '4nineeightseven2',
//     'zoneight234',
//     '7pqrstsixteen',
// ]

const calibration = (i) => {
    const numbers = [];
    i.forEach((e) => {
        let firstNum = null;
        let lastNum = null;
        const wordArr = e.split('')
        wordArr.forEach(x => {
            if (/^[0-9]*$/.test(x) && firstNum === null) firstNum = x;
            if (/^[0-9]*$/.test(x)) lastNum = x;    
        })
        numbers.push(Number(firstNum + lastNum))
    })
    return numbers.reduce((acc, curr) => acc + curr)
}
console.log('[PART 1]:', calibration(input))

//Part 2
const calibration2 = (i) => {
    const newi =  i
    .map(e=>e.replace(/oneight/g,'oneeight'))
    .map(e=>e.replace(/threeight/g,'threeeight'))
    .map(e=>e.replace(/fiveight/g,'fiveeight'))
    .map(e=>e.replace(/nineight/g,'nineeight'))
    .map(e=>e.replace(/twone/g,'twoone'))
    .map(e=>e.replace(/sevenine/g,'sevennine'))
    .map(e=>e.replace(/eightwo/g,'eighttwo'))
    
    const numbers = [];
    const wordsAsNums = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9}
    newi.forEach((e) => {
        let firstNum = null;
        let lastNum = null;
        let wordArr = e.split(/(one|two|three|four|five|six|seven|eight|nine|[0-9])/)

        wordArr.forEach((x) => {
            if ((/one|two|three|four|five|six|seven|eight|nine|[0-9]/.test(x)) && firstNum === null) {
                /one|two|three|four|five|six|seven|eight|nine/.test(x) ? firstNum = String(wordsAsNums[x]) : firstNum = x;
            }
            if (/one|two|three|four|five|six|seven|eight|nine|[0-9]/.test(x)) {
                /one|two|three|four|five|six|seven|eight|nine/.test(x) ? lastNum = String(wordsAsNums[x]) : lastNum = x;
            }    
        })
        numbers.push(Number(firstNum+lastNum))

    })
    return numbers.reduce((acc, curr) => acc + curr)
}
console.log('[PART 2]:', calibration2(input))


