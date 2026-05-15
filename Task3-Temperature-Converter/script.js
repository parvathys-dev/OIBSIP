function convertTemperature(){
    let temp = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    if(temp === "" || isNaN(temp)){
       alert("Please enter a valid number");
       return;
    }
    let result;
    if(unit === "Celsius"){
        result= (temp*9/5)+32;
        result = temp + "°C = " + result.toFixed(3) + "°F";
    }
    else if(unit === "Fahrenheit"){
        result= (temp-32)*5/9;
        result = temp + "°F = " + result.toFixed(3) + "°C";
    }
    document.getElementById("result").innerHTML = result;
}
