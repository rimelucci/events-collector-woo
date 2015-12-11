var city, artist;
var name, types, dates, time;

$("#submit").click(function(){
  city = $("#city-input").text();
  artist = $(":input");
  console.log(artist);
  formatedCity = city.split(" ");
  formatedName = name.split(" ");
  var link="http://api.songkick.com/api/3.0/events.json?apikey=fKR4qB0M4VT3h025&jsoncallback=?"
  //Change the url based on input
  if (city !== "") {
    link = link + "&location=";
    for (word in formatedCity) {
      link = link + word + "+";
    }
  }
  if (artist !== "") {
    link = link + "&artist_name";
    for (word in formatedName) {
      link = link + word + "+";
    }
  }
  console.log(artist !== '');
  name = []; //Names of the events
  types = []; //types e.g. concert
  dates = [];
  time = [];
  $.getJSON(link, function(data) {
    $.each(storage.append(data["resultsPage"]["results"]["event"]));
    for (i=0;i<storage.length;i++) {
      name.append(storage[i]['displayName']);
      types.append(storage[i]['type']);
      dates.append(storage[i]['start']['date']);
      time.append(storage[i]['start']['time']);
    }
    //do stuff with the data
    console.log(name);
    console.log(types);
    console.log(dates);
    console.log(time);
  });
});
