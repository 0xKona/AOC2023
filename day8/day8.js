const input = require('./day8input')
// const input = [
//     ['RL'],
//     [
//         'AAA = (BBB, CCC)',
//         'BBB = (DDD, EEE)',
//         'CCC = (ZZZ, GGG)',
//         'DDD = (DDD, DDD)',
//         'EEE = (EEE, EEE)',
//         'GGG = (GGG, GGG)',
//         'ZZZ = (ZZZ, ZZZ)',
//     ]
// ]

const formatNodes = (input) => {
        const formatResult = {};
        input.forEach(line => {
            const parts = line.split(' = ');
            const nodeName = parts[0];
            const nodeConnections = parts[1].slice(1, -1).split(', ').map(n => n.trim());
            formatResult[nodeName] = nodeConnections;
        });
        return formatResult;
    };

const part1 = (input) => {
    const instructions = input[0][0].split('').map(i => i === 'R' ? 1 : 0);
    

    const nodes = formatNodes(input[1]);

    const getResult = (instructions, nodes) => {
        let finalCount = 0;
        let currNode = 'AAA';
        let index = 0;

        while (currNode !== 'ZZZ') {
            currNode = nodes[currNode][instructions[index]];
            finalCount++;
            index = (index + 1) % instructions.length;
        }

        return finalCount;
    };

    return getResult(instructions, nodes);
};

console.log("[PART 1]:", part1(input));




