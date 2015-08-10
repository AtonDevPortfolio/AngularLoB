(function () {
	"use strict";
	
	angular
		.module("productManagement")
		.controller("ProductDetailCtrl",
								ProductDetailCtrl);
	
	function ProductDetailCtrl() {
		var vm = this;
		
		vm.product = {
          "productId": 2,
          "productName" : "Leaf Rake",
          "productCode" : "GDN-0011",
          "releaseDate" : "03/19/2009",
          "description" : "Leaf Rake with 48-inch handle.",
          "cost" : "9.00",
          "price" : "19.95",
          "catagory" : "garden",
          "tags" : ["leaf", "tool"],
          "imageUrl" : "http://placehold.it/350x150"
        };
		
		vm.title = "Product Detail: " + vm.product.productName;
		
		if (vm.product.tags) {
				vm.product.tagList = vm.product.tags.toString();
		}
	}
}());