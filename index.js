const {pipe} = require('lodash/fp');
const fp = require('lodash/fp');

const add5 = n => n + 5;

const val = pipe(
    add5,
    add5
  )(5)

console.log(val)