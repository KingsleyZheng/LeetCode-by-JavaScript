// 打家劫舍
// 中等

// 动态规划
function rob(nums: number[]): number {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let length = nums.length;
  if (length === 1) {
    return nums[0];
  }
  const dp = new Array<number>(length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[length - 1];
}
