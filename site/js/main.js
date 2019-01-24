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
    let iFrame1 = document.querySelector("#iframe1")
    let iFrame2 = document.querySelector("#iframe2")
    let iFrame3 = document.querySelector("#iframe3")
    let iFrame4 = document.querySelector("#iframe4")
    let iFrame5 = document.querySelector("#iframe5")
    let iFrame6 = document.querySelector("#iframe6")

    if (songID == 1) {
        iFrame1.classList.add("active")
        iFrame2.classList.remove("active")
        iFrame3.classList.remove("active")
        iFrame4.classList.remove("active")
        iFrame5.classList.remove("active")
        iFrame6.classList.remove("active")

    } else if (songID == 2) {
        iFrame2.classList.add("active")
        iFrame1.classList.remove("active")
        iFrame3.classList.remove("active")
        iFrame4.classList.remove("active")
        iFrame5.classList.remove("active")
        iFrame6.classList.remove("active")
    } else if (songID == 3) {
        iFrame3.classList.add("active")
        iFrame2.classList.remove("active")
        iFrame1.classList.remove("active")
        iFrame4.classList.remove("active")
        iFrame5.classList.remove("active")
        iFrame6.classList.remove("active")
    } else if (songID == 4) {
        iFrame4.classList.add("active")
        iFrame2.classList.remove("active")
        iFrame3.classList.remove("active")
        iFrame1.classList.remove("active")
        iFrame5.classList.remove("active")
        iFrame6.classList.remove("active")
    } else if (songID == 5) {
        iFrame5.classList.add("active")
        iFrame2.classList.remove("active")
        iFrame3.classList.remove("active")
        iFrame4.classList.remove("active")
        iFrame1.classList.remove("active")
        iFrame6.classList.remove("active")
    } else if (songID == 6) {
        iFrame6.classList.add("active")
        iFrame2.classList.remove("active")
        iFrame3.classList.remove("active")
        iFrame4.classList.remove("active")
        iFrame5.classList.remove("active")
        iFrame1.classList.remove("active")
    }   

}

