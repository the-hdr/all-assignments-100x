/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo
{
  constructor()
  {
    this.todoList = [];
  }

  add (task)
  {
    this.todoList.push (task);
  }

  remove (indexOfTask)
  {
    const todoListLength = this.todoList.length;

    if (indexOfTask >= todoListLength)
    {
      return null;
    }

    for (let i = indexOfTask; i <= todoListLength - 2; ++i)
    {
      this.todoList[i] = this.todoList[i + 1];
    }
    this.todoList.pop();
    return null;
  }

  update (updateIndex, updatedTodo)
  {
    const todoListSize = this.todoList.length;
    if (updateIndex >= todoListSize)
    {
      return null;
    }
    return this.todoList[updateIndex] = updatedTodo;
  }

  getAll ()
  {
    return this.todoList;
  }

  get (demandedIndex)
  {
    if (demandedIndex >= this.todoList.length)
    {
      return null;
    }

    return this.todoList[demandedIndex];
  }

  clear ()
  {
    this.todoList = [];
  }
}

let todo = new Todo();

module.exports = Todo;