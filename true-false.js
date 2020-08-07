//False ==> 0, Empty String(""), undefine(var name;), null(var name = null;), Not a Number(NaN(var name = NaN)), false .
//True ==> Number Without Zero(0), Zero Inside Quotation('0'),Space Inside Quotation(' '), Empty Array [], Empty Object{}, 
// let name = NaN;
let name = 0;
console.log(name);
if(name){
    console.log("Condition is true.");
}
else{
    console.log("Condition is false.");
}