/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let photo = document.querySelector('#photo');
let myProfile = {
    name: "Neal Coates",
    photo: {
        src: "images/coatesFam.png",
        alt: "Coates Family Pic"
    },
    favoriteFoods: [
        'Burrito',
        'Stroganoff',
        'Hamburger',
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
        place: 'Los Angeles CA',
        length: '10 years' 
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


/* Hobbies List */


/* Places Lived DataList */


