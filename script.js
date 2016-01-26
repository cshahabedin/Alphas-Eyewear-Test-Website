// Web Store sample objects
var AlphaOneIce = {
  Picture_url: <img src="http://i.telegraph.co.uk/multimedia/archive/03235/potd-husky_3235255k.jpg">,
  Title: "<b>Alpha One Ice</b>",
  ReleaseDate: 2015,
  Category: "Sunglasses",
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


for (var key in AlphaOneIce) {
  if (key === 'Title') {
    $('#AlphaOneIce').append('<p class="sunglassestype">' + AlphaOneIce[key] + '</p>');
  } else if (key === 'Category') {
  } else {
      $('#AlphaOneIce').append('<p>' + AlphaOneIce[key] + '</p>');
  }
}
