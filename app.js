var city, artist;

$("button").click(function(){
  city = $("#city-input").text();
  artist = $("#artist-input").text();
  formatedCity = city.split(" ");
  formatedName = name.split(" ");
  var link="http://api.songkick.com/api/3.0/events.json?apikey=fKR4qB0M4VT3h025&jsoncallback=?"
  //Change the url based on input
  if (city !== "") {
    link = link + "&location=";
    for (word in formatedCity) {
      link = link + word + "+";
    }
  };
  if (artist !=== "") {
    link = link + "&artist_name" +
  }
  var storage = []; // list of events and all the data
  var name = []; //Names of the events
  var artists = []; //Uris for artists' profiles
  $.getJSON(link, function(data) {
    $.each(storage.append(data["resultsPage"]["results"]["event"]));
    for (i in storage) {
      name.append(i['displayName'])
    }
    for (event in storage) {
      for (i=0;i<event.length;i++) {
        artists.append(event[i]['artist']['uri']);
        //We don't necessarily need all of the variables
      }
    }
  });
});
