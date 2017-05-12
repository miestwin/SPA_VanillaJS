(function (window) {
    'use strict';

    function Controller (view) {
        this.view = view;
        
        this.products = [];
        this.filters = {};
    }

    Controller.prototype.setView = function (locationHash) {
        var route = locationHash.split('/');

    }

    Controller.prototype.setFilter = function (name, checked, value) {
        if (checked) {
            if (!(this.filters[name] && filters[name].length)) {
                filters[name] = [];
            }

            filters[name].push(value);
        }

        if (!checked) {
            if (filters[name] && filters[name].length && (filters[name].indexOf(value)) !== -1) {
                const index = filters[name].indexOf(value);
                filters[name].splice(index, 1);
                if (!filters[name].length) {
                    delete filters[name];
                }
            }
        }

        
    }   

    window.app = window.app || {};
    window.app.Controller = Controller;
})(window);