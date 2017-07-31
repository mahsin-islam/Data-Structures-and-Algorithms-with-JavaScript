# Queue

## An Array-Based Queue Class Implementation
Refactored from p60 of the textbook.
```
class queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element){
    this.dataStore.push(element);
  }

  dequeue(){
    return this.dataStore.shift();
  }

  front(){
    return this.dataStore[0];
  }

  back(){
    return this.dataStore[this.dataStore.length - 1];
  }

  toString(){
    newString = '';
    this.dataStore.forEach ((element) => {
      newString += element + ' '
      })
    return newString;
  }

  ifEmpty(){
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
```

## Using queue
Useful for simulation and sorting data

### Sorting Data with Queues
This example involves a sorting technique called radix sort.
See queueSorting.js in this folder

### Priority Queues
See priority.js inside this folder
