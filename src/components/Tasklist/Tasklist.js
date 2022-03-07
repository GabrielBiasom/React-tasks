import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import plusIcon from "../../img/plus-icon.svg";
import TaskItem from "../Taskitem/TaskItem.js";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("New task", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {/* if diferente */}
        {tasks.length === 0 && <div className="empty-list">Empty list</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Add task
        </button>
      </div>
    </div>
  );
}
/////////////////ADICIONAR NUMERO//////////////////////////////
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((currentCount) => {
//       return currentCount + 1;
//     });
//   };

//   return (
//     <div className="tasklist">
//       <div className="title">{title}</div>
//       <div className="content">
//         {count}
//         <button onClick={increment}>incrementar</button>
//       </div>
//     </div>
//   );
// }
////////////////////////////////////////////
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};
