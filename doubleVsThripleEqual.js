//(==) this operator only checks value.
//(===) this operator checks both-value and data type.


////(==) this operator only checks value.
let first = 2;
let second = "2";
if(first == second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
////(===) this operator checks both-value and data type.
if(first === second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
////(==) this operator only checks value.
first = 2;
second = true;
if(first == second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
////(==) this operator only checks value.
first = 1;
second = true;
if(first == second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
////(===) this operator checks both-value and data type.
first = 1;
second = true;
if(first === second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
////(==) this operator only checks value.
first = 1;
second = false;
if(first == second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
////(==) this operator only checks value.
first = 0;
second = false;
if(first == second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}
////(===) this operator checks both-value and data type.
if(first === second){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}