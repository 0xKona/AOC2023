const maxCubes = {'red': 12, 'green': 13, 'blue': 14}

const games = require('./day2-input')
// const games = ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
//     'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
//     'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
//     'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
//     'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
// ]

const part1 = (input) => {
    const possibleIndex = []

    input.forEach((e, i) => {
        let possible = true;
        const arr = e.split(/\;|\:/).slice(1)
        const rounds = []
        
        arr.forEach((x) => {
            const round = x.split(",")
            rounds.push(round)
        })

        rounds.forEach((x) => {
            const Count = {'red': 0, 'green': 0, "blue": 0}
            x.forEach((e, i) => {
                const colNum = e.split(' ').slice(1)
                const colour = colNum[1]
                const amount = Number(colNum[0])
                Count[colour] = Count[colour] + amount
            })
            if (Count.red <= maxCubes.red && Count.green <= maxCubes.green && Count.blue <= maxCubes.blue) {
                return
            }
            possible = false
        })

        if (possible) {
            possibleIndex.push(i+1)
        }
    })

    const result = possibleIndex.reduce((acc, curr) => acc + curr)

    console.log('[PART 1]:',result)
}

part1(games)

const part2 = (input) => {
    const Powers = []

    input.forEach((e, i) => {
        const arr = e.split(/\;|\:/).slice(1)
        const rounds = []
        
        arr.forEach((x) => {
            const round = x.split(",")
            rounds.push(round)
        })

        const Count = {'red': 0, 'green': 0, "blue": 0}
        rounds.forEach((x) => {
            
            x.forEach((e, i) => {
                const colNum = e.split(' ').slice(1)
                const colour = colNum[1]
                const amount = Number(colNum[0])
                amount > Count[colour] ? Count[colour] = amount : null
            })
        })
            const power = Count.red * Count.green * Count.blue
            Powers.push(power)
    })

    const result = Powers.reduce((acc, curr) => acc + curr)
    console.log('[PART 2]:',result)
}

part2(games)