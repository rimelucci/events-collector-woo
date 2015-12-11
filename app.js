var artist;
var name, types, dates, time;
var formattedName;
var tog=false;
var storage;

var link="http://api.songkick.com/api/3.0/events.json?apikey=fKR4qB0M4VT3h025&jsoncallback=?"

$("#submit-button").click(
  function(){
    artist = $("#artist-input").val();
    formattedName = artist.split(" ");
    console.log(formattedName);
    if (artist !== "") {
      link = link + "&artist_name=";
      for (var i = 0; i < formattedName.length; i++) {
        link = link + formattedName[i];
        if (i < formattedName.length - 1){
          link = link + "+";
        }
      }
    }
    if(tog){
      link = link + "&location=clientip";
      console.log(link);
    }
    console.log(link);

    //Start reaching out to api here
    //The corresponding index of each array should be of the same event
    name = []; //Names of the events
    types = []; //types e.g. concert
    dates = [];
    time = [];
    storage = [];
    $.getJSON(link, function(data) {
      $.each(storage.append(data["resultsPage"]["results"]["event"]));
      for (i=0;i<storage.length;i++) {
        name.append(storage[i]['displayName']);
        //types.append(storage[i]['type']);
        //dates.append(storage[i]['start']['date']);
        //time.append(storage[i]['start']['time']);
      }
      console.log(name);
    });
  });

//If the button is clicked, it toggles it on or off, based on its pervious state
$('#toggle').click(function(event){
  event.preventDefault();
  tog = !tog;

});



  /*Change the url based on input
  $("#toggle").click(function(){
    link = link + "&location=clientip";
  });
  if (artist !== "") {
    link = link + "&artist_name=";
    for (i=0;i<formattedName.length;i++) {
      link = link + formattedName[i];
      link = link + "+";
      //This should be in the form: part1+part2+part3+...
    }
  }*/

  /*formatedName = artist.split(" ");
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
      //This should be in the form: part1+part2+part3+...
    }
  }
  if (tog) {
    link = link + "&location=clientip";
    //clientip is the current location of the user
  }
  //The corresponding index of each array should be of the same event
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
    $.each(name, function(index, value) {
      var head = "<h1 id='" + index + "'></h1>";
      var paragraph = "<p id='"+ index + "'></p>";
      //This makes the heading for the event
      $("#cell2").append(head).text(value);
      //This should append the type,date,time to a paragraph on the jumbotron, but we need it to loop
      $("#cell2").append(paragraph).text("Type: " + types[index] + ", Date: " + date[index] + ", Time: " + time[index]);
    });
  });*/
