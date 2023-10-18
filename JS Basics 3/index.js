

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


  let arr = [43 , 53 , 10 , 21 , 24 ];

//   for(let value of arr) {

//     console.log(value);

//   }

arr.forEach (number=>

    console.log(number)
    
);

let joined  = arr.join(',');

console.log(joined);   

let message = 'This is learning of javaScript';

let parts = message.split(' ');

console.log(arr.sort());


let numberss = [1, -2,-1, 4,-9,8];

let filterd = numberss.filter(num => num>=0) ;

console.log(filterd);


let nu = [4,5,6,7,8];

console.log(nu);

let items = nu.map(num=>'student'+num);

console.log(items);


let item = filterd .map(function(num){

        return {value: num};

})
console.log(item);