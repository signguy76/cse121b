/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let photo = document.querySelector('#photo');
let myProfile = {
    name: "Neal Coates",
    photo: {
        src: "images/CoatesFam.png",
        alt: "Coates Family Pic"
    },
    favoriteFoods: [
        'Burritos',
        'Stroganoff',
        'Hamburgers',
        'Ice Cream',
    ],
    hobbies: [
        'Hydroponics',
        'Electronics',
        'Programming',
        'Cooking',
    ],
    placesLived: [],
}



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'San Jose, CA',
        length: '20 years',
    }
);
myProfile.placesLived.push(
    {
        place: 'Los Angeles, CA',
        length: '10 years',
    }
);
myProfile.placesLived.push(
    {
        place: 'Portland, OR',
        length: '19 years',
    }
);
myProfile.placesLived.push(
    {
        place: 'Camas, WA',
        length: '14 years',
    }
);

console.log(myProfile.placesLived);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = myProfile.name;
/* Photo with attributes */
photo.src = myProfile.photo.src;
photo.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})
/* Places Lived DataList */
let placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
    let dtElement = document.createElement("dt");
    let ddElement = document.createElement("dd");

    dtElement.textContent = place.place;
    ddElement.textContent = place.length;

    placesLivedList.appendChild(dtElement);
    placesLivedList.appendChild(ddElement);
    document.querySelector("#places-lived")
});


