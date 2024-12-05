const res = await fetch("dayOne.txt");
let data = await res.text();

data = data.split("\n");
let arr1 = [];
let arr2 = [];

const splitter = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split("   ");
    arr1.push(array[i][0]);
    arr2.push(array[i][1]);
  }
};

data.pop();
splitter(data);

arr1.sort();
arr2.sort();
console.log(arr1);

let totalDistance = 0;

for (let i = 0; i < arr1.length; i++) {
  totalDistance += Math.abs(arr1[i] - arr2[i]);
}

console.log(totalDistance);

//part 2
let similarity = 0;
for (let i = 0; i < arr1.length; i++) {
  counter = 0;
}
