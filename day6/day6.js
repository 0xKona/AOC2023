const input = [[46, 80, 78, 66], [214, 1177, 1402, 1024]]

const race = (input) => {
    const result = []
    input[0].forEach((e, i) => {
        const raceLength = e
        const recordDist = input[1][i]
        const holdButtonArr = Array.from(Array(e+1).keys())
        let numWaysToWin = 0
        
        holdButtonArr.forEach((x, i) => {
            const speed = x
            const timeLeft = raceLength - x 
            const distance = x * timeLeft
            if (distance > recordDist) numWaysToWin++
        })
        result.push(numWaysToWin)
    })
    console.log('[PART 1]:',result.reduce((acc, curr) => acc * curr))
}
race(input)

//PART 2
const race2 = (input) => {
    const newInput = [[],[]]
    
    const joiner = (input) => {
        newInput[0].push( Number(input[0].join('')) )
        newInput[1].push( Number(input[1].join('')) )
    }
    joiner(input)

    const result = []
    newInput[0].forEach((e, i) => {
        const raceLength = e
        const recordDist = newInput[1][i]
        const holdButtonArr = Array.from(Array(e+1).keys())
        let numWaysToWin = 0
        
        holdButtonArr.forEach((x, i) => {
            const speed = x
            const timeLeft = raceLength - x 
            const distance = x * timeLeft
            if (distance > recordDist) numWaysToWin++
        })
        result.push(numWaysToWin)
    })
    console.log('[PART 2]:',result.reduce((acc, curr) => acc * curr))
}
race2(input)

