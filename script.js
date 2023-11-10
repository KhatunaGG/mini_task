// multiply all the elements in the array by 2 and then finlter out the numbers that are divisible by 3
let arr = [22, 3, 7, 9, 12, 4, 19, 18];
let newArr = arr.map(el => el * 2).filter(item => item % 3 === 0);
// console.log(newArr);



// return the sum of all the positive ones;
let arr2 = [-2, 14, 23, 7, 3, -20, 11];
let arr3 = arr2.filter(item => item > 0).reduce((acc, el) => acc + el);
// console.log(arr3);



// abbreviate the name and return the name initials
let str = 'Tom Smith';
let newStr = str.split(' ').map(el => el.slice(0, 1)).join('.');
// console.log(newStr);




// given an array of string, remove the last characters of each string;
let newNames = [];
let names = ['Ann', 'Tom', 'Jeremy', 'Kate'];
for(let i = 0; i < names.length; i++) {
    newNames.push(names[i].slice(0, -1));
}
// console.log(newNames);

let newArr2 = names.map(el => el.slice(0, -1));
// console.log(newArr2);