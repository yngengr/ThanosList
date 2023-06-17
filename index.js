// TODO : 타노스 형태의 삭제가 일어났을 때는 전체 배열을 읽고 삭제한 이후에
// TODO : 전체 배열을 받아서 삭제를 수행하고, 새로운 배열을 리턴해야함.
// TODO : 해당 TODOLIST는 콘솔로 임의로 변경하면 안되기 때문에 Object.seal or Object.freeze로 수정을 못하게 하고 복제해서 새로 리턴

const people = [
  { name: "정훈", money: 500000 },
  { name: "우원", money: 400000 },
  { name: "성준", money: 300000 },
  { name: "수경", money: 100000 },
  { name: "선혁", money: 600000 },
];

/** 1번 문제: filter를 이용하여 500,000원 이상 돈을 가진 객체를 배열로 담기 */
let rich = people.filter((person) => person.money >= 500_000);

console.log("Rich People >>", rich); // [{name: '정훈', money: 500000}, {name: '선혁', money: 600000}]

/** 2번 문제: reduce를 이용하여 500,000원 이상 돈을 가진 모든 "사람"의 이름만 요소로 배열에 담기 */
let richNames = people
  .filter((person) => person.money >= 500_000)
  .map((person) => person.name);

console.log(`Rich Names >> ${richNames}`);

/** 3번 문제: reduce를 이용하여 최소값, 최대값 구하기 */
const numbers = [1, 2, 3, 4, 5];

let max = numbers.reduce((acc, ele) => (acc > ele ? acc : ele));
let min = numbers.reduce((acc, ele) => (acc < ele ? acc : ele));
console.debug(`배열 내의 최대값 : ${max}, 최소값 ${min}`);

/** To-do list 관련 함수 */
const addButton = document.getElementById("add-button");
const a_todo = {
  id: 1,
  todo: "첫 객체 투두",
  isComplete: false,
};

const b_todo = {
  id: 2,
  todo: "둘 객체 투두",
  isComplete: false,
};

const todolist = [a_todo, b_todo];

const addTodoElement = (content) => {
  /**
   * set content you set into li.innerHTML (list Text) and render it
   * @param {string} content 추가하고 싶은 투두 내용(render)
   * @summary Add a todo into list
   */

  const newTodo = document.createElement("li");
  const mainTodo = document.getElementById("main-todo-ul");

  todolist.push({ id: todolist.length, todo: content, isComplete: false });

  // newTodo.innerHTML = content;
  renderTodofromArray(todolist);
};

const renderTodofromArray = (array) => {
  /**
   * 배열을 입력 받아 배열 내의 입력값을 li HTML 요소로 추가
   * @param {Array} content 배열이 들어옴
   */

  // TODO : 배열 내의 객체일 때, 그냥 배열에 문자열이 있을 때 검증해야함
  // let newTodo = document.createElement("li");
  let mainTodo = document.getElementById("main-todo-ul");

  array.forEach((ele)=>{
    let newTodo = document.createElement("li");
    newTodo.innerHTML = ele.todo;
    mainTodo.appendChild(newTodo);
  })
};

const refrechTodoList = () => {
  /**
   * 두 개의 배열을 받아서 모든 id의 값을 1부터로 세팅해주고 새로 배열을 리턴함
   * 임의로 삭제한 리스트를 새로운 id로 갈아끼워서 사용하기 위함
   * @param {Array, Array} content 바뀌기 전, 바뀐 이후 배열
   */
  return;
};

addButton.addEventListener("click", () => {
  const text = document.getElementById("text");
  // 왜 input tag의 내부 값은 innerHTML이 아니라 value인 것인가..
  addTodoElement(text.value);
  text.value = ""; // 입력 이후에 input 태그를 비움
  text.focus(); // input 태그를 비우고 커서를 입력 칸으로 옮긴다.
});

// ! 최초 실행부
console.log(`todolist ${todolist}`)
renderTodofromArray(todolist);
