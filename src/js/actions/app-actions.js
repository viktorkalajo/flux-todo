var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
    toggleActive: function(){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.TOGGLE_ACTIVE,
        });
    }
}

module.exports = AppActions;