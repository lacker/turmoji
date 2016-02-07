import React from 'react';
import ReactDOM from 'react-dom';
 

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

class EmojiSelector extends React.Component {
  render() {
    let emojiList = [randomEmoji(), randomEmoji(), randomEmoji()];
    let parts = emojiList.map(emoji => {
      return (
        <div>
          {emoji}
        </div>
      );
    });
    return <div>{parts}</div>
  }
}

ReactDOM.render(<EmojiSelector/>, document.getElementById('hello'));
