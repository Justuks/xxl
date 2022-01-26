let wind = 0
let display = document.getElementById('wind-display')

    console.log(wind)
function up(){
 while(wind <= 30){
     console.log(display.innerHTML = wind);
     wind ++}
     
 } 



up()
function down(){
    wind = --wind
    display.innerHTML = wind
}
down()