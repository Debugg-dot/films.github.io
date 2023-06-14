let clientID = "mGvGfNb1VT3vcQO_dnRmgi4V9SoTGWDnwY_mxRbGnuU";


let aboutUrl1 = `https://api.unsplash.com/photos/ZnwHMUykaU8/?client_id=${clientID}`;
let aboutUrl2 = `https://api.unsplash.com/photos/sEHUqA0gGzE/?client_id=${clientID}`;
let aboutUrl3 = `https://api.unsplash.com/photos/u0y_5fhM3DU/?client_id=${clientID}`;


let aboutcard1 = document.querySelector("#about1");
let aboutcard2 = document.querySelector("#about2");
let aboutcard3 = document.querySelector("#about3");


fetch(aboutUrl1)
    .then((response) => response.json())
    .then((jsonData) => {
        aboutcard1.src = jsonData.urls.regular;
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
fetch(aboutUrl2)
    .then((response) => response.json())
    .then((jsonData) => {
        aboutcard2.src = jsonData.urls.regular;
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
fetch(aboutUrl3)
    .then((response) => response.json())
    .then((jsonData) => {
        aboutcard3.src = jsonData.urls.regular;
    })
    .catch((error) => {
        console.log("Error: " + error);
    });