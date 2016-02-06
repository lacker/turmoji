'use strict';

// TODO: some sort of selecting
var EmojiSelector = React.createClass({
  render: function() {
    return this.props.emoji.map(emoji => {
      return (
        <div>
          {emoji}
        </div>
      );
    });
  }

});
