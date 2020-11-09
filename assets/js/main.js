let result1=document.getElementById("result1")
let result2=document.getElementById("result2")


function loschen() {
    result1.innerHTML = " " 
    result2.innerHTML = " " 
    
}
function prozent() {
    result1.innerHTML= "%"
    prozentt = result1/100
    result2.innerHTML=prozentt 
}

function zahl(myValue) {
    result1.innerHTML += myValue

}
function gleisch() {
    result1.innerHTML+= "="
    let solved =eval(result1)
    result2.innerHTML=solved
}