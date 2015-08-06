(function() {
  "use strict";
  angular
    .module("productManagement")
    .controller("ProductListCtrl",
                ["productResource",
                ProductListCtrl]);

  function ProductListCtrl(productResource) {
    var vm = this;
    // vm.products = [
    //   {
    //     "productId": 1,
    //     "productName":"Leaf Rake",
    //     "productCode":"GDN-0011",
    //     "releaseDate":"03/19/2009",
    //     "description":"Leaf Rake with 48-inch handle.",
    //     "cost":"9.00",
    //     "price":"19.95",
    //     "catagory":"garden",
    //     "tags":["leaf", "tool"],
    //     "imageUrl":"http://placehold.it/350x150"
    //   },
    //   {
    //     "productId": 2,
    //     "productName":"Hammer",
    //     "productCode":"TBX-0048",
    //     "releaseDate":"05/21/2013",
    //     "description":"Curved claw steel hammer.",
    //     "cost":"1.00",
    //     "price":"8.95",
    //     "catagory":"toolbox",
    //     "tags":["tool"],
    //     "imageUrl":"http://placehold.it/350x150"
    //   }];
    productResource.query(function(data) {
      vm.products = data;
    });

    vm.showImage = false;

    vm.toggleImage = function() {
      vm.showImage = !vm.showImage;
    }
  }
}());
