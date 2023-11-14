function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value.trim());
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (isNaN(temperature) || temperature === '') {
        result.innerHTML = "Enter a valid numeric temperature.";
        return;
    }

    var convertedTemperature = (unit === "celsius") ? (temperature * 9/5) + 32 : (temperature - 32) * 5/9;

    result.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
}