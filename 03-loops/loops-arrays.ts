
let arrayNum : number[] = [1, 2, 3, 4, 5];
let cal : number = 0;

// basic loop
for(let i =0; i < arrayNum.length; i++) {
    cal += arrayNum[i];
    console.log(cal);
}

// push into array
arrayNum.push(6);

// similar to ranged for loop
for(let index of arrayNum) {
    console.log(index);
}

let average : number = cal / arrayNum.length;
console.log(`the average is = ${average}`);