var React = require('react');

var Clock = React.createClass({

    getDefaultProps: function(){
        totalSeconds: 0
    },

    propTypes: {
        totalSeconds: React.PropTypes.number
    },

    formatSeconds: function (totalSeconds) {

        //add leading zeror if min/sec less than 10
        function leadingZero(par) {
            if (par < 10) {
                par = '0' + par;
            }
            return par;
        }

        var seconds = leadingZero(totalSeconds % 60);
        var minutes = leadingZero(Math.floor(totalSeconds / 60));

        return minutes + ':' + seconds;

    },

    render: function() {
        var {totalSeconds} = this.props;

     return (
         <div className="clock">
            <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
         </div>
     );
    }
});

module.exports = Clock;