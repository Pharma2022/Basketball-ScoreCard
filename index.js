let homeScoreEl=document.getElementById("home-el")
let homeScore=0

let guestScoreEl=document.getElementById("guest-el")
let guestScore=0

function homeAdd1(){
    homeScore+=1
    homeScoreEl.textContent=homeScore
}
function homeAdd2(){
    homeScore+=2
    homeScoreEl.textContent=homeScore
}
function homeAdd3(){
    homeScore+=3
    homeScoreEl.textContent=homeScore
}

function guestAdd1(){
    guestScore+=1
    guestScoreEl.textContent=guestScore
}

function guestAdd2(){
    guestScore+=2
    guestScoreEl.textContent=guestScore
}

function guestAdd3(){
    guestScore+=3
    guestScoreEl.textContent=guestScore
}
function reset(){
    guestScore=0
    guestScoreEl.textContent=guestScore
    homeScore=0
    homeScoreEl.textContent=homeScore
}