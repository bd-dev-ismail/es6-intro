const fish = {
    name: 'King Halisa',
    address: 'Chandapur',
    color: 'sliver',
    phone: '01833201582',
    price: '4000'

}
//Destructuring !!!!!!!!!!!!!!
// const {phone, price} = fish;//to get the value this type!!!
// console.log (fish.phone) olderst !
// console.log(phone, price);
const {age} = {name: 'alkagi', age:44, profession: 'ISS Chif'};
// console.log(age);

//Array Destructuring
const [frist, second] = [22,44, 55, 77];//Name doesn't Matter!Order maintaining in array
console.log(frist, second);

const heros = ['Salman', 'Sharuk', 'Ononto', 'Sakib'];
const [king, badsha, nuton, bangla]  = heros;
console.log(nuton);

function getNames(){
    return ['jamal', 'sekandar'];
}
const [uncle, baba] = getNames();
console.log(baba, uncle);