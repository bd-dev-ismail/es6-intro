// function add(frist, second){
//     if(second === undefined){
//         second = 0;
//     }
//     const total = frist + second;
    
//     return total;
// }

//Set defult Value
function add(frist = 0, second = 0){
    const total = frist + second;
    return total;
}
const result = add(10);
console.log(result);

function fullName(fristName, LastName = 'nHosse'){
    const name = fristName + ' ' + LastName;
    return name;
}
const name = fullName('Ismail');
console.log(name);