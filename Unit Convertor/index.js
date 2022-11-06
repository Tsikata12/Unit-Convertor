let input = document.getElementById("input")
let button = document.getElementById("convert")

let metersFt = document.getElementById("meters-ft")
let gallonsLtr = document.getElementById("gallons-ltr")
let kilosPds = document.getElementById("kilos-pds")




button.addEventListener("click", function() {
    
    metersFeet()

    gallonsLitre()

    kilosPounds()

    input.value = ""
})




function metersFeet() {

    let inputNumber = Number(input.value)

    let meters = (inputNumber * 3.281).toFixed(3)

    let feet = (inputNumber / 3.281).toFixed(3)

    metersFt.textContent = `${inputNumber} meters = ${meters} feet | ${inputNumber} feet = ${feet} meters`
}


function gallonsLitre() {

    let inputNumber = Number(input.value)

    let gal = (inputNumber * 0.264 ).toFixed(3)

    let ltr= (inputNumber / 0.264 ).toFixed(3)

    gallonsLtr.textContent = `${inputNumber} litres = ${gal} gallons | ${inputNumber} gallons = ${ltr} liters`
}


function kilosPounds() {

    let inputNumber = Number(input.value)

    let kilo = (inputNumber * 2.204 ).toFixed(3)

    let pound = (inputNumber / 2.204 ).toFixed(3)

    kilosPds.textContent = `${inputNumber} kilos =  ${kilo} pounds | ${inputNumber} pounds =  ${pound} kilos`
}