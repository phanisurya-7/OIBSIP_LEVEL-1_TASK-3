document.getElementById("convertButton").addEventListener("click", () => {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    let result = "";

    if (isNaN(inputTemperature)) {
        result = "Please enter a valid number!";
    } else {
        switch (inputUnit) {
            case "celsius":
                result = `
                    ${inputTemperature}°C = ${(inputTemperature * 9/5 + 32).toFixed(2)}°F 
                    = ${(inputTemperature + 273.15).toFixed(2)}K`;
                break;
            case "fahrenheit":
                result = `
                    ${inputTemperature}°F = ${((inputTemperature - 32) * 5/9).toFixed(2)}°C 
                    = ${(((inputTemperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
                break;
            case "kelvin":
                result = `
                    ${inputTemperature}K = ${(inputTemperature - 273.15).toFixed(2)}°C 
                    = ${((inputTemperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                break;
            default:
                result = "Invalid unit!";
        }
    }
    document.getElementById("output").innerText = `Result: ${result}`;
});
