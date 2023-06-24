// TODO : 타노스 형태의 삭제가 일어났을 때는 전체 배열을 읽고 삭제한 이후에
// TODO : 전체 배열을 받아서 삭제를 수행하고, 새로운 배열을 리턴해야함.
// TODO : 해당 TODOLIST는 콘솔로 임의로 변경하면 안되기 때문에 Object.seal or Object.freeze로 수정을 못하게 하고 복제해서 새로 리턴

/** To-do list 관련 함수 */
const addButton = document.getElementById("add-button");
const ulIDName = 'main-todo-ul' // ul 클래스명
const a_todo = {
  id: 1,
  todo: "첫 투두",
  isComplete: false,
};

const b_todo = {
  id: 2,
  todo: "둘 투두",
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

  // ! 새로 생기는 아이템의 id는 인덱스의 + 1
  todolist.push({ id: todolist.length+1, todo: content, isComplete: false });

  newTodo.innerHTML = content;
  renderTodofromArray(todolist);
};

const renderTodofromArray = (array) => {
  /**
   * 배열을 입력 받아 배열 내의 입력값을 li HTML 요소로 추가
   * @param {Array} content 배열이 들어옴
   */
  

  // ! ul 태그 아래의 모든 자식들을 삭제 (기존 DOM 지우기)
  let ul = document.getElementById(ulIDName);
  while (ul.firstChild) ul.removeChild(ul.firstChild);


  // ! 들어온 배열로 DOM에 새로 쓰기
  const mainTodo = document.getElementById(ulIDName);
  
  for (let ele of array) {
    // 객체가 있을 때
    let newTodo = document.createElement("li");
    newTodo.innerHTML = ele.id + '. ' + ele.todo;
    mainTodo.appendChild(newTodo);
  }
};

const refrechTodoList = () => {
  /**
   * 두 개의 배열을 받아서 모든 id의 값을 1부터로 세팅해주고 새로 배열을 리턴함
   * 임의로 삭제한 리스트를 새로운 id로 갈아끼워서 사용하기 위함
   * @param {Array, Array} content 바뀌기 전, 바뀐 이후 배열
   */
  return;
};

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const text = document.getElementById("text");
  // 왜 input tag의 내부 값은 innerHTML이 아니라 value인 것인가..
  addTodoElement(text.value);
  text.value = ""; // 입력 이후에 input 태그를 비움
  text.focus(); // input 태그를 비우고 커서를 입력 칸으로 옮긴다.
});

// ! 최초 실행부
renderTodofromArray(todolist);