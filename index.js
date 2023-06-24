// DOM Selector
let inputEle = document.querySelector(".input");
let form = document.querySelector(".form");
// let submitEle = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let containerDiv = document.querySelector(".container");
let deleteAll = document.querySelector(".delete-all");
let thanosSnap = document.querySelector(".snap-effect");

let arrayOfTasks = [];

thanosSnap.onclick = function () {
  for (let ele of arrayOfTasks) {
    console.log("현재 >> ", ele.todo, ele.isComplete);
  }
  alert("짝수번째가 사라집니다.");
  arrayOfTasks = arrayOfTasks.filter((ele, idx) => idx % 2 == 0);
  renderFromArray(arrayOfTasks);
};


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

// Add Task button

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // onClick for IE compatible
  // if you want to ignore, use addEventListener()
  if (inputEle.value !== "") {
    // 입력 값이 빈 값이 아닐 때

    addTodoElement(inputEle.value);
    inputEle.value = "";
    // 배열에 값을 넣는 함수를 호출하고, 입력값을 비도록 초기화
  }
});

tasksDiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    // 해당 HTML요소의 class가 del을 포함할 때
    e.target.parentElement.remove();
    // parentElement -> 부모 element를 반환.
    // 그 내의 remove 메서드 수행 해당 타겟의 부모의 요소 자체를 삭제 (여기서는 div class="task")

    for (let ele of arrayOfTasks) {
      console.log("삭제하기 전 >> ", ele.todo);
    }

    deleteTodoElement(e.target.parentElement.getAttribute("data-id"));
  }

  if (e.target.classList.contains("task")) {
    // 해당 HTML요소의 class가 tasks를 포함할 때
    // 완료로 처리
    e.target.classList.toggle("done"); //classList.toggle -> 해당 클래스명을 done으로 바꿈
    changeToComplete(e.target.getAttribute("data-id"));
  }
});

function changeToComplete(dataID) {
  arrayOfTasks.forEach((todo) => {
    if (todo.id == Number(dataID)) {
      // 해당 todo의 id가 dom에서 가져온 data-id의 숫자형태와 같은 경우에는 아래를 수행
      todo.isComplete == false
        ? (todo.isComplete = true)
        : (todo.isComplete = false);
    }
  });
}

function addTodoElement(todoText) {
  /**
   * set content you set into li.innerHTML (list Text) and render it
   * @param {string} content 추가하고 싶은 투두 내용(render)
   * @summary Add a todo into list
   * todoform = {
   *  id: number,
   *  todo: string,
   *  isComplete: bool,
   * }
   */

  const todoObject = {
    id: Date.now(), // 현재 시간(THE UNIX TIME)
    todo: todoText,
    isComplete: false,
  };
  arrayOfTasks.push(todoObject); // 할 일 배열 끝에 넣는다.
  renderFromArray(arrayOfTasks); // 배열로부터 읽어와서 그린다.
}

function deleteTodoElement(dataID) {
  // 여기서 task는 data-id안에 있는 숫자로, 넘어올 때는 문자열로 넘어온다.

  // 객체 안의 id와 class안의 id가 같지 않은 모든 요소를 리턴
  arrayOfTasks = arrayOfTasks.filter(
    (todoFromArray) => todoFromArray.id !== Number(dataID)
  );
  console.log("array 지운 후는 >>", arrayOfTasks);
}

function renderFromArray(array) {
  /**
   * 배열을 입력 받아 배열 내의 입력값을 li HTML 요소로 추가
   * @param {Array} content 배열이 들어옴
   */
  tasksDiv.innerHTML = ""; // 전체 할 일 목록이 지워진다.

  array.forEach((todoFromArray) => {
    let div = document.createElement("div");
    div.className = "task";

    if (todoFromArray.isComplete) {
      // 가져온 객체의 isComplete가 true인 경우에는 클래스명을 변경
      div.className = "task done";
    }

    // 생성한 div에 'data-id' 값을 세팅
    div.setAttribute("data-id", todoFromArray.id);
    div.appendChild(document.createTextNode(todoFromArray.todo));

    // delete 버튼 생성
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete")); // Delete라는 글자값 세팅
    div.appendChild(span);
    tasksDiv.appendChild(div);
  });
}
