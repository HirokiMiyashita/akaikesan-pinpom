import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [todoText, setTodoText] = useState(""); // 入力されたTodoの文字列
  const [todoList, setNewTodoList]: any = useState([]);
  const [todoId, setTodoId] = useState(0);

  useEffect(() => {
    // localStorageに保存されたTodoを取得
    const todoList = localStorage.getItem("todoList");
    if (todoList) {
      setNewTodoList(JSON.parse(todoList));
    }
  }, []);

  const todoItdadd = () => {
    // Todoを追加
    setTodoId(todoId + 1);
  };

  // インプットフォームの状態を管理
  const onChangeTodoText = (event: any) => {
    setTodoText(event.target.value);
  };

  // 追加ボタンを押すとタスクがToDoリストに追加される
  const onClickAdd = () => {
    if (todoText === "") return;
    // DOMが更新される
    if (todoId !== 0) {
      todoItdadd();
    }
    let tododata = {
      id: todoId,
      text: todoText,
    };
    todoList.push(todoText);
    let json = JSON.stringify(todoList);
    localStorage.setItem("todoList", json);
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
              <tr key={index}>
                <td>{index}</td>
                <td>{todo}</td>
                <td>
                  <td>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </td>
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
