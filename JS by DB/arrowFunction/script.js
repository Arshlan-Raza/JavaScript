// const videos = ['prank','js tutorial','html tutorial','learning  the js'];

// const newVideos =  videos.map(function(video){
//    return video.length < 10 ? video: "nope"
// }) 


// // const arrowVideos = videos.map(video => {
// //     return video.length <10 ? video : "nope";
// // })


// // if you remove the curly braces then no need to even return it automatically return
// // const arrowVideos = videos.map(video => (video.length <10 ? video : "nope"));

// const arrowVideos  = videos.map (video => video + " hey");
// console.log(arrowVideos);



// // if it has more then one line of code then you have to use the curly braces 



// sorting 

const items = ["Banana","Orange","Apple","Mango"];

const rating = [92,56,4,2,22,45.6,10,80];

// rating.sort((a,b) => a -b );

// console.log(rating);

const ascRating = [...rating];

ascRating.sort((a,b) => a - b);

console.log (ascRating);
console.log(rating);

const name = "arshlanraza";



// const letter = name.split("");
// or 
const letter = [...name]; 

console.log(letter);


//combine 
// const all = items.concat(rating);
// OR 
const all = [...items,...rating];

console.log(all);