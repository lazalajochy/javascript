var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; 

maxSubArray(nums);

function maxSubArray(nums) {
  let sum = 0, res = 0;
  let lessZero = nums.every((x) => x < 0)
  if(lessZero == true) return console.log(Math.max(...nums))
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res = Math.max(res, sum);
     if (sum < 0) sum = 0;
  }

  return res;
}