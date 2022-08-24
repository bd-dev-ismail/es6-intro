const add = (frist , second) => frist + second;
const getFullName = (fristName, lastName) => fristName + ' ' + lastName;
// console.log(getFullName('Md Ismail', 'Hossen'));
const multiply = (a, b) => a * b;
// console.log(multiply(2, 2));

const addAll = (a,b,c,d,e,f) => a + b + c + d + e +  f;
//No parameter
const getPie = () => 3.26;
//One parameter
const dubbleNumber = (num) => num * 2;
//One parameter single version
const fiveTimes = num => num * 5;
//Multiline Arrow funciton!!Note: if you want to retun something you can right return  statement!!!!
const doMatch = (x, y, z) => {
    const fristSum = z +y;
    const secondSum = x + y;
    const result = fristSum * secondSum;
    return result;//Multine arrow function e tmk return statement use korte hobe!!!
}