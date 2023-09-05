// 1. how to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';
// 2:condition
// 6 basic condition: >,<, ===, <=, >=,
// multipol condition : &&, ||

if(fatherName === 'arnold' || season ==='rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}
// 3: array deklar
// index
// length, push,pop
const number =[20, 56, 36, 25];
number[0]=99;

// 4: for loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5: function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
// function re call 
const output = multiply();
const output = multiply(32, 12);

// 6: Object
// 3 way to access property by name
const student = {
    name: 'Miraj',
    age: 29,
    match: ['afganisthan', 'pakistan'] 
}

const myVariable = 'age';


 console.log(student.age); //direct by property
 console.log(student['age']); //access via property name string
 console.log(student[myVariable]); //access via proprety name in a variable
