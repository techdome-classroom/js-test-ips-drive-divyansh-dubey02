function smallest_missing_positive_integer(nums) {
  let n = nums.length;

  let j = 0;
  for (let i = 0; i < n; i++) {
      if (nums[i] <= 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          j++;
      }
  }

 
  nums = nums.slice(j);

 
  for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      if (index < nums.length && nums[index] > 0) {
          nums[index] = -nums[index];
      }
  }


  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          return i + 1; 
      }
  }

  return nums.length + 1; 
  
}
console.log(smallest_missing_positive_integer([3,4,-1,1]));
console.log(smallest_missing_positive_integer([-1, -3, 4, 2]));
module.exports = smallest_missing_positive_integer;
