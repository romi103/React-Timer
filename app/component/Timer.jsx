var React = require('react');
var Clock = require('Clock');
var Control = require('Control');

var Timer = React.createClass({

    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },

    componentDidUpdate: function (prevProps, prevState) {
        // handle changes of state within the component
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused': 
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000);
    },

    handleStatusChange: function (newState) {
        // handle status changes from child component - control
        this.setState({
            countdownStatus:  newState
        });
    }, 

    componentWillUnmount: function () {
        clearInterval(this.timer);
    },
    render: function() {

        var { count, countdownStatus } = this.state;
        return (
            <div>
                <h1 className="page-tile">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Control countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />     
            </div>
        );
    }
});

module.exports = Timer