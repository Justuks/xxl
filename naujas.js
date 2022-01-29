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