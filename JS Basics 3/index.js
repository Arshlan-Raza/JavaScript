

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

let num = [1,2 ,3,4,5,6,7];

num.pop();

console.log(num);

num.shift();

console.log(num);

num.splice(2,1);

console.log(num);


const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
  const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
  const newCar = myCar.slice(0, 2);

  console.log(newCar);