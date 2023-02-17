let homeScore=0
let guestScore=0
const homeEl = document.getElementById("home-el")
const guestEl = document.getElementById("guest-el")


document.addEventListener("click", ({target:{dataset:{guest,home}, id}}) =>{
        guest && Add(guest,false)
        home && Add(home,true)
        id=== "reset" &&  reset()  })

const  reset= ()=>{
    guestScore=0
    homeScore=0
    renderScore()
}

const Add= (x,bool) =>{
     bool ?  homeScore+=Number(x) : guestScore+=Number(x)
    renderScore()
    }
    
const renderScore= ()=>{
    setleader()
    homeEl.innerHTML=homeScore
    guestEl.innerHTML= guestScore   
    }

const setleader = ()=>{
     const el1= homeScore>guestScore ? homeEl: guestEl
     const el2= guestScore>homeScore ? homeEl: guestEl
     const isEqual = homeScore===guestScore
    changeLeader(el1,el2,isEqual)
}
 
const changeLeader= (a,b,bool)=>{
    if (bool){
        a.classList.remove("lead")
        b.classList.remove("lead")
    }
    else{
        a.classList.add("lead")
        b.classList.remove("lead")
    }   
} 
   
reset()