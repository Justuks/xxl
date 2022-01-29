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
lower()