const btns =document.getElementsByTagName("button")
let screen= document.getElementById("screen")
let value= screen
function AddInput(value){
    screen.value += value
}

function InputEqual(){
    let res=eval(screen.value)
    console.log(eval(screen.value))
    screen.value=res
}
