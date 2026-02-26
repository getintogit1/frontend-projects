import React, { useState } from "react";

function ToDoList(params) {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask(params) {
    if (task.trim() !== "") {
      setTaskList((t) => [...t, task]);
      setTask("");
      console.log(taskList);
    }
  }

  function deleteTask(index) {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  }

  function moveUp(index) {
    const updatedTasks = [...taskList];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTaskList(updatedTasks);
  }

  function moveDown(index) {
    const updatedTasks = [...taskList];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTaskList(updatedTasks);
  }

  function handleInputChange(event) {
    setTask(event.target.value);
  }

  return (
    <div className="card">
      <div className="container ">
        <div className="flex items-center ">
          <input
            className="m-2 pt-2 pb-4 border border-green-75 rounded-md overflow-hidden w-full"
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Type in new task"
          />
          <button className="primary-btn p-2" onClick={addTask}>
            Add Task
          </button>
        </div>
        <ol>
          {taskList.map((task, index) => (
            <li
              className="flex flex-col  py-2 border-b border-gray-200"
              key={index}
            >
              <div className="bg-white-95 rounded-md">
                <span className="m-2 text-lg font-semibold">{task}</span>
                <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-1 sm:grid-cols-1">
                  <button
                    className="third-btn bg-red-500"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  <button className="third-btn" onClick={() => moveUp(index)}>
                    Move Up
                  </button>
                  <button className="third-btn" onClick={() => moveDown(index)}>
                    Move Down
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
