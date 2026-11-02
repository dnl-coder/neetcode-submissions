class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const matchingOpen = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        for (const char of s) {
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
                continue;
            }
            if (stack.length === 0) {
                return false;
            }
            if (stack[stack.length - 1] !== matchingOpen[char]) {
                return false;
            }
            stack.pop();
        }
        return stack.length === 0;
    }
}
