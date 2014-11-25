var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var isActive = 'no';

var _toggleActive = function() {
    if(isActive === 'no') {
        isActive = 'yes';
    } else {
        isActive = 'no';
    }
};

var AppStore = merge(EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getActive: function() {
        return isActive;
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action; // this is our action from handleViewAction
        switch (action.actionType) {
            case AppConstants.TOGGLE_ACTIVE:
                _toggleActive();
                break;
        };
        AppStore.emitChange();

        return true;
    })
});

module.exports = AppStore;