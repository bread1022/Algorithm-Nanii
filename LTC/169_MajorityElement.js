var majorityElement = function(nums) {
  let key = [];
  let value = [];

  nums.forEach((e) => {
    let index = key.indexOf(e);
    if(index !== -1) {
      value[index] += 1;
    } else {
      key.push(e);
      value.push(1);
    }
  });
  return key.at(value.indexOf(Math.max(...value)));
};

const nums = [3,2,3]; // 3
// const nums = [2,2,1,1,1,2,2]; // 2
console.log(majorityElement(nums));

/**leetCode
var majorityElement = function(nums) {
    const counts = {};
    for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > nums.length / 2) return num;
    }
};

var majorityElement = function(nums) {
    const map = new Map();
    let m = nums[0];
    for (let n of nums) {
        const count = map.has(n) ? map.get(n) + 1 : 1;
        map.set(n, count); //count 변경하는 방법이 있네
        m = count > map.get(m) ? n : m;
    }
    return m;
};
 */