/**
 * 신규아이디추천 [Lv1]
 */

 function solution(new_id) {
  const regex = /[`~!@#$%^&*()|+\=?;:,'"<>\{\}\[\]\\\/ ]/gim; //지정특수문자 외 제거
  const dotRegex = /\.{2,}/g; //'.'2번 이상 확인
  const id = new_id.toLowerCase().replaceAll(regex, '').replaceAll(dotRegex, '.');

  const step1 = trimDot(id);
  const step2 = isEmpty(step1);
  const step3 = validLength(step2);
  return step3;
}

//replace(/^\.|\.$/, '')
function trimDot(id) {
  if(id.charAt(0) === '.') id = id.slice(1, id.length);
  if(id.charAt(id.length - 1) === '.') id = id.slice(0, id.length - 1);
  return id;
}

//replace(/^$/, 'a')
function isEmpty(id) {
  return id.length === 0 ? id = 'a' : id;
}

//replace(/\.$/, '')
//string.padEnd(3, string[string.length-1])
function validLength(id) {
  if(id.length > 15) id = id.slice(0, 15); //substring!!!!!!!!.....!!!!!!!!!
  while(id.length < 3) {
    id += id[id.length - 1].repeat(1); //charAt() => padEnd(3, id[id.length-1])
  }
  return id[id.length - 1] === '.'? id = id.slice(0, id.length - 1) : id;
}