const apiurl = "http://10.123.164.228:3000/weather?city=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city) {
    try {
        const response = await fetch(apiurl + city);
        if (!response.ok) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }

        const data = await response.json();
        const weathericon = document.querySelector(".weather-icon");

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        const condition = data.weather[0].main.toLowerCase();

        if (condition === "clouds") {
            weathericon.src = "Images/cloudy.png";
        } else if (condition === "snow") {
            weathericon.src = "Images/snow.png";
        } else if (condition === "clear") {
            weathericon.src = "Images/clear-sky.png";
        } else if (condition === "drizzle") {
            weathericon.src = "Images/drizzle.png";
        } else if (condition === "haze") {
            weathericon.src = "Images/haze.png";
        } else if (condition === "rain") {
            weathericon.src = "Images/rain.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    if (!searchbox.value.trim()) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    checkweather(searchbox.value.trim());
});
