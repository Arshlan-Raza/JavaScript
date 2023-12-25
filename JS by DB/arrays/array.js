// const tweet = {
//     name:"arshlan",
//     age:20,
//     tweet:222
// };

// const newTweets = tweet;

// newTweets.tweet = 2;

// console.log(`${tweet.tweet}`);


// const videos = ['prank','js tutorial','html tutorial','learning  the js'];

// videos.forEach(function(video){
//     console.log(video);
// });

// const newVideos =  videos.map(function(video){
//     return video;
// }) // mapping the old one into new one 


// find -->  returns the first value you  are searching for 
// const searchTutorial = videos.find(function(video){
//     return video.includes('html');
// });

// console.log(searchTutorial);

/*
filter --> it works same as find but it returns multiple values
 const shortSearch = videos.filter(function(video){
     return video.length < 10;
 })

console.log(shortSearch);


const games = [
    {title:"Mass Effect" , rating :9.5},
    {title:"League of Legends" , rating :5},
    {title:"Last of Us" , rating :10},
    {title:"God of War" , rating :10},
    {title:"WWE 2k20" , rating :4},
]

const highRating  = games.filter(function(game){
    return game.rating > 9;
})

const highRatingTitles = highRating.map(function(game){
    return game.title;
})

console.log(highRatingTitles);

*/

/*
some and every 
const games = [
    {title:"Mass Effect" , rating :9.5},
    {title:"League of Legends" , rating :5},
    {title:"Last of Us" , rating :10},
    {title:"God of War" , rating :10},
    {title:"WWE 2k20" , rating :4},
]
// every  --> saare k saare 
// const checkRating = games.every(function(game){
//     return game.rating > 9;
// })

// console.log(checkRating);

// some --> kuch 
const checkRating = games.some(function(game){
    return game.rating > 9;
});

console.log(checkRating);

*/
