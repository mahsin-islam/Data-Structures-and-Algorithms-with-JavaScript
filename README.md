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

## Page 43 Two-Dimensional and Multidimensional Arrays

### Two-Dimensional Arrays


```
var nums = Array.matrix(5,5,0); // (numrows, numcols, initial)
print(nums[1][1]); // displays 0
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
print(names[1][2]); // display "Joe"

```
Create a two-dimensional array and initialize it to a set of values in one line:
```

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
print(grades[2][2]); // displays 89

```

### Jagged Arrays

A jagged array is an array where the rows in the array may have a different number of elements.

## Linked List, Stack and Queue

This section will be documented in three separated folders.

* [Linked List](https://github.com/JialunC/Data-Structures-and-Algorithms-with-JavaScript/tree/master/linked-list) - Linked List
* [Stack](https://github.com/JialunC/Data-Structures-and-Algorithms-with-JavaScript/tree/master/stack) - Stack
* [Queue](https://github.com/JialunC/Data-Structures-and-Algorithms-with-JavaScript/tree/master/queue) - Queue

## Object

This was covered in Lighthouse, but I will still include some examples here to familiarize myself with **this**.

Example:

```

function Dictionary() {
 this.add = add;
 this.datastore = new Array();
 this.find = find;
 this.remove = remove;
 this.showAll = showAll;
}

function add(key, value) {
 this.datastore[key] = value;
}

function find(key) {
 return this.datastore[key];
}

function remove(key) {
 delete this.datastore[key];
}

function showAll() {
  for (var key in this.datastore) {
    console.log(key + " -> " + this.datastore[key]);
  }
}

```

A programe that uses the Dictionary class:

```

var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();

```

Here is the output:

```
David's extension: 345
Mike -> 123
Cynthia -> 456

```
And pbook will look like this:

```
Dictionary {
  add: [Function: add],
  datastore: [ Mike: '123', David: '345', Cynthia: '456' ],
  find: [Function: find],
  remove: [Function: remove],
  showAll: [Function: showAll] }
```

## Hash

### Concepts

* key
* hash function
* collision

### Handling Collitions

* Separate Chaining - Each array element of a hash table stores another data structure, such as another array.
* Linear Probing - Should be chosen over separate chaining when your array for storing data can be fairly large.


## Binary Trees and Binary Search Tress

### Definitions

* leaf
* binary trees - restrict the number of child nodes to no more than two.
* key - the value associated with a node is sometimes referred to as the key value.
* path - the series of edges you follow to get from one node to another node.
* tree traversal - visiting all the nodes in a tree in some particular order is known as a tree traversal.






























