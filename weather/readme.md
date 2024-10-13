# Weather Decision-Making Program

This JavaScript program provides weather-based recommendations using multiple conditions. It analyzes current weather data and offers suggestions based on rainfall, temperature, and wind speed.

## Features

- Fetches weather data from OpenWeatherMap API
- Provides recommendations based on:
  - Rainfall
  - Temperature
  - Wind speed
- Combines multiple conditions for more specific recommendations

## Usage

1. Set the weather conditions in the variables:
   ```javascript
   let isRaining = true;
   let temperature = 8;
   let windSpeed = 25;
Run the program to get weather recommendations:

let weatherRecommendations = getWeatherRecommendation(isRaining, temperature, windSpeed);



Display the recommendations:

console.log("Weather Recommendations:");
weatherRecommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec}`);
});



API Integration
The program includes a fetchWeatherData function that can be used to get real-time weather data from the OpenWeatherMap API. To use this feature:

Sign up for an API key at OpenWeatherMap
Replace apiKey and city parameters in the fetchWeatherData function call
Customization
You can easily modify the conditions and recommendations in the getWeatherRecommendation function to suit your specific needs.

License
This project is open source and available under the MIT License.
