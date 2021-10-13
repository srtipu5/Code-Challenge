const arr = [1,3,4,15,19]
arr.sort((a, b) => {  
    return a - b
  });

  let size = arr.length-1;
  let count = 0;

  for(let i = size; i>1; i--){
       let searchValue = arr[i]- arr[i-1];
       let returnIndex = binarySearch(arr,0,i-2,searchValue);
       if(returnIndex != -1){
           count++;
       }
  }

  console.log("Output: " + count);

  function binarySearch(arr, l, r, searchValue){
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
 
        // If the searchValue is present at the middle

        if (arr[mid] == searchValue)
            return mid;
 
        // If searchValue is smaller than mid

        if (arr[mid] > searchValue)
            return binarySearch(arr, l, mid - 1, searchValue);
 
        // if the searchValue is larger than mid

        return binarySearch(arr, mid + 1, r, searchValue);
    }
 
    // We reach here when searchValue is not there

    return -1;
}
