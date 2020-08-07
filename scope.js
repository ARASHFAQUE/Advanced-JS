let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;
    // console.log(result);
    // console.log(bonus);
    if( result > 9){
        // const mood = "Happy"; (Sorry Boss)
        // let mood = "Happy";   (Sorry Boss)
        var mood = "Happy"; ////If we use "var" it will output outside the box.But if we use "let" or "const" it will not////
        console.log(mood);
    }
    console.log(mood);
    // var day = "Friday";
    // console.log(day);
    return result;
}
const output = sum(3, 7);
// console.log(bonus);
// console.log(output);