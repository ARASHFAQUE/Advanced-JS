////--------------------Slice------------------////
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const part = numbers.slice(2, 5); //slice (starting index, ending index)
console.log(part);
console.log(numbers);
console.log(numbers.slice(0, -1));

////--------------------Splice-------------------////
const removed = numbers.splice(2, 3, 77, 88, 99); //splice(starting index, number of elements i want to delete, elements i want to add in the main array)
console.log(removed);
console.log(numbers);

////-------------------Join-------------------////
const together = numbers.join(',');
console.log(together);