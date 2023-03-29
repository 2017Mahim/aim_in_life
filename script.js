const name = prompt("What's your name?");
const passion = prompt("What did you wanted to be?");
const age = prompt("How much is your age?");
const assert = document.getElementById("assert");
// const iq = 200;
const assertive = `${name}, shono, ${age} bosor boyoshe ${passion} hote chaw. ${passion} boilla tmr hogar vitre voira dimu`;
const textNode = document.createTextNode(assertive);
assert.appendChild(textNode);