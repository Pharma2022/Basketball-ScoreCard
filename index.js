let homeScoreEl=document.getElementById("home-el")
let homeScore=0

let guestScoreEl=document.getElementById("guest-el")
let guestScore=0



function homeAdd(x){
    homeScore+=x
     homeScoreEl.textContent=homeScore
}

document.getElementById("homeBtn1").addEventListener("click",function(){
    homeAdd(1)
})
document.getElementById("homeBtn2").addEventListener("click",function(){
    homeAdd(2)
})
document.getElementById("homeBtn3").addEventListener("click",function(){
    homeAdd(3)
})


function guestAdd(x)
{ guestScore+=x
guestScoreEl.textContent=guestScore}

document.getElementById("GuestBtn1").addEventListener("click",function(){
    guestAdd(1)
})
document.getElementById("GuestBtn2").addEventListener("click",function(){
    guestAdd(2)
})

document.getElementById("GuestBtn3").addEventListener("click",function(){
    guestAdd(3)
})

function reset(){
    guestScore=0
    guestScoreEl.textContent=guestScore
    homeScore=0
    homeScoreEl.textContent=homeScore
}


document.getElementById("btn").addEventListener("click",function gfgMenu() 
            {const nav = document.querySelector('.nav');
  
            if (nav.style.display === "none") 
            {nav.style.display = "block";}
            else {nav.style.display = "none";}
              }
        )

