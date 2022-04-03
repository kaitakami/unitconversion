let value = 20;

let mainNumber = document.getElementById("number");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

mainNumber.textContent = value;

let meterFeet = value * 3.28084
let feetMeter = value / 3.28084

let litersGallons = value * 0.2641729
let gallonsLiters = value / 0.2641729

let kilosPounds = value * 2.204623
let poundsKilos = value / 2.204623

length.textContent = value + " meters " + "= " + meterFeet.toFixed(3) + " feet" + " | " + value + " feet" + " = " + feetMeter.toFixed(3)  + " meters";

volume.textContent = value + " liters " + "= " + litersGallons.toFixed(3) + " gallons" + " | " + value + " gallons" + " = " + gallonsLiters.toFixed(3)  + " liters";

mass.textContent = value + " kilos " + "= " + kilosPounds.toFixed(3) + " pounds" + " | " + value + " pounds" + " = " + poundsKilos.toFixed(3)  + " kilos";



