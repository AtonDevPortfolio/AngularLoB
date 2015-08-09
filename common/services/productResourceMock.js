(function() {
  "use strict";
  var app = angular
              .module("productResourceMock",
                      ["ngMockE2E"]);

  app.run(function ($httpBackend) {
    var products = [
        {
          "productId": 1,
          "productName" : "Leaf Rake",
          "productCode" : "GDN-0011",
          "releaseDate" : "03/19/2009",
          "description" : "Leaf Rake with 48-inch handle.",
          "cost" : "9.00",
          "price" : "19.95",
          "catagory" : "garden",
          "tags" : ["leaf", "tool"],
          "imageUrl" : "http://placehold.it/350x150"
        },

        {
          "productId": 2,
          "productName" : "Garden Cart",
          "productCode" : "GDN-0021",
          "releaseDate" : "03/18/2010",
          "description" : "15 gallon capacity rolling garden cart.",
          "cost" : "20.00",
          "price" : "32.95",
          "catagory" : "garden",
          "tags" : ["barrow", "cart", "tool"],
          "imageUrl" : "http://placehold.it/350x150"
        },

        {
          "productId": 1,
          "productName" : "Leaf Rake",
          "productCode" : "GDN-0011",
          "releaseDate" : "03/19/2009",
          "description" : "Leaf Rake with 48-inch handle.",
          "cost" : "9.00",
          "price" : "19.95",
          "catagory" : "garden",
          "tags" : ["leaf", "tool"],
          "imageUrl" : "http://placehold.it/350x150"
        },

        {
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
        }
      ];

      var productUrl = "/api/products";

      $httpBackend.whenGET(productUrl).respond(products);

      var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '' );

      $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
        var product = {"productId": 0};
        var parameters = url.split('/');
        var length = parameters.length;
        var id = parameters[length - 1];

        if (id > 0) {
          for (var i = 0; i < products.length; i++) {
            if (products[i].productId == id) {
              product = products[i];
              break;
            }
          };
        }
        return [200, product, {}];
      });

      $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
        var product = angular.fromJson(data);

        if (!product.productId) {
          // new product Id
          product.productId = products[products.length - 1].productId + 1;
          products.push(product);
        }
        else {
          // Updated product
          for (var i = 0; i < products.length; i++) {
            if (products[i].productId == product.productId) {
                products[i] = product;
                break;
            }
          };
        }
        return [200, product, {}];
      });

  // Pass through any requests for application files
  $httpBackend.whenGET(/app/).passThrough();
  });

}());
