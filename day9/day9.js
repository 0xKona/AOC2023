// const ogInput = [
//     ['0 3 6 9 12 15'],
//     ['1 3 6 10 15 21'],
//     ['10 13 16 21 30 45']
// ];

const ogInput = require('./day9input')

const transformInput = (input) => {
    return input.map(item => item[0].split(' ').map(Number));
};

const part1 = input => {
    const extrapolateNext = history => {
        let sequences = [history];
        let lastSequence = history;

        while (true) {
            let newSequence = [];
            for (let i = 1; i < lastSequence.length; i++) {
                newSequence.push(lastSequence[i] - lastSequence[i - 1]);
            }
            if (newSequence.every(v => v === 0)) break;
            sequences.push(newSequence);
            lastSequence = newSequence;
        }

        let nextValue = lastSequence[0];
        for (let i = sequences.length - 2; i >= 0; i--) {
            nextValue += sequences[i][sequences[i].length - 1];
        }
        return nextValue;
    };

    return input.reduce((sum, history) => sum + extrapolateNext(history), 0);
};
console.log(part1(transformInput(ogInput)));