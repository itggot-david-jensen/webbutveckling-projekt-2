function menuopen(clickity){
    let slide1 = document.querySelector(".menu")
    let slide2 = document.querySelector(".menubackground")
    slide1.classList.add("open")
    slide2.classList.add("open")
}

function menuclose(clickity){
    let slide1 = document.querySelector(".open")
    slide1.classList.remove("open")
    let slide2 = document.querySelector(".open")
    slide2.classList.remove("open")
}

function randomsong(buttonclikcity){
    let songID = Math.floor(Math.random()*6)+1

    if (songID == 1) {
// You've been gnomed
        document.getElementById("randomsongframe").innerHTML = '<iframe  id="iframe" src="https://www.youtube.com/embed/6n3pFFPSlW4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (songID == 2) {
// Nyan cat 10 hours
        document.getElementById("randomsongframe").innerHTML = '<iframe  id="iframe" src="https://www.youtube.com/embed/wZZ7oFKsKzY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (songID == 3) {
// This is sparta remix 10 hours
        document.getElementById("randomsongframe").innerHTML = '<iframe  id="iframe" src="https://www.youtube.com/embed/T8r3cWM4JII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (songID == 4) {
// They're taking the hobbits to Isengard 10 hours
        document.getElementById("randomsongframe").innerHTML = '<iframe  id="iframe" src="https://www.youtube.com/embed/z9Uz1icjwrM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (songID == 5) {
// Crab Rave - Noisestorm
        document.getElementById("randomsongframe").innerHTML = '<iframe  id="iframe" src="https://www.youtube.com/embed/LDU_Txk06tM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (songID == 6) {
// We are number one but THIS IS SPARTA
        document.getElementById("randomsongframe").innerHTML = '<iframe  id="iframe" src="https://www.youtube.com/embed/dJGCBNndLHc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }   

}

function countdown(){
    var end = new Date('12/24/2019')

    var _second = 1000
    var _minute = _second * 60
    var _hour = _minute * 60
    var _day = _hour * 24
    var timer

    function showRemaining() {
        var now = new Date()
        var distance = end - now
        if (distance < 0) {

            clearInterval(timer)
            document.getElementById('countdown').innerHTML = 'countdown has expired, please contact administrator'

            return;
        }
        var days = Math.floor(distance / _day)
        var hours = Math.floor((distance % _day) / _hour)
        var minutes = Math.floor((distance % _hour) / _minute)
        var seconds = Math.floor((distance % _minute) / _second)

        document.getElementById('days').innerHTML = days + ' days'
        document.getElementById('hours').innerHTML = hours + ' hours'
        document.getElementById('minutesseconds').innerHTML = minutes + ' minutes '
        document.getElementById('minutesseconds').innerHTML += seconds + ' seconds'
    }

    timer = setInterval(showRemaining, 1000)
}

window.onload = randomsong()
window.onload = countdown()