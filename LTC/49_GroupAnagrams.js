/**
 * 49. Group Anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {
  const group = new Map();

  for(const str of strs) {
    let strKey = [...str].sort().join(''); //abt , ant, abt
    if(!group.has(strKey)) group.set(strKey, []); //key로 []빈 그룹을 생성 { 'aet' => [], 'ant' => [], 'abt' => [] }
    //map객체의 value여러개 담는 방법
    group.get(strKey).push(str); // 'aet' => [ 'eat', 'tea', 'ate' ],'ant' => [ 'tan', 'nat' ],'abt' => [ 'bat' ]
  }
  return [...group.values()];
};

// var groupAnagrams = function(strs) {
//   const group = {}; {key, value} object[key] = value
//   for(const str of strs) {
//     let key = str.split('').sort().join('');
//     if(group[key]) group[key].push(str);   //key가 이미 존재하면 그 그룹에 넣기 위해 push(string);
//     else group[key] = [str]; //key가 없으면 [string]넣고,   //클린코드 else ......!!!!!!!!!!!!!!!!!!!!!!!!!!(감사)
//   }
// if(!group[key]) group[key] = [str];
// group[key].push(str);
//   return Object.values(group);
// };

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));