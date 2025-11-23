const textarea = document.getElementById("textarea")
const counter = document.getElementById("counter")
const arr = [];
textarea.addEventListener("keydown",(e)=>{
    checkCounter();
    

})

function checkCounter(){
    counter.textContent = textarea.value.length;
    if (textarea.value.length>=100) {
        counter.style.color="red";
    }else{
         counter.style.color="green";
    }
    
}

