`use strict`;

let penguinDeets = document.querySelector("#penguinDetails")
let penguinName = document.querySelector("#inputField");
let searchName = penguinName.value;

let searchPenguin = (searchName) => {
    fetch(`http://localhost:8083/${searchName}`) // 1
        .then((response) => {                              // 2 
            if (response.status !== 200) {                 // 3 
                console.error(`status: ${response.status} `);
                return;
            }
            response.json()                                // 4
                .then((data) => {
                    penguinDeets.textContent = data;
                }
                )
        })
};