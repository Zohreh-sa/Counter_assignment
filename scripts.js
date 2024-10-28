console.log("Hello World!");
console.log("hi again!");


let count = 0
const maxCount = 5

function updateCounter() {
    // Here you are asking your html document every time you press a button:
    // Where is an element with id counter?
    // In a proper solution, this could cause performance issues, 
    // so we would like to extract this lookup into a const into the body of the script.
    // If you want to learn more, lookup "caching the DOM element"
    document.getElementById("counter").innerText = count;
}

function increase() {

    if (count < maxCount) {
        count++;
        updateCounter();
    } else {
        alert(`You have reached the maximum limit!`);
    }
}

function decrease() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}


function reset() {
    count = 0;
    updateCounter();

}

