# Data-Structures-and-Algorithms-with-JavaScript

Data Structures and Algorithms with JavaScript (By Michael McMillan) Study Notes

## Getting Started
This repo contains my study notes on Data Structures and Algorithms with JavaScript. Only concepts I am not familiar with will be stored here (for now basically everything is new to me :) )

## Page 32 - shallow copy vs deep copy

### An example of shallow copy in Javascript

Both nums and samenums refer to the same memory when nums is assigned to samenums.

```
var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
print(samenums[0]); // displays 400

```
This illustration explains it well:

![alt text](https://github.com/JialunC/Data-Structures-and-Algorithms-with-JavaScript/blob/master/docs/shallow-copy.png)

### An example of deep copy in Javascript

In this case, modification of either remains unique to samenums and nums.

```
function copy(arr1, arr2) {
 for (var i = 0; i < arr1.length; ++i) {
  arr2[i] = arr1[i];
 }
}

var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = i+1;
}
var samenums = [];

copy(nums, samenums);
nums[0] = 400;
print(samenums[0]); // displays 1

```
![alt text](https://github.com/JialunC/Data-Structures-and-Algorithms-with-JavaScript/blob/master/docs/deep-copy.png)



