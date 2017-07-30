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

//test ground
let tomQueue = new queue();
tomQueue.enqueue('Learning to fly');
tomQueue.enqueue('On the Turning away');
tomQueue.enqueue('Lick It Up');
console.log(tomQueue.dataStore);
tomQueue.dequeue();
console.log(tomQueue.dataStore);
