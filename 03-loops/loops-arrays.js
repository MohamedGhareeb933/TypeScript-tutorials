var arrayNum = [1, 2, 3, 4, 5];
var cal = 0;
// basic loop
for (var i = 0; i < arrayNum.length; i++) {
    cal += arrayNum[i];
    console.log(cal);
}
// push into array
arrayNum.push(6);
// similar to ranged for loop
for (var _i = 0, arrayNum_1 = arrayNum; _i < arrayNum_1.length; _i++) {
    var index = arrayNum_1[_i];
    console.log(index);
}
var average = cal / arrayNum.length;
console.log("the average is : " + average);
