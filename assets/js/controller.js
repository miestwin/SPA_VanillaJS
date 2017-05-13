(function (window) {
    'use strict';

    function Controller (view) {
        this.view = view;
        
        this.products = [
            {
                "id": 1,
                "name": "Sony Xperia Z3",
                "price": 899,
                "specs": {
                    "manufacturer": "Sony",
                    "storage": 16,
                    "os": "Android",
                    "camera": 15
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
                "rating": 4,
                "image": {
                "small": "assets/images/sony-xperia-z3.jpg",
                "large": "assets/images/sony-xperia-z3-large.jpg"
                }
            },
            {
                "id": 2,
                "name": "Iphone 6",
                "price": 899,
                "specs": {
                "manufacturer": "Apple",
                "storage": 16,
                "os": "iOS",
                "camera": 8
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
                "rating": 4,
                "image": {
                "small": "assets/images/iphone6.jpg",
                "large": "assets/images/iphone6-large.jpg"
                }
            },
            {
                "id": 3,
                "name": "HTC One M8",
                "price": 899,
                "specs": {
                "manufacturer": "HTC",
                "storage": 32,
                "os": "Android",
                "camera": 5
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
                "rating": 4,
                "image": {
                "small": "assets/images/htc-one.jpg",
                "large": "assets/images/htc-one-large.jpg"
                }
            },
            {
                "id": 4,
                "name": "Galaxy Alpha",
                "price": 899,
                "specs": {
                "manufacturer": "Samsung",
                "storage": 32,
                "os": "Android",
                "camera": 12
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
                "rating": 4,
                "image": {
                "small": "assets/images/galaxy-alpha.jpg",
                "large": "assets/images/galaxy-alpha-large.jpg"
                }
            },
            {
                "id": 5,
                "name": "Nokia Lumia",
                "price": 450,
                "specs": {
                "manufacturer": "Nokia",
                "storage": 16,
                "os": "Windows",
                "camera": 5
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
                "rating": 4,
                "image": {
                "small": "assets/images/nokia-lumia.jpg",
                "large": "assets/images/nokia-lumia-large.jpg"
                }
            },
            {
                "id": 6,
                "name": "Zte Nubia",
                "price": 399,
                "specs": {
                "manufacturer": "ZTE",
                "storage": 32,
                "os": "Android",
                "camera": 12
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
                "rating": 4,
                "image": {
                "small": "assets/images/zte-nubia.jpg",
                "large": "assets/images/zte-nubia-large.jpg"
                }
            },
            {
                "id": 7,
                "name": "Samsung Galaxy S5",
                "price": 399,
                "specs": {
                "manufacturer": "Samsung",
                "storage": 16,
                "os": "Android",
                "camera": 15
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
                "rating": 4,
                "image": {
                "small": "assets/images/galaxy-s5.jpg",
                "large": "assets/images/galaxy-s5-large.jpg"
                }
            },
            {
                "id": 8,
                "name": "Iphone 5S",
                "price": 399,
                "specs": {
                "manufacturer": "Apple",
                "storage": 16,
                "os": "iOS",
                "camera": 8
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
                "rating": 4,
                "image": {
                "small": "assets/images/iphone5s.jpg",
                "large": "assets/images/iphone5s-large.jpg"
                }
            }
        ];
        this.filters = {};
        this.selectedProduct = {};

        var self = this;
        self.view.bind('setFilter', function (name, checked, value) {
            self.setFilter(name, checked, value);
        });

        self.view.bind('singleProduct', function (id) {
            self.findProduct(id);
        });

        self.view.bind('clearFilters', function () {
            self.clearFilters();
        });
    }

    Controller.prototype.setView = function (locationHash) {
        var self = this;
        var query = locationHash.split('/');
        var route = {
            '': function () {
                self.view.render('showProducts', self.products);
            },

            '#product': function () {
                self.view.render('singleProduct', self.selectedProduct);
            },

            '#filter': function () {
               self.filterProducts();
            }
        }

        if (route[query[0]]) {
            route[query[0]]();
        } else {
            // render error page view.render(errorPage);
        }
    }

    Controller.prototype.findProduct = function (id) {
        var product = this.products.filter(function (item) {
            if (item.id === id) {
                return true;
            }
            return false;
        });
        this.selectedProduct = product[0];
        window.location.hash = '#product/' + this.selectedProduct.id;
    }

    Controller.prototype.setFilter = function (name, checked, value) {
        if (checked) {
            if (!(this.filters[name] && this.filters[name].length)) {
                this.filters[name] = [];
            }

            this.filters[name].push(value);
        }

        if (!checked) {
            if (this.filters[name] && this.filters[name].length && (this.filters[name].indexOf(value)) !== -1) {
                const index = this.filters[name].indexOf(value);
                this.filters[name].splice(index, 1);
                if (!this.filters[name].length) {
                    delete this.filters[name];
                }
            }
        }

        this.createQeryHash();
    }   

    Controller.prototype.clearFilters = function () {
        this.filters = {};
        window.location.hash = '#';
    }

    Controller.prototype.filterProducts = function () {
        var products = [...this.products];
        var results = [];
        var isFiltered = false;

        for (let spec in this.filters) {
            if (this.filters.hasOwnProperty(spec) && spec.length) {
                this.filters[spec].forEach(function (filter) {
                    products.forEach(function (product) {
                        if (String(product.specs[spec]).toLowerCase() === filter) {
                            results.push(product);
                            isFiltered = true;
                        }
                    });
                });
                if (isFiltered) {
                    products = [...results];
                    results = [];
                }
            }
        }
        
        this.view.render('showProducts', products);
    }

    Controller.prototype.createQeryHash = function () {
        if (Object.keys(this.filters).length !== 0) {
            window.location.hash = '#filter/' + JSON.stringify(this.filters);
        } else {
            window.location.hash = '#';
        }
    }

    window.app = window.app || {};
    window.app.Controller = Controller;
})(window);