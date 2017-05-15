(function (window) {
    'use strict';

    function View (template) {
        this.template = template;

        this.checkboxs = document.querySelectorAll('#filters input[type=checkbox]');
        this.layout = document.getElementById('layout');
        this.menuLink = document.getElementById('menuLink');
        this.allProducts = document.querySelector('#all-products #products-list');
        this.singleProduct = document.getElementById('single-product');
        this.clearFilters = document.querySelector('#filters button');
        this.singleProductContainer = document.getElementById('single-product-container');

        this.bindEvents();
    }

    View.prototype.renderProductsPage = function (data) {
        this.allProducts.innerHTML = this.template.show(data);
        this.layout.style.display = 'block';
    }

    View.prototype.renderSingleProductPage = function (data) {
        var template 
        = '<header><h1>{{name}}</h1></header>'
        + '<div><img src="{{image}}" alt="{{name}}"></div>'
        + '<footer><p>{{description}}</p></footer>';
        template = template.replace('{{name}}', data.name);
        template = template.replace('{{name}}', data.name);
        template = template.replace('{{description}}', data.description);
        template = template.replace('{{image}}', data.image.large);
        this.singleProductContainer.innerHTML = template;
        this.layout.style.display = 'none';
        this.singleProduct.classList.add('active');
    }

    View.prototype.render = function (viewCmd, data) {
        var self = this;
        var viewCommands = {
            showProducts: function () {
                self.renderProductsPage(data);
            },
            singleProduct: function () {
                self.renderSingleProductPage(data);
            }
        }
        viewCommands[viewCmd]();
    }

    View.prototype.bindEvents = function () {
        var self = this;
        this.menuLink.addEventListener('click', function () {
            self.layout.classList.toggle('active');
        });

        this.singleProduct.addEventListener('click', function () {
            self.singleProduct.classList.remove('active');
            self.layout.style.display = 'block';
        });
    }

    View.prototype.bind = function (event, handler) {
        var self = this;
        if (event === 'setFilter') {
            self.checkboxs.forEach(function (checkbox) {
                checkbox.addEventListener('click', function (e) {
                    var name = this.name;
                    var checked = e.target.checked;
                    var value = e.target.value;
                    handler(name, checked, value);
                });
            });
        }

        if (event === 'singleProduct') {
            self.allProducts.addEventListener('click', function (e) {
                var li = e.target.closest('li');
                if (!li) return;
                if (!self.allProducts.contains(li)) return;
                var id = li.dataset.id;
                if (!id) return
                handler(Number(id));
            });
        }

        if (event === 'clearFilters') {
            self.clearFilters.addEventListener('click', function (e) {
                e.preventDefault();
                self.checkboxs.forEach(function (checkbox) {
                    checkbox.checked = false;
                });
                handler();
            });
        }
    }

    window.app = window.app || {};
    window.app.View = View;
})(window);



