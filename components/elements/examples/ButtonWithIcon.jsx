var React = require('react');
var Button = require('../Button.jsx');

var instance = (
  <div>
    <Button icon="cloud"/>
    <Button icon="code"> test </Button>
    <Button icon="code" iconLabeled> test </Button>
    <Button icon="code" iconLabeled='right'> test </Button>
  </div> );

React.render(instance, mountNode);
