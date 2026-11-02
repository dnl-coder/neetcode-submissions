class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let array = [];
        for (const ops of operations) {
            switch (ops) {
                case "C":
                    array.pop();
                    break;
                case "D":
                    array.push(Number(array[array.length - 1]) * 2);
                    break;
                case "+":
                    let lastOne = Number(array[array.length - 1]);
                    let penultimo = Number(array[array.length - 2]);
                    array.push(lastOne + penultimo);
                    break;
                default:
                    array.push(Number(ops));
            }
        }
        const totalSum = array.reduce((acc, act) => acc + act, 0);
        return totalSum;
    }
}
