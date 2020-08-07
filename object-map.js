////Usual Way

// const students = [
//     { id: 21, name: 'Omar Sunny'},
//     { id: 31, name: 'Manna'},
//     { id: 41, name: 'Shabana'},
//     { id: 71, name: 'Dipjol'}
// ];
// let name = [];
// for(let i = 0; i< students.length; i++){
//     let element = students[i];
//     let property = element.name;
//     name.push(property); 
// }
// console.log(name);

const students = [
    { id: 21, name: 'Omar Sunny'},
    { id: 31, name: 'Manna'},
    { id: 41, name: 'Shabana'},
    { id: 71, name: 'Dipjol'}
];
const names = students.map( s => s.name);
const ids = students.map( i => i.id);
const biggerId = students.filter( j => j.id > 40);
const findId = students.find( k => k.id > 40);
console.log(names);
console.log(ids);
console.log(biggerId);
console.log(findId);
