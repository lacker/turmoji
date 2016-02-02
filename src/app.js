'use strict';

const emoji = require('emoji-named-characters');

let allEmoji = [];
for (let e in emoji) {
  allEmoji.push(e);
}

// TODO: return actual emoji
function randomEmoji() {
  return allEmoji[Math.floor(Math.random() * allEmoji.length)];
}

for (let i = 0; i < 10; i++) {
  console.log(randomEmoji());
}
