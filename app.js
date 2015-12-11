var artist;
var name, types, dates, time;
var tog=false;
$('#toggle').click(function(event){
  event.preventDefault();
  tog = !tog;
});

$("#submit").click(function(){
  artist = document.getElementById("artist-input").value;
  formatedName = artist.split(" ");
  var link="http://api.songkick.com/api/3.0/events.json?apikey=fKR4qB0M4VT3h025&jsoncallback=?"
  //Change the url based on input
  $("#toggle").click(function(){
    link = link + "&location=clientip";
  });
  if (artist !== "") {
    link = link + "&artist_name=";
    for (i=0;i<formatedName.length;i++) {
      link = link + formatedName[i];
      link = link + "+";
    }
  }
  if (tog) {
    link = link + "&location=clientip";
  }
  name = []; //Names of the events
  types = []; //types e.g. concert
  dates = [];
  time = [];
  $.getJSON(link, function(data) {
    console.log("IN THERE");
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
