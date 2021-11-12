//document.getElementById("hello_world").textContent = "Other hello world yopoooooooo";

// Gets a random number between min and max
function getRandomByRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// sets the event listener for the button
// when the button is pressed, set the dice number
// to a random D6 number
document.getElementById("button").addEventListener("click", () => {

    // get the dice number
    let randomNumber = getRandomByRange(1, 6);

    // set the dice number
    document.getElementById("output").textContent = randomNumber;

    // Logs the roll
    console.log(randomNumber);

});



