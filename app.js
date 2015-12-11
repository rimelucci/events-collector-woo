var city, artist;

$("button").click(function(){
  city = $("#city-input").text();
  artist = $("#artist-input").text();
  formatedCity = city.split(" ");
  formatedName = name.split(" ");
  var link="http://api.songkick.com/api/3.0/events.json?apikey=fKR4qB0M4VT3h025&jsoncallback=?"
  if (city !== "") {
    link = link + "&location=";
    for (word in formatedCity) {
      link = link + word + "+";
    }
  };
  if (artist !=== "") {
    link = link + "&artist_name" +
  }
  $.getJSON(link, function(data) {
    console.log(data);
  });
});
