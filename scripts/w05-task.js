/* W05: Programming Tasks */

/* #3 Declare and initialize global variables */
const apiUrl = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const templesElement = document.getElementById("temples");

let templeList = [];

/* #4 async displayTemples Function */


const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};
/* #5 async getTemples Function using fetch()*/

const getTemples = async () => {
    try {
        // Fetch temple data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
        // If an error occurs, return an empty array
        //return [];
    }
};


/* #6 reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* #7 filterTemples Function */
function filterTemples(temples) {
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

