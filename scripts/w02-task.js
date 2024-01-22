/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = "Neal Coates";
const currentYear = "2024";
const profilePicture = "images/CoatesFam.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');
const foodElement = document.getElementById('food');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);





/* Step 5 - Array */
let favFoods = [" Burritos", " Hamburgers", " Strogonoff", " Pizza", " Ravioli", " Sausage"];
foodElement.innerHTML = favFoods;

let newfood = " Pineapple";
favFoods.push(newfood);
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift(newfood);
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop(newfood);
foodElement.innerHTML += `<br>${favFoods}`;

// test for git
