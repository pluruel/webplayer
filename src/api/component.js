import React from 'react';
import ReactDOM from 'react-dom';

var component = React.createClass({
  componentDidMount: function() {
    //Get initial width. Obviously, this will trigger a render,
    //but nothing will change, look wise.
    //But, if this is against personal taste then store this property
    //in a different way
    //But it'll complicate your determineWidth logic a bit.

    this.setState({
      elWidth: ReactDOM.findDOMNode(this.refs.the_input).getBoundingClientRect()
        .width,
    });
  },

  determineWidth: function() {
    var elWidth = ReactDOM.findDOMNode(
      this.refs.the_input,
    ).getBoundingClientRect().width;

    if (this.state.elWidth && this.state.elWidth !== elWidth) {
      this.setState({
        elWidth: elWidth,
      });
    }
  },

  render: function() {
    var styleProp = {};

    if (this.state.elWidth) {
      styleProp.style = { width: this.state.elWidth };
    }

    return (
      <input ref="the_input" onChange={this.determineWidth} {...styleProp} />
    );
  },
});
