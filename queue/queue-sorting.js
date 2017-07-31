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

let num = [45, 72, 93, 51, 21, 16, 70, 41, 27, 31];
let set = [];

for (let i = 0; i < 10; i ++) {
  set[i] = new queue();
}

function sort(num, queue, digit){
  num.forEach( (element) => {
    if (digit === 1) {
      queue[(element % 10)].enqueue(element)
    } else {
      queue[Math.floor(element / digit)].enqueue(element)
    }
  })
}

function collect(queue){
  let i = 0;
  queue.forEach( (element) => {
    while (!element.ifEmpty()) {
      num[i++] = element.dequeue()
    }
  })
}


//test ground
console.log('original array: ' + num);
sort(num, set, 1);
console.log(set);
console.log(collect(set));
console.log('first sort: ' + num);
sort(num, set, 10);
collect(set);
console.log('final sort: ' + num)


