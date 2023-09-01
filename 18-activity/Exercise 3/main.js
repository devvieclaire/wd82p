let temperature = parseInt(prompt("Temperature:"));

let weather;

if (temperature > 30) {
  weather = "It's hot outside!";
} else if (temperature >= 20 && temperature <= 30) {
  weather = "The weather is pleasant.";
} else {
  weather = "It's a bit chilly.";
}

document.getElementById("weather").textContent = weather;
