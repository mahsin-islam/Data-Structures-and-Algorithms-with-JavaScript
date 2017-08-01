class Array {
  constructor(numberElement){
    this.numberElement = numberElement;
    this.dataStore = [];
  }

  generateRandom(){
    for (let i = 0; i < this.numberElement; i++){
      this.dataStore.push(Math.floor(Math.random() * 100));
    }
  }

  swap(list, indexOne, indexTwo){
    let temp = list[indexTwo];
    list[indexTwo] = list[indexOne];
    list[indexOne] = temp;
  }
}

let newArray = new Array(10);
newArray.generateRandom();
// console.log(newArray.dataStore);

function bubbleSort(array){
  for (i = 1; i < array.dataStore.length; i ++){
    while (array.dataStore[i] < array.dataStore[i-1]){
      array.swap(array.dataStore, i, --i)
    }
  }
  return array
}

console.log(bubbleSort(newArray).dataStore)