`use strict`;


let deletedID = document.querySelector("#numberInput");
let deletebtn = document.querySelector("#deleteBtn");

let idvalue = deletedID.ariaValueMax;

let deleteRequest = (idvalue) => {

    fetch(`http://localhost:8083/deletePenguin`, {
        method: `DELETE`
    })
        .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.statusText}`);
                return;
            }
            response.json()
                .then((data) => {
                    console.log(data);
                });
        });

};
deleteBtn.addEventListener('click', deleteRequest);