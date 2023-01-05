var searchInsert = function(nums, target) {
  let result = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < target) {
      result = i;
      if(i === nums.length-1) {
        return i+1;
      }
    } else if(nums[i] = target || nums[i] > target) {
      return result = i;
    }
  }
  return result;
};

// nums = [1,3,5,6];
// target = 5;
// nums = [1,3,5,6]
// target = 2
// nums = [1,3,5,6]
// target = 7
nums = [1,3,5,6];
target = 0;
console.log(searchInsert(nums, target));