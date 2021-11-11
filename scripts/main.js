//document.getElementById("hello_world").textContent = "Other hello world yopoooooooo";

function getRandomByRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.getElementById("button").addEventListener("click", () => {



    let randomNumber = getRandomByRange(1, 6);

    document.getElementById("output").textContent = randomNumber;


});