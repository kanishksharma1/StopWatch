// START

document.querySelector("#start").addEventListener('click', ()=>{

//SECONDS

let timerSec = setInterval(()=>{
    let sec = document.querySelector("#seconds").innerHTML 
        sec ++
        document.querySelector("#seconds").innerHTML = sec
        if (sec == 60) {
            document.querySelector("#seconds").innerHTML = 0
        }
    }, 1000)


    //MINUTES

    let timerMin =  setInterval(()=>{
            let min = document.querySelector("#minutes").innerHTML 
            min++
            document.querySelector("#minutes").innerHTML = min
        }, 60000)

        // STOP

        document.querySelector("#stop").addEventListener("click", () => {
             clearTimeout(timerSec)
             clearTimeout(timerMin)
         })

         // RESET

        document.querySelector("#reset").addEventListener("click", () => {
        document.querySelector("#seconds").innerHTML = 0
        document.querySelector("#minutes").innerHTML = 0
    }) 


})




