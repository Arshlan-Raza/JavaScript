

let firstName = 'Arshlan';

let lastName = new String ('Raza');

let numbers = [1,2,'arshlan','raza'];


console.log(numbers);


let course = [
    {no:1 , naam:'Arshlan'},
    {no:2,  naam:'Raza'}
];


let cour = course.find(function(course){

    return course.naam == 'Arshlan'
})


console.log(cour);