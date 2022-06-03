// 35. Search Insert Position 

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  PSEUDO:
//  binary search, where we use the mid index as the return value
//  e.g. start = 0; end = nums.length; mid = (start + end)/2
//  while (start<=end){search for target}
//  if(found) return mid; else return mid;
//  //Could also try recursion
//  */
 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid;
    
    while(start<=end){
        mid = Math.floor((start+end)/2);
        
        if(nums[mid]===target){
            return mid;
        }
        
        if (nums[mid]>target){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        
    }
    return nums[start]>target ? start : nums.length;
};