function mergeSort(arr) {
  let [primerArr, segundoArr] = split(arr)
  if(primerArr.length > 1 || segundoArr.length > 1)
    [primerArr,segundoArr] = [mergeSort(primerArr),mergeSort(segundoArr)]
  return merge(primerArr, segundoArr)
}

function merge(arr1, arr2){
  let aux =[]
  while(arr1.length != 0 && arr2.length != 0){
    if(arr1[0] > arr2[0]) aux.push(arr2.shift())
    else aux.push(arr1.shift())
  }
  if(arr1.length == 0 ) aux.push(...arr2)
  if(arr2.length == 0 ) aux.push(...arr1)
  return aux
}

function split(wholeArray) {
  return [wholeArray.splice(0,Math.floor(wholeArray.length/2)), wholeArray];
}