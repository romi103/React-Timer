var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    render: function() {
        return (
            <div>
                <Clock totalSeconds={700}/>
            </div>
        );
    }
});

module.exports = Timer