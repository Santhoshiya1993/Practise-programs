const prompt = require('prompt-sync')();
let arr=[];
for(let i=0;i<=5;i++)
{
    let input = prompt("Enter numbers to add:");
    arr.push(input);
}
let sum=0;
for(let j=0;j<arr.length;j++)
{
    sum+=+arr[j];
}
console.log(`sum of array is ${sum}`);
