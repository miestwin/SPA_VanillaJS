(function () {
    'use strict';

    function SPA () {
        this.template = new app.Template();
        this.view = new app.View(this.template);
        this.controller = new app.Controller(this.view);
    }

    var spa = new SPA ();

    function setView () {
        spa.controller.setView(window.location.hash);
    }

    window.addEventListener('DOMContentLoaded', setView);

    window.addEventListener('hashchange', setView);

})();