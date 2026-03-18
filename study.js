// 你的“两数之和”函数
const twoSum = (nums, target) => {
    const prevValues = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const neededValue = target - currentNum;

        if (prevValues.has(neededValue)) {
            return [prevValues.get(neededValue), i];
        }
        prevValues.set(currentNum, i);
    }
    return [];
};

// 测试数据
const myNums = [2, 7, 11, 15];
const myTarget = 9;

// 运行函数并将结果存入变量
const result = twoSum(myNums, myTarget);

// 在终端打印结果
console.log("----------------------------");
console.log("找到啦！下标分别是：", result);
console.log("验证一下：", myNums[result[0]], "+", myNums[result[1]], "=", myTarget);
console.log("----------------------------");