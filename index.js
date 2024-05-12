
// index.js

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = function(symbol = '*') {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}

module.exports = { saturdayFun, mondayWork, wrapAdjective };


// index.js

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

module.exports = saturdayFun;






