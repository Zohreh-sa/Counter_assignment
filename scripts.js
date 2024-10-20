console.log("Hello World!");
console.log("hi again!");


let count = 0
const maxCount = 5

function updateCounter() {
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

