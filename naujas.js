let wind = 0
let display = document.getElementById('wind-display')
console.log(display)
function up(){
    display.innerHTML = wind
    console.log(wind++)
}
up()