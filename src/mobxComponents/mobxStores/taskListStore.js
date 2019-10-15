/* eslint-disable no-underscore-dangle */
import { observable, action } from "mobx";

class TaskListStore {
  @observable taskList = [];

  get taskList() {
    return this.taskList;
  }

  /**
   * @param {any[]} taskList
   */
  // eslint-disable-next-line no-dupe-class-members
  @action setTaskList(valTaskList) {
    this.taskList = valTaskList;
  }

  /**
   * @param {any string} task
   */
  @action pushTask(task) {
    this.taskList.push(task);
  }

  @action popTaskAtIndex(index) {
    this.taskList.splice(index, 1);
  }
}

export default new TaskListStore();
