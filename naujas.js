let wind = 0
let display = document.getElementById('wind-display')
function up(){
 wind = ++wind
 display.innerHTML = wind
}
up()
function down(){
    wind = --wind
    display.innerHTML = wind
}
down()