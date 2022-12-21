let homeScore=0
let guestScore=0

document.addEventListener("click", e =>{
    e.preventDefault()
    e.target.dataset.home? homeAdd(JSON.parse(e.target.dataset.home)):""
    e.target.dataset.guest? guestAdd(JSON.parse(e.target.dataset.guest)):""
    e.target.id=== "reset"? reset():""  })

const renderScore= (elementId,score)=>document.getElementById(`${elementId}`).textContent=score   

const  reset= ()=>{
    guestScore=0
    homeScore=0
    renderScore("home-el", guestScore)
    renderScore("guest-el", homeScore)}

const homeAdd= x =>{
    homeScore+=x
    renderScore("home-el", homeScore)}

const guestAdd= x =>{ guestScore+=x
    renderScore("guest-el", guestScore)}



