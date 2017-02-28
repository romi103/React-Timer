var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navbar = (props) => {
    return (
        <div className='top-bar'>
            <div className='top-bar-left'>
                <ul className='menu'>
                    <li className='menu-text'>React Timer App</li>
                    <li><IndexLink to="/" activeClassName='active'>Timer</IndexLink></li>
                    <li><Link to="/" activeClassName='active'>Countdown</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className='menu-text'>Created by <a href="http://romi103.github.io/" target="_blank">Roman Lorent</a></li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navbar;