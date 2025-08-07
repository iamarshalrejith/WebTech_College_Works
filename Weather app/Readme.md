# 🌤️ Weather App  
A weather application that allows users to check the current weather for any city around the world. It fetches real-time data from the OpenWeatherMap API and displays temperature, humidity, and wind speed, ensuring users get accurate weather updates.

## 📌 Overview
Weather App is a frontend project built using HTML, CSS, and JavaScript. It provides users with real-time weather details and an intuitive user interface for easy navigation.

## 🚀 Features
✅ Search for weather in any city worldwide.  
✅ Display current temperature, humidity, and wind speed.  
✅ Dynamic weather icons update based on weather conditions (e.g., rain, snow, clear sky).  
✅ Error handling for invalid city names.  
✅ Responsive design with a clean UI.  

## 🛠️ Technologies Used
- **HTML5** for structure.  
- **CSS3** for styling with modern design principles.  
- **JavaScript** for logic and API integration.  
- **OpenWeatherMap API** for real-time weather data.  

## ⚙️ Getting Started
### 📌 Prerequisites
Ensure you have the following:
- A web browser to run the application.
- A valid OpenWeatherMap API key (Get it [here](https://openweathermap.org/)).

### 📥 Installation & Setup
#### Clone the Repository:
```sh
git clone https://github.com/iamarshalrejith/Frontend-projects.git
cd "Frontend-projects/HTML CSS Js Projects/Weather app"
```

#### Update API Key:
Open `script.js` and replace the `apikey` variable with your own OpenWeatherMap API key.
```js
const apikey = "YOUR_API_KEY_HERE";
```

#### Run the Application:
Simply open the `index.html` file in your browser.

## 🧠 How It Works
1. Users enter the name of a city in the search box.
2. On pressing the search button, the app sends a request to the OpenWeatherMap API.
3. The API returns weather data such as temperature, humidity, and wind speed.
4. The weather icon and details update dynamically based on the response.
5. If an invalid city name is entered, an error message is displayed.

## 📁 File Structure
```plaintext
/weather-app
├── index.html     # Main HTML file
├── style.css      # Stylesheet for UI design
├── script.js      # JavaScript file with logic and API calls
├── /Images        # Folder containing weather icons
│   ├── cloudy.png
│   ├── snow.png
│   ├── clear-sky.png
│   ├── drizzle.png
│   ├── haze.png
│   ├── rain.png
│   ├── humidity.png
│   ├── wind.png
│   ├── search.png
```

## 🤝 Contributing
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -am 'Add new feature'`.
4. Push to your fork: `git push origin feature-name`.
5. Open a Pull Request.

### How You Can Help:
🎨 Improve UI/UX design.  
🌦️ Add additional weather data (e.g., pressure, sunrise/sunset).  
🌟 Implement a multi-day forecast feature.  
🐞 Fix bugs and optimize performance.  

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements
- **OpenWeatherMap API** - Provides real-time weather data.  
- **FontAwesome** - Icons used in the app.  
- **Google Fonts** - Used for modern typography.  