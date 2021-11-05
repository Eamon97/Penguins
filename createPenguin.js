`use strict`;

let penguinName = document.querySelector("#inputField");
let penguinAge = document.querySelector("#ageInput");
//let penguinID = document.querySelector("#numberInput");
let happyfeet = document.querySelectorAll("#happyFeet");
let inputBtn = document.querySelector("#inputBtn");

let createPenguin = () => {
    let inputValue = inputField.value; // Make a new variable called inputValue, equal to value of input field
    // let idValue = numberInput.value;
    let ageValue = penguinAge.value;
    let feetValue = happyfeet.value;
    let newObject = {
        name: inputValue,
        age: ageValue,
        happyFeet: feetValue,
    };
    postFetch(newObject);
};

let postFetch = (object) => {
    fetch("http://localhost:8083/createPenguin", {
        method: "POST", // We are specifying we are POSTing data
        headers: {
            "Content-type": "application/JSON", // Telling the server we are sending JSON
        },
        body: JSON.stringify(object), // We will be creating an object and passing it in here
    }).then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }

        console.log(response);
    });
};

inputBtn.addEventListener('click', createPenguin);