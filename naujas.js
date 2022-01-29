document.getElementById('text-appear').onclick = function(){
    document.getElementById('screen').style.visibility = 'visible';
    document.getElementById('header').innerHTML = 'PLEASE, SET YOUR PARAMETERS AND CHECK THE RESULTS';
}
let wind = 0
let display = document.getElementById('wind-display')


function up(){
    if(wind > 29)return false
   console.log(display.innerHTML = ++wind)
}
up()

function down(){
    if(wind < 1)return false
    console.log(display.innerHTML = --wind)
}
down()

let rpm = 500
let rpmDisplay = document.getElementById('rpm-display')

function high(){
    if(rpm === 2400)return false
    console.log(rpmDisplay.innerHTML  = rpm += 100)
}
high()


function low(){
    if(rpm === 600)return false
     console.log(rpmDisplay.innerHTML = rpm -= 100)
}
low()

let fuel = 5
let windOnFuel = document.getElementById('fuel-gauge')
function diesel(wind, fuel, windOnfuel){
    if(wind ++){
        windOnFuel.innerHTML = fuel + 0.3
    }
}
diesel()
