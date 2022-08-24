                            //Parties Problem-2
/*-Problem:1---Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.
*/
const multiply3 = (one, two, three) => one * two * three;
// console.log(multiply3(2,3,4));
/*Problem-2:
Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.
*/
const multiline = `I am a web developer.
I love to code.
I love to eat  biryani.`;
// console.log(multiline);
/**Problem-3
 * 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
 */
const total = (frist, second = 10) => frist + second;
// console.log(total(10));//OUtput is: 20;
                        //Parties Problem-2
/**Prbolem:1
 * Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
 */
const friends = ['sabbir', 'tushar', 'akib', 'foysal', 'ratul'];
const bestFriends = friends =>{
    const newArry = [];
    for(let  i = 0; i <friends.length; i++){
        if(friends[i].length % 2 === 0){
            newArry.push(friends[i]);
        }
        
    }
    return newArry;
};
// console.log(bestFriends(friends));
                //Parties Problem -3
/**
 * Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
 */
const numbers = [2, 4, 6,8, 12];
const sqavgCalc = (numbers) =>{
    let additions = 0;
    for(let i = 0; i < numbers.length; i++){
        // additions += numbers[i];
        additions = additions + numbers[i];
    }
    return (additions / numbers.length).toFixed(2);
}
// console.log(sqavgCalc(numbers));
                    //Problem-4
/**
 * Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
 */
const num1 = [22, 44, 66, 88, 500];
const num2 = [11, 33, 55, 77];
const maxArr = (arr1, arr2) =>{
    const newArr = [...arr1, ...arr2];
    return Math.max(...newArr);
}
// console.log(maxArr(num1, num2));//500