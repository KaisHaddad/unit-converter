/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


convertBtn.addEventListener("click", function() {
    if (inputEl.value = number) {
    let unit = inputEl.value
    let resultFeet = unit * 3.281
    let resultMeters = unit * 0.304
    length.textContent = `
        ${unit} meters = ${resultFeet.toFixed(3)} feet | 
        ${unit} feet = ${resultMeters.toFixed(3)} meters
        `
    let resultGallons = unit * 0.264
    let resultLiters = unit * 3.785
    volume.textContent = `
        ${unit} liters = ${resultGallons.toFixed(3)} gallons | 
        ${unit} gallons = ${resultLiters.toFixed(3)} liters
        `
    let resultPounds = unit * 2.204
    let resultKilos = unit * 0.453
    mass.textContent = `
        ${unit} kilos = ${resultPounds.toFixed(3)} pound |
        ${unit} pound = ${resultKilos.toFixed(3)} kilos
        `
    inputEl.value = ""
    } else {
        inputEl.value = ""
    }
})
