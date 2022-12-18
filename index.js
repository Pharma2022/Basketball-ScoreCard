
let homeScore=0
let guestScore=0

document.getElementById("homeBtn1").addEventListener("click",()=>homeAdd(1))
document.getElementById("homeBtn2").addEventListener("click",()=>homeAdd(2))
document.getElementById("homeBtn3").addEventListener("click",()=>homeAdd(3))
document.getElementById("GuestBtn1").addEventListener("click",()=>guestAdd(1))
document.getElementById("GuestBtn2").addEventListener("click",()=>guestAdd(2))
document.getElementById("GuestBtn3").addEventListener("click",()=>guestAdd(3))
document.getElementById("reset").addEventListener("click", reset)

function reset(){
    guestScore=0
    document.getElementById("guest-el").textContent=guestScore
    homeScore=0
    document.getElementById("home-el").textContent=homeScore
}

function homeAdd(x){
    homeScore+=x
     document.getElementById("home-el").textContent=homeScore
}



function guestAdd(x)
{ guestScore+=x
document.getElementById("guest-el").textContent=guestScore}

document.getElementById("btn").addEventListener("click",()=>{ 
            const nav = document.querySelector('.nav');
  
            nav.style.display === "none"? 
            nav.style.display = "block"
            : nav.style.display = "none"
}
        )

