let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
let weatherIcon = document.getElementById("weather-icon");

async function checkWeather(city) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=4433444b697b88e23226ef353610ea53&q=" +
      city
  );
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  if (searchInput.value) {
    checkWeather(searchInput.value);
  } else {
    console.log("E4ror");
  }
  
  searchInput.value = "";
  document.getElementById("weather").style.display = "block";
});
