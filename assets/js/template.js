(function (window) {
    'use strict';

    function Template () {
        this.productsListTemplate 
        =   '<li data-id="{{id}}">'
        +       '<span class="product-photo"><img src="{{image}}" height="130" alt="{{name}}"></span>'
        +       '<h2>{{name}}</h2>'
        +       '<ul class="product-description">'
        +           '<li><span>Manufacture: </span>{{manufacture}}</li>'
        +           '<li><span>Storage: </span>{{storage}} GB</li>'
        +           '<li><span>OS: </span>{{os}}</li>'
        +           '<li><span>Camera: </span>{{camera}} Mpx</li>'
        +       '</ul>'
        +       '<h3>{{price}}$</h3>'
        +   '</li>';
    }

    Template.prototype.show = function (data) {
        var view = '';
        var i = 0;
        var l = data.length;

        for (i; i < l; i++) {
            var template = this.productsListTemplate;

            template = template.replace('{{id}}', data[i].id);
            template = template.replace('{{image}}', data[i].image.small);
            template = template.replace('{{name}}', data[i].name);
            template = template.replace('{{name}}', data[i].name);
            template = template.replace('{{manufacture}}', data[i].specs.manufacturer);
            template = template.replace('{{storage}}', data[i].specs.storage);
            template = template.replace('{{os}}', data[i].specs.os);
            template = template.replace('{{camera}}', data[i].specs.camera);
            template = template.replace('{{price}}', data[i].price);

            view = view + template;
        }
    
        return view;
    }

    window.app = window.app || {};
    window.app.Template = Template;
})(window);