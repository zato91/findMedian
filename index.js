
function findMedian(n) {

 if(n.length ===0) return 0;
 // if the array is empty return 0

  let arr = radixSort(n)
  // we sort the array but instead the sort method O(n2)
  // we use radix sort  O(nk)
  // n length of array and k number of digits
  

  let middle = Math.floor(arr.length / 2);
  // we get the middle index of the array

  return arr.length % 2 ?  arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
  // if the array is odd we return the value in the midlle  
  // else we addition the 2 middle value and /2
}
// RadixSort
function getDigit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}
function digitIteration(num) {
  const biggestDigit = Math.max(...num)
  return Math.floor(Math.log10(biggestDigit)) + 1;
}
function radixSort(nums){
  let iteration = digitIteration(nums)
  for(let k = 0; k < iteration; k++){
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let i = 0; i < nums.length; i++){
        let digit = getDigit(nums[i],k);
        digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
                
// findMedian([1,6,3,5,8,9,4,10,2])
findMedian([1,6,3,5,8,9,4,10,2,7]) 
