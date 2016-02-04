'use strict';

const emoji = require('emoji-named-characters');

let allEmoji = [];
for (let e in emoji) {
  allEmoji.push(e);
}

function randomEmojiName() {
  return allEmoji[Math.floor(Math.random() * allEmoji.length)];
}

function randomEmoji() {
  return emoji[randomEmojiName()].character;
}

function main() {
  console.log(randomEmoji());
  setTimeout(main, 1000);
}

if (!module.parent) {
  main();
}
