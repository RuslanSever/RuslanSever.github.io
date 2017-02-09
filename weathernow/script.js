src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js";

  $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
  var location = "";
  var userCity=data.city;
  var userCountry=data.country;
  var userRegion=data.regionName;
  var userCoordLat=data.lat;
  var userCoordLon=data.lon;
  var units="metric"; //imperial
  var gradus;
  var speed;  
  if (units=="metric") {gradus="C"; speed="m/s"}
    else if (units="imperial") {gradus="F"; speed="mi/h"}
   // window.userCoordinates = { x: userCoordLat, y: userCoordLon }; 
  var currentWeatherCall='http://api.openweathermap.org/data/2.5/weather?lat='+userCoordLat+ '&lon='+userCoordLon+'&appid=330241eb675c26f3e64eacb243db88a4&type=accurate&units='+units;  
  window.weatherCall = {current: currentWeatherCall};
  location+= "<div id='user-city'>Now in " +userCity+"</div><div id='user-region'>"+userRegion+", "+userCountry+"</div>"; 
  
  $("#location").html(location);
    
// IP API выше ^

// openweathermap API ниже v

 $.getJSON(window.weatherCall.current, function(val) {
    var currentWeather = "";
  var currentTemp=val.main.temp;
  var currentCondition=val.weather[0].description;
  var currentWindSpeed=val.wind.speed;
  var currentWindDeg=val.wind.deg;
  var currentIcon=val.weather[0].icon;
         
 currentWeather += currentTemp+"°"+gradus+"<img id='icon' src='https://raw.githubusercontent.com/RuslanSever/RuslanSever.github.io/master/"+currentIcon+".png'><br>"+currentCondition+"<br>wind: "+currentWindSpeed+" "+speed; 
  
  $("#currentWeather").html(currentWeather);
   
   if (currentIcon == "09d" | currentIcon == "09n" | currentIcon == "10d" | currentIcon == "10n") {$('body').toggleClass('rain');}
  // else if (currentIcon == "13d" | currentIcon == "13n") {$('body').toggleClass('snow');}
   
   else if (currentTemp > 0 & currentTemp <= 5) {$('body').toggleClass('plus0');}
   else if (currentTemp > 5 & currentTemp <= 10) {$('body').toggleClass('plus5');}
    else if (currentTemp > 10 & currentTemp <= 15) {$('body').toggleClass('plus10');}
    else if (currentTemp > 15 & currentTemp <= 20) {$('body').toggleClass('plus15');}
    else if (currentTemp > 20 & currentTemp <= 25) {$('body').toggleClass('plus20');}
    else if (currentTemp > 25 & currentTemp <= 30) {$('body').toggleClass('plus25');}
    else if (currentTemp > 30 & currentTemp <= 35) {$('body').toggleClass('plus30');}
    else if (currentTemp > 35) {$('body').toggleClass('plus35');}
   
   else if (currentTemp <= 0 & currentTemp > -5) {$('body').toggleClass('minus0');}
   else if (currentTemp <= -5 & currentTemp > -10) {$('body').toggleClass('minus5');}
   else if (currentTemp <= -10 & currentTemp > -15) {$('body').toggleClass('minus10');}
   else if (currentTemp <= -15 & currentTemp > -20) {$('body').toggleClass('minus15');}
   else if (currentTemp <= -20 & currentTemp > -25) {$('body').toggleClass('minus20');}
   else if (currentTemp <= -25 & currentTemp > -30) {$('body').toggleClass('minus25');}
   else if (currentTemp <= -30 & currentTemp > -35) {$('body').toggleClass('minus30');}
   else if (currentTemp <= -35) {$('body').toggleClass('minus35');}
   
   
$('body').toggleClass('');
   
 });
  });
