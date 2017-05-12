(function (window) {
    'use strict';

    function Template () {
        this.productsListTemplate 
        =   '<li data-id="{{id}}'
        +       '<img src={{image}} alt={{name}}>'
        +       '<h2>{{name}}</h2>'
        +       '<ul class="product-description>'
        +           '<li><span>Manufacture: </span>{{manufacture}}</li>'
        +           '<li><span>Storage: </span>{{storage}} GB</li>'
        +           '<li><span>OS: </span>{{os}}</li>'
        +           '<li><span>Camera: </span>{{camera}} Mpx</li>'
        +       '</ul>'
        +       '<p class="product-price>{{price}}$</p>'
        +   '</li>';
    }

    Template.prototype.show = function (temp, data) {
        var view = '';

        if (temp === 'products-list') {
            var i = 0;
            var l = data.length;

            for (i; i < l; i++) {
                var template = this.productsListTemplate;

                template = template.replace('{{id}}', data[i].id);
                template = template.replace('{{image}}', data[i].image.small);
                template = template.replace('{{name}}', data[i].name);
                template = template.replace('{{manufacture}}', data[i].specs.manufacturer);
                template = template.replace('{{storage}}', data[i].specs.storage);
                template = template.replace('{{os}}', data[i].specs.os);
                template = template.replace('{{camera}}', data[i].specs.camera);
                template = template.replace('{{price}}', data[i].specs.price);

                view = view + template;
            }
        }

        return view;
    }

    window.app = window.app || {};
    window.app.Template = Template;
})(window);