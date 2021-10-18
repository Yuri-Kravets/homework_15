
function checkArray(arr) {
  let arrPlus =[];
  if (arr.length <= 0) {
    alert('array empty');
  }  else {
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] > 0) {
          arrPlus.push(arr[i]);
      }
    }  
  }
  
  // проверка на пустоту массива
  if (arrPlus.length > 0) {
    console.log(arrPlus);
  } else if (arrPlus.lenth <= 0) {
    console.log('null');
  } 
    
}


const arr = [1, 2, 3, -1, -2, -3];
checkArray(arr);
