<<<<<<< HEAD
/*$( document ).ready(function() {
  var currentWeek = 11;

  $.get('/u/get_events/', (data) => {
    var events = data;
    $('#get_events', function(){
      for(var i=0; i<events.length; i++){
        var event = events[i]
        var date = event['date'];
        $( `#${date}` ).append( `<div class='event'> ${ event['type']}, ${ event['time']}, ${event['description'] } </div>`)
      }
    })
  });

  $.get('/u/get_birthdays/', (data) => {
    var birthdays = data;
    $('#get_birthdays', function(){
      for(var i=0; i<birthdays.length; i++){
        var event = birthdays[i]
        var date = event['date'];
          $( `#birthdays` ).append( `<li>${ event['description']}, ${event['time'] } </li> `)
      }
    })
  });

  $.get('/u/get_weekly/', (data) => {
    var events = data;
    $('#get_weekly', function(){
      for(var i=0; i<events.length; i++){
        var event = events[i]
        var date = event['date'];
        if(date >=currentWeek && date < currentWeek+7){
          var day = date%7 + 1;
        $( `#${day}` ).append( `<div> ${ event['type']}, ${ event['description'], event['time'] } </div>`)
        }
      }
    })
  });

  $("#logout").click(function() {
    alert("Logging Out");
    console.log('in logout ');
    window.location('u/logout');
  });
});
*/
=======
$( document ).ready(function() {
    console.log('in events ajax');
    $('#get_events' function(data){
      var username=$.ajax({
        type: 'GET',
        dataType: 'STRING',
        url: '../routes/user/',
        var username = data;
        data:JSON.stringify({ username:username}),
        success: function(response){
          console.log(response);
        },
        error: function(response){
          console.log(error);
        }
      });
      $.ajax({
      type: 'GET', 
      dataType: 'STRING',
      url: `/u/${username}/calendar/`,
      var messages = data.getElementById('send').value;
      data: JSON.stringify({ events:events }),
      success: function(response){
        console.log(response);
      },
      error: function(error){
        console.log(error);
      }
    });
      $('#get_events' ).append( `<p>${'DATA:', data[type], data[description], data[date], data[time]}</p>` );
    });
});
>>>>>>> 70cc6c64219d39f1ce0032bd4f1e63e0b90945d9
