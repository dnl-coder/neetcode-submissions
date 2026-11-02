class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let currenStreak = 0;
        let maximumStreak = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) currenStreak = 0;
            if (nums[i] === 1) {
                currenStreak++;
                if (maximumStreak >= currenStreak) {
                    continue;
                } else {
                    maximumStreak = currenStreak;
                }
            }
        }
        return maximumStreak;
    }
}
