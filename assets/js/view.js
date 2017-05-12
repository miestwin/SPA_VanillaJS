(function (window) {
    'use strict';

    function View (template) {
        this.template = template;

        this.checkboxes = document.querySelectorAll('#filters input[type=checkboxe]');
        this.layout = document.getElementById('layout');
        this.menuLink = document.getElementById('menuLink');
        this.allProducts = document.querySelector('#all-products #content');
        this.singleProduct = document.getElementById('single-product');
        this.clearFilters = document.querySelector('#filters button');
    }

    View.prototype.renderProductsPage = function (data) {
        this.allProducts.innerHTML = this.template.show(data);
    }

    

    window.app = window.app || {};
    window.app.View = View;
})(window);

// const layout = document.getElementById('layout');
// const menuLink = document.getElementById('menuLink');

// menuLink.addEventListener('click', function (e) {
//     layout.classList.toggle('active');
// });


