function bubbleSort(arr){
  
  for(j=1; j<arr.length; j++){
    for(i=1; i<arr.length ; i++){
      contador()
      if(arr[i-1]>arr[i]){
        [arr[i-1], arr[i]] = swap(arr[i-1],arr[i])
      }
    }
  }
  return arr
}

function contador(){
  return 1
}

function swap(primerNum, segundoNum) {
  return [segundoNum, primerNum]
}
