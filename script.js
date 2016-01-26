// Web Store sample objects
var AlphaIce = {
  Picture_url: '<img src=https://cdn.shopify.com/s/files/1/0946/9912/products/right_9814645a-d2c7-433f-b0e2-8d249782b76d_1024x1024.jpg?v=1442899238.jpg>',
  Title: "<b>Ice Edition</b>",
  Author: "Alpha One",
  ReleaseDate: 2015,
  Category: "sunglasses",
  Selling_points: 'Get ready to hit the slopes this season with the Alpha One Ice Edition!  Polarized, polcarbonate frames for quality your can trust!',
  Price: '$55.00' + ' ' + '(Always Free Shipping!)'
};

var AlphaFire = {
  Picture_url: '<img src=https://cdn.shopify.com/s/files/1/0946/9912/products/Right_1024x1024.jpg?v=1442936028.jpg>',
  Title: "<b>Fire Edition</b>",
  Author: "Alpha One",
  ReleaseDate: 2015,
  Category: "sunglasses",
  Selling_points: 'Designed for the ski season, these polarized lenses will make things clear on the slopes!',
  Price: '$55.00' + ' ' + '(Always Free Shipping!)'
};

var Blogpost1 = {
  Picture_url: '<img src=http://www.yosemitehikes.com/images/glacier-point-road-snow-350.jpg>',
  Title: "<b>Yosemite National Park</b>",
  Time: "January 19-21, 2015",
  Category: "blog",
  Selling_points: "Alphas were going cross country skiing across Yosemite! More to come soon!",
};


$(document).ready(function() {
  var showButton = $('#showButton');
  var hideButton = $('#hideButton');
  var productsList = $('#productsList');

  showButton.hide();

  showButton.click(function() {
    productsList.show("slow");
    hideButton.show();
    showButton.hide();
  });

  hideButton.click(function() {
    productsList.hide("slow");
    showButton.show();
    hideButton.hide();
  });
});


for (var key in AlphaIce) {
  if (key === 'Title') {
    $('#AlphaIce').append('<p class="sunglassestitle">' + AlphaIce[key] + '</p>');
  } else if (key === 'Price') {
      $('#AlphaIce').append('<p class="sunglassesprice">' + AlphaIce[key] + '</p>');
  } else if (key === 'Category') {
  } else {
      $('#AlphaIce').append('<p>' + AlphaIce[key] + '</p>');
  }
}

for (var key in AlphaFire) {
  if (key === 'Title') {
    $('#AlphaFire').append('<p class="sunglassestitle">' + AlphaFire[key] + '</p>');
  } else if (key === 'Price') {
      $('#AlphaFire').append('<p class="sunglassesprice">' + AlphaFire[key] + '</p>');
  } else if (key === 'Category') {
  } else { 
      $('#AlphaFire').append('<p>' + AlphaFire[key] + '</p>');
  }
}

for (var key in Blogpost1) {
  if (key === 'Title') {
    $('#Blogpost1').append('<p class="blogpost">' + Blogpost1[key] + '</p>');
  } else if (key === 'Time') {
      $('#Blogpost1').append('<p class="blogdate">' + Blogpost1[key] + '</p>');
  } else if (key === 'Category') {
  } else { 
      $('#Blogpost1').append('<p>' + Blogpost1[key] + '</p>');
  }
}


