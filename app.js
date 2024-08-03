const number = document.getElementById("number");
const keyboard =  document.querySelector(".keyboard");

number.addEventListener("focus",()=>{
	keyboard.style.display = "block"

})

