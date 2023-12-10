const input = require('./day7-input')
// const input = [
//     "32T3K 765",
//     "T55J5 684",
//     "KK677 28",
//     "KTJJT 220",
//     "QQQJA 483",
// ]

const allEqual = arr => arr.every(val => val === arr[0]);

const twoPairCheck = (handResult) => {
    const values = Object.values(handResult).sort();
    if (values[0] === 1 && values[1] === 2 && values[2] === 2) {return true}
    return false
}
const fourOfKindCheck = (handResult) => {
    const values = Object.values(handResult).sort();
    if (values[0] === 1 && values[1] === 4) {return true}
    return false
}
const threeOfKindCheck = (handResult) => {
    const values = Object.values(handResult).sort();
    if (values[0] === 1 && values[1] === 1 && values[2] === 3) {return true}
    return false
}
const fullHouseCheck = (handResult) => {
    const values = Object.values(handResult).sort();
    if (values[0] === 2 && values[1] === 3) {return true}
    return false
}

const getHandType = (e) => {
    let type;
    const hand = e[0]
    if (!type && allEqual(hand)) { //Checks if Five of a Kind
        return 'FiveOfAKind'
    }
    const handResult = {}
    hand.forEach((e, i) => {
        handResult[e] ? handResult[e]++ : handResult[e] = 1
    })
    const objLength = Object.keys(handResult).length

    if (objLength === 2 && fullHouseCheck(handResult)) {return "FullHouse"} //Checks for Full House
    if (objLength === 2 && fourOfKindCheck(handResult)) {return "FourOfAKind"} //Checks for Four of Kind (WORKING)
    if (objLength === 3 && threeOfKindCheck(handResult)) {return "ThreeOfAKind"} //Checks if Three of a Kind (WORKING)
    if (objLength === 3 && twoPairCheck(handResult)) {return "TwoPair"}  //Checks if Two pair (WORKING)
    if (objLength === 4 ) {return "OnePair"}//Checks if One Pair (WORKS)
    if (objLength === 5) {return "HighCard"} //Checks if High Card (WORKS)
}


const part1 = (input) => {
    const strengths = {T: 10, J: 11, Q: 12, K: 13, A: 14}
    const handTypes = {HighCard: 1, OnePair: 2, TwoPair: 3, ThreeOfAKind: 4, FullHouse: 5, FourOfAKind: 6, FiveOfAKind: 7}
    const handsAsNumbers = []

    //convert card letters to numbers, and push into handsAsNumbers
    input.forEach((e, i) => {
        const arr = e.split(' ')
        const newArr = []

        const newHand = []
        arr[0].split('').forEach((e, i) => {
            /[A-Z]/.test(e) ? newHand.push(strengths[e]) : newHand.push(Number(e))
        })
        newArr.push(newHand)
        newArr.push(Number(arr[1]))
        handsAsNumbers.push(newArr)
        //turns arr to format as [[HAND AS NUMS], "BID AS STRING"]
    })

    //Get Type
    handsAsNumbers.forEach((e, i) => {
        const type = getHandType(e)
        const handTotal = e[0].reduce((acc, curr) => acc + curr)
        handsAsNumbers[i].push(handTypes[type])
        handsAsNumbers[i].push(handTotal)
    })

    // console.log(handsAsNumbers)

    //Sort By Type 
    const typeSorted = [[],[],[],[],[],[],[]]
    handsAsNumbers.forEach((e, i) => {
        switch (e[2]) {
            case 7: typeSorted[6].push(e); break;
            case 6: typeSorted[5].push(e); break;
            case 5: typeSorted[4].push(e); break;
            case 4: typeSorted[3].push(e); break;
            case 3: typeSorted[2].push(e); break;
            case 2: typeSorted[1].push(e); break;
            case 1: typeSorted[0].push(e); break;
        }
    })
    //console.log(typeSorted)
    
    //Sort By Total
    const sortedTotals = []
    //b[3] - a[3]
    typeSorted.forEach((e, i) => {
        // console.log('estart', e)
        newArr = e.sort((a, b) => {
            for (let i = 0; i < 5; i++) {
                if (a[0][i] > b[0][i]) return 1;
                if (b[0][i] > a[0][i]) return -1
            }
        })
        sortedTotals.push(newArr)
    })
    
    const sortedCard = sortedTotals.flat()
    // console.log(sortedCard)

    let result = 0
    sortedCard.forEach((e, i) => {
        const winnings = e[1] * (i + 1)
        console.log(e, winnings)
        result = result + winnings
    })
    console.log(result)
}

part1(input)

