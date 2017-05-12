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

        this.bindMenuLink();
    }

    View.prototype.renderProductsPage = function (data) {
        this.allProducts.innerHTML = this.template.show(data);
    }

    View.prototype.renderSingleProductPage = function (data) {
        console.log('render ' + JSON.stringify(data));
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

    View.prototype.bindMenuLink = function () {
        var self = this;
        this.menuLink.addEventListener('click', function () {
            self.layout.classList.toggle('active');
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
            // how to get product id
        }
    }

    window.app = window.app || {};
    window.app.View = View;
})(window);



