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
      }
  }