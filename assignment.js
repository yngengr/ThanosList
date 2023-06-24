const people = [
  { name: "정훈", money: 500000 },
  { name: "우원", money: 400000 },
  { name: "성준", money: 300000 },
  { name: "수경", money: 100000 },
  { name: "선혁", money: 600000 },
];

/** 1번 문제: filter를 이용하여 500,000원 이상 돈을 가진 객체를 배열로 담기 */
let rich = people.filter((person) => person.money >= 500_000);

console.log("1. Rich People >>", rich); // [{name: '정훈', money: 500000}, {name: '선혁', money: 600000}]

/** 2번 문제: reduce를 이용하여 500,000원 이상 돈을 가진 모든 "사람"의 이름만 요소로 배열에 담기 */
let richNames = people
  .filter((person) => person.money >= 500_000)
  .map((person) => person.name);

console.log(`2. Rich Names >> ${richNames}`);

/** 3번 문제: reduce를 이용하여 최소값, 최대값 구하기 */
const numbers = [1, 2, 3, 4, 5];

let max = numbers.reduce((acc, ele) => (acc > ele ? acc : ele));
let min = numbers.reduce((acc, ele) => (acc < ele ? acc : ele));
console.log(`3. 배열 내의 최대값 : ${max}, 최소값 ${min}`);

/** 4번 문제 richNames reduce로 구현하기 */
let richNames2 = people.reduce((acc, person, idx) => {
  // console.log(`acc > ${acc}
  // , person.name > ${person.name}
  // , person.money > ${person.money}
  // , person >> ${person}`);
  // if (idx === people.length) {
  //   return
  // }

  if (person.money >= 500000) {
    return (acc += person.name + ",");
  } else {
    return acc;
  }
  // (person.money >= 500000 ? acc += person.name : acc += "");
}, "");

console.log(`4. reduce를 활용 >> ${richNames2.slice(0, -1)}`);
