/**
* @jsx React.DOM
*/

var React = require('react');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');

var _myState = function () {
    return {
        active: AppStore.getActive()
    }
}

var APP = React.createClass({
    _handleClick: function () {
        AppActions.toggleActive();
    },

    getInitialState:function() {
        return _myState();
    },

    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange)
    },

    _onChange: function() {
        this.setState(_myState());
    },

    render: function() {
        return (
            <div>
                <h1>React app active: {this.state.active}</h1>
                <button onClick={this._handleClick}>Toggle react app</button>
            </div>
        );
    }
});

module.exports = APP;