// const input = require('./day4-input')
const input = [
    "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
]

const format = (input) => {
    const newArr = []
    input.forEach(e => {
        const removeCardNum = e.split(':').slice(1)
        removeCardNum.forEach(e => {
            const splitted = e.split('|')
            const splitReturn = []
            splitted.forEach(e => {
                splitReturn.push(e.split(' ').filter((word) => word !== ''))
            })
            newArr.push(splitReturn)
        })
    })
    return newArr
}

//PART 1
const part1 = (input) => {
    const arr = format(input)
    const points = []
    arr.forEach((e, i) => {
        const matches = []
        const winNums = e[0]
        const userNums = e[1]
        winNums.forEach((e) => {
            if (userNums.includes(e)) matches.push('win')
        })
        if (matches.length === 0) return;
        let matchResult = 0
        matches.forEach((e, i) => {
            if (i === 0) matchResult = 1
            else matchResult = matchResult * 2
        })
        points.push(matchResult)
    })    
    
    
    const results = points.reduce((acc, curr) => acc + curr)
    console.log('[PART 1]:',results)
}

part1(input)

//PART 2
const part2 = (input) => {
    const arr = format(input);
    let numOfScratchCards = 0;
    console.log('Start Scratchcards', numOfScratchCards)
    // console.log('Arr:', arr)
    let timesCalled = 0
    const checkTickets = (arr) => {
        
        timesCalled++
        arr.forEach((currCard, currCardIndex) => {
            
            let numOfMatches = 0
            const winNums = currCard[0]
            const userNums = currCard[1]
            winNums.forEach((e, i) => {
                
                if (userNums.includes(e)) numOfMatches++
            })
            const winsAsArray = Array.from(Array(numOfMatches+1).keys()).slice(1)
            // console.log(winsAsArray)
            const newScratchcards = []

            winsAsArray.forEach((e, i) => {
                arr[currCardIndex+e] ? newScratchcards.push(arr[currCardIndex+e]) : null
            })
            // console.log('New Scratchcards',newScratchcards)
            if (newScratchcards.length === 0) return;
            // if (timesCalled !== 0) 
            numOfScratchCards = numOfScratchCards + arr.length;
            checkTickets(newScratchcards)
            
        })
    }
    checkTickets(arr)
    console.log('[PART 2]:', numOfScratchCards, 'Times Called', timesCalled)
    
}
part2(input)













  


