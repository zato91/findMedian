function findMedian(n) {

 if(n.length ===0) return 0;
 // if the array is empty return 0

  let arr = radixSort(n)
  // we sort the array but instead the sort method O(n2)
  // arr.sort((a,b)=> a-b)
  // we use radix sort  O(nk)
  // n length of array and k number of digits
  

  let middle = Math.floor(arr.length / 2);
  // we get the middle index of the array

  return arr.length % 2 ?  arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
  // if the length of array is odd we return the value in the middle  
  // else we add the 2 middle values and divide by 2
}
// RadixSort with 2 helpers method

// getDigit, return the digit in num at the given place value.
function getDigit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

// digitIteration, know how many times we are going to iterate
function digitIteration(num) {
  const biggestDigit = Math.max(...num)
  //  find the largest digit in the array
  return Math.floor(Math.log10(biggestDigit)) + 1;
  // return the number of digits of the biggest number
}
function radixSort(nums){
  let iteration = digitIteration(nums)
  // store the number of iterations
  for(let k = 0; k < iteration; k++){
    // loop until the biggest digit is done
    let digitBuckets = Array.from({length: 10}, () => []);
    // create an array of 10 empty array
    for(let i = 0; i < nums.length; i++){
      // loop through the array we are going to sort
        let digit = getDigit(nums[i],k);
        //digit give us the last digit of our number from the right
        digitBuckets[digit].push(nums[i]);
        // we use digit for the index and push the number in the new array
    }
    nums = [].concat(...digitBuckets);
    // we concat on an empty array using the spread operator
  }
  return nums;
}
                
findMedian([1,6,3,5,8,9,4,10,2])
// findMedian([1,6,3,5,8,9,4,10,2,7]) 
