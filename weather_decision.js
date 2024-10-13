// Weather Decision-Making Program with Multiple Conditions

// Function to fetch current weather data from OpenWeatherMap API
function fetchWeatherData(apiKey, city) {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=39.7691&longitude=86.158¤t=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,wind_speed_10m,wind_gusts_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_hours,precipitation_probability_max,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`
    
    // Add your fetch logic here
    // For example:
    // return fetch(apiUrl).then(response => response.json())
}// Define variables for weather conditions
let isRaining = true;       // Boolean: true if it's raining, false otherwise
let temperature = 8;        // Numeric: temperature in Celsius
let windSpeed = 25;         // Numeric: wind speed in km/h

// Function to provide weather-based recommendations
function getWeatherRecommendation(isRaining, temperature, windSpeed) {
    let recommendations = [];

    // Check if it's raining
    if (isRaining) {
        recommendations.push("It's raining. Carry an umbrella.");
    }

    // Check if temperature is below 10°C
    if (temperature < 10) {
        recommendations.push("It's cold. Wear a warm coat.");
    }

    // Check if wind speed exceeds 20 km/h
    if (windSpeed > 20) {
        recommendations.push("Caution: Strong winds are blowing.");
    }

    // Additional combined conditions for more specific recommendations
    if (isRaining && temperature < 10 && windSpeed > 20) {
        recommendations.push("Combine all precautions: Carry an umbrella, wear a warm coat, and beware of strong winds.");
    } else if (isRaining && temperature < 10) {
        recommendations.push("Carry an umbrella and wear a warm coat.");
    } else if (isRaining && windSpeed > 20) {
        recommendations.push("Carry an umbrella and be cautious of strong winds.");
    } else if (temperature < 10 && windSpeed > 20) {
        recommendations.push("Wear a warm coat and beware of strong winds.");
    }

    // Provide a generic recommendation if no specific conditions are met
    if (!isRaining && temperature >= 10 && windSpeed <= 20) {
        recommendations.push("Weather looks fine. No special precautions needed.");
    }

    return recommendations;
}

// Get recommendations based on current weather conditions
let weatherRecommendations = getWeatherRecommendation(isRaining, temperature, windSpeed);

// Display the recommendations
console.log("Weather Recommendations:");
weatherRecommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec}`);
});
