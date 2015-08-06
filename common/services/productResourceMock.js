(function() {
  "use strict";
  var app = angular
              .module("productResourceMock",
                      ["ngMockE2E"]);

  app.run(function ($httpBackend) {
    var products = [
        {
          "productId": 1,
          "productName":"Leaf Rake",
          "productCode":"GDN-0011",
          "releaseDate":"03/19/2009",
          "description":"Leaf Rake with 48-inch handle.",
          "cost":"9.00",
          "price":"19.95",
          "catagory":"garden",
          "tags":["leaf", "tool"],
          "imageUrl":"http://placehold.it/350x150"
        },

        {
          "productId": 2,
          "productName":"Garden Cart",
          "productCode":"GDN-0021",
          "releaseDate":"03/18/2010",
          "description":"15 gallon capacity rolling garden cart.",
          "cost":"20.00",
          "price":"32.95",
          "catagory":"garden",
          "tags":["barrow", "cart", "tool"],
          "imageUrl":"http://placehold.it/350x150"
        },

        {
          "productId": 1,
          "productName":"Leaf Rake",
          "productCode":"GDN-0011",
          "releaseDate":"03/19/2009",
          "description":"Leaf Rake with 48-inch handle.",
          "cost":"9.00",
          "price":"19.95",
          "catagory":"garden",
          "tags":["leaf", "tool"],
          "imageUrl":"http://placehold.it/350x150"
        },

        {
          "productId": 2,
          "productName":"Leaf Rake",
          "productCode":"GDN-0011",
          "releaseDate":"03/19/2009",
          "description":"Leaf Rake with 48-inch handle.",
          "cost":"9.00",
          "price":"19.95",
          "catagory":"garden",
          "tags":["leaf", "tool"],
          "imageUrl":"http://placehold.it/350x150"
        }
      ];

      var productUrl = "/api/products"

      $httpBackend.whenGET(productUrl).respond(products);
      $httpBackend.whenGET(productUrl + "/1").respond(products);
      $httpBackend.whenGET(productUrl + "/2").respond(products);

  })
}());
