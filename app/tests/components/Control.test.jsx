var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Control = require('Control');


describe('Control', () => {
    it('should exist', () => {
        expect(Control).toExist();
    });
});

describe('render', () => {
    it('should render pause when started', () => {
        var control = TestUtils.renderIntoDocument(<Control countdownStatus="started" />);
        var $el = $(ReactDOM.findDOMNode(control));
        var $pauseButton = $el.find('button:contains(Pause)');

        expect($pauseButton.length).toBe(1);        
    });

    it('should render start when paused', () => {
        var control = TestUtils.renderIntoDocument(<Control countdownStatus="paused" />);
        var $el = $(ReactDOM.findDOMNode(control));
        var $pauseButton = $el.find('button:contains(Start)');

        expect($pauseButton.length).toBe(1);
    });
});