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

function selectionSort(array) {
  for (i = 0; i < array.dataStore.length; i ++){
    let min = array.dataStore[i]
    for (j = i + 1; j < array.dataStore.length; j ++){
      if (min > array.dataStore[j]){
        array.swap(array.dataStore, i , j);
        min = array.dataStore[i]
      }
    }
  }
  return array
}

console.log(selectionSort(newArray).dataStore)