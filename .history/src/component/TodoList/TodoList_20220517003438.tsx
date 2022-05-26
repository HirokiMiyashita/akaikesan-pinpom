import React, { useState } from "react";

export const TodoList = () => {
  const [todoText, setTodoText] = useState(""); // 入力されたTodoの文字列
  const [todoList, setNewTodoList]: any = React.useState([]);

  // インプットフォームの状態を管理
  const onChangeTodoText = (event: any) => {
    setTodoText(event.target.value);
  };

  // 追加ボタンを押すとタスクがToDoリストに追加される
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = {
      comment: todoText,
      status: "作業中",
    };
    // DOMが更新される
    todoList.push(newTodo);
    // 入力フォーム内を""にする
    setTodoText("");
  };

  const onClickDelete = (index: number) => {
    const deletedTodoList = [...todoList];
    deletedTodoList.splice(index, 1);
    setNewTodoList(deletedTodoList);
  };

  return (
    <>
      <div className="task-area">
        <h1>ToDoリスト</h1>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>コメント</td>
              <td>状態</td>
            </tr>
          </thead>
          <tbody id="todo-body">
            {todoList.map((todo: any, index: number) => (
              <tr>
                <td>{index}</td>
                <td>{todo.comment}</td>
                <td>
                  <button>削除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>新規タスクの追加</h2>
      <div className="add-todo">
        <input value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
    </>
  );
};
