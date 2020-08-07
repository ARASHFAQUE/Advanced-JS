//// Usual Way
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
for(let i = 0; i< numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

////----------Map ==> can be applied on Array------------////

////Function Outside Map
const numbers = [3, 4, 5, 6, 7, 8];
function square(element){
    return element * element;
}
const result = numbers.map(square)
console.log(result);

////Function Declaration Using Array
////----- const functionName = parameter => parameter * parameter;(It will auto return the value)-------------////
const numbers = [3, 4, 5, 6, 7, 8];
const square = element => element * element;
const square = x => x * x;

//// Function Inside Map => can have "Element, Index And Array as parameter"
const numbers = [3, 4, 5, 6, 7, 8];
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

//// Array Function Inside Map
const result = numbers.map(x => x * x);
console.log(result);

////-----Filter ==> will output an array. if there is no element matches with the condition though it will output an empty array-----////
const numbers = [3, 4, 5, 6, 7, 8];
const bigger = numbers.filter( x => x > 5);
const smaller = numbers.filter( x => x < 5);
console.log(bigger);
console.log(smaller);

////-----------Find ==> will output element.(only one)----------////
const numbers = [3, 4, 5, 6, 7, 8];
const smaller = numbers.filter( x => x < 3);
const find = numbers.find(x => x > 5);
console.log(smaller);
console.log(find);


