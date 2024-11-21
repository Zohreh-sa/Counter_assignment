console.log("Hello World!");

//catching elements
const display =document.getElementById("display");
const plusButton=document.getElementById("increase");
const minusButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const messageBox=document.getElementById("message");
let counter=0;
const maxCount = 20;


//update counter, status of decrement button and show proper messages
function updateCounter() {
    display.textContent = counter; //update counter

    minusButton.disabled = counter<=0; //Disable minus button

    if (counter>=10 && counter!=20){
        messageBox.textContent = "You have free shipping";
    } else if (counter===20){
        messageBox.textContent ="Out of stock";
        
    } else{
        message.textContent ="";
    }

    if(counter===20){
        plusButton.style.backgroundColor = "red";
        plusButton.style.color = "white";
    }else{
        plusButton.style.backgroundColor = "";
        plusButton.style.color = "";
    }
}


//increment of counter
plusButton.addEventListener("click",()=> {

    if (counter < maxCount) {
        counter++;
        updateCounter();
    } 
});

// decrement of counter
minusButton.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
});

// reset counter
resetButton.addEventListener("click",()=> {
    counter = 0;
    updateCounter();

});

updateCounter(); //update the initial counter

