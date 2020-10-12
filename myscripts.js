let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  console.log("hello there");
  for (let i = 0; i < arrayOfTodos.length; i++) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(arrayOfTodos[i].title);
  node.appendChild(textnode);
  document.getElementById("todo-list").appendChild(node);
  if (arrayOfTodos[i].completed == false) {
    node.classList.add("false");
  }
  if (arrayOfTodos[i].completed == true) {
    node.classList.add("true");
  }
  }
}



let x = 20;

  // // 20 ONLY FILTERING
  const populate20Todos = () => {
    console.log("hello");
      for (let i = 0; i < x; i++) {
      let node = document.createElement("li");
      let textnode = document.createTextNode(arrayOfTodos[i].title);
      node.appendChild(textnode);
      document.getElementById("todo-list").appendChild(node);
      if (arrayOfTodos[i].completed == false) {
          node.classList.add("false");
      }
      if (arrayOfTodos[i].completed == true) {
        node.classList.add("true");
    }
    }
  }


  // Clear All Todos Button

const clearTodos = () => {
  document.getElementById("todo-list").innerHTML = "";
}

  // User ID Filtering

const showUserIDTodos = () => {

  // document.getElementById("todo-list").innerHTML = "";
  let IDnum = document.getElementById("ID-number").value;
  console.log(IDnum);
  userresult = arrayOfTodos.filter(array => array.userId == IDnum);
  console.log(userresult);

  for (let i = 0; i < userresult.length; i++) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(userresult[i].title);
    node.appendChild(textnode);
    document.getElementById("todo-list").appendChild(node);
    if (userresult[i].completed == false) {
      node.classList.add("false");
    }
    if (userresult[i].completed == true) {
      node.classList.add("true");
    }
  }
}


// Show Completed User ID Filtered Todos
    
const showCompletedTodos = () => {
  document.getElementById("todo-list").innerHTML = "";
  let IDnum = document.getElementById("ID-number").value;
  console.log(IDnum);
  userresult = arrayOfTodos.filter(array => array.userId == IDnum);
  console.log(userresult);
  completedTodos = userresult.filter(array => array.completed == true);

  for (let i = 0; i < completedTodos.length; i++) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(completedTodos[i].title)
    node.appendChild(textnode);
    document.getElementById('todo-list').appendChild(node);
    if (completedTodos[i].completed == true) {
      node.classList.add("true")
    }
    if (completedTodos[i].completed == false) {
      node.classList.add("not-completed")
    }
  }

}

// Show Not-Completed User ID Filtered Todos

const showNotCompletedTodos = () => {
  document.getElementById("todo-list").innerHTML = "";
  let IDnum = document.getElementById("ID-number").value;
  console.log(IDnum);
  userresult = arrayOfTodos.filter(array => array.userId == IDnum);
  console.log(userresult);
  NotcompletedTodos = userresult.filter(array => array.completed == false);

  for (let i = 0; i < NotcompletedTodos.length; i++) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(NotcompletedTodos[i].title)
    node.appendChild(textnode);
    document.getElementById('todo-list').appendChild(node);
    if (NotcompletedTodos[i].completed == false) {
      node.classList.add("false")
    }
    if (NotcompletedTodos[i].completed == true) {
      node.classList.add("completed")
    }
  }
}