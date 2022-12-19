let homeScore=0
let guestScore=0

document.addEventListener("click", e =>{
    e.preventDefault()
    e.target.dataset.home? homeAdd(JSON.parse(e.target.dataset.home)):""
    e.target.dataset.guest? guestAdd(JSON.parse(e.target.dataset.guest)):""
    e.target.id=== "reset"? reset():""  })

function renderScore(){
    document.getElementById("guest-el").textContent=guestScore
    document.getElementById("home-el").textContent=homeScore}

function reset(){
    guestScore=0
    homeScore=0
    renderScore()}

function homeAdd(x){
homeScore+=x
renderScore()}

function guestAdd(x)
{ guestScore+=x
renderScore()}



