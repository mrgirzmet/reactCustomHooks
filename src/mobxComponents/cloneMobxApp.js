/* eslint-disable react/no-array-index-key */
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import React, { useState } from "react";

const MobxApp = inject("ParentStore")(
  observer(({ ParentStore: { CloneTaskListStore, TaskListStore } }) => {
    console.log("Widget 2 Rendered");
    const [taskName, setTaskName] = useState("");
    return (
      <div>
        <input
          style={{ marginLeft: 10 }}
          type="text"
          name="name"
          onChange={event => setTaskName(event.target.value)}
        />
        <button
          style={{ margin: 20 }}
          onClick={() => {
            CloneTaskListStore.pushTask(taskName);
          }}
        >
          Add Task
        </button>
        <button
          style={{ margin: 20 }}
          onClick={() => {
            TaskListStore.pushTask(taskName);
          }}
        >
          Add Task To List Above
        </button>
        <ul>
          {CloneTaskListStore.taskList.map((eachTask, index) => {
            return (
              <li>
                <button
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    CloneTaskListStore.popTaskAtIndex(index);
                  }}
                >
                  Delete Task
                </button>
                {eachTask}
              </li>
            );
          })}
        </ul>
      </div>
    );
  })
);

export default MobxApp;
