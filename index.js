//Question 1
//Mutating Array Methods means changing the array itself instead of returning a new array with the new changes. These methods includes:
//  -array.push()
//  -array.shift()
//  -array.pop()
//  -array.splice()
//  -array.unshift()
//Non-Mutating Array Methods means returning a whole new array which has all the changes. These methods includes:
//  -array.concat()
//  -array.join()
//  -array.slice()
//  -array.includes()
//  -Array.indexOf()


//Question 2
const proLang = ['C#', 'Javascript', 'Ruby', 'PHP', 'Python'];
// 1
proLang.push('Kotlin');
// 2
proLang.splice(3,0,'Java');
// 3
const first = proLang.shift();
// 4
proLang.unshift('Scala', 'Swift');
// 5
proLang.splice(5, 1,'Go', 'Rust');

console.log(proLang);


//Question 3
let fruit = ['apple', 'mango', 'banana'];

function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}

console.log(changeFruit(fruit));


//Question 4
const numbers = [3, 8, 15, 7, 22];
function max(numbers) {
    let i;
    let max = numbers[0];

    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] > max)
        max = numbers[i];
    }

    return max;
}
console.log(max(numbers));


//Question 5
let multiByIndex = [3, 4, 5, 8];

function valTimesIndex(multiByIndex) {    
    let arr = 0;
    for (let i = 0; i < multiByIndex.length; i++) {     
        arr = multiByIndex.map((x,i) => x*i);
    }
    return arr;
}

console.log(valTimesIndex(multiByIndex));
