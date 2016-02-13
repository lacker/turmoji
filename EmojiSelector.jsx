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

let emojiStyle = {
  fontSize: '500%',
  float: 'left',
  margin: '20px',
};

class EmojiSelector extends React.Component {
  onClick(emoji) {
    console.log(emoji);
    renderAll();
  }
  
  render() {
    let parts = [];
    for (let i = 0; i < this.props.emojiList.length; i++) {
      let emoji = this.props.emojiList[i];
      parts.push(
        <div style={emojiStyle} key={i} onClick={() => this.onClick(emoji)}>
          {emoji}
        </div>
      );
    }
    return <div>{parts}</div>
  }
}


function renderAll() {
  let emojiList = [randomEmoji(), randomEmoji(), randomEmoji()];
  ReactDOM.render(<EmojiSelector emojiList={emojiList}/>,
                  document.getElementById('hello'));
}
