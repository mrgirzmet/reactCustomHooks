import { observable } from "mobx";
import taskListStore from "./taskListStore";
import cloneTaskListStore from "./cloneTaskListStore";

class ParentStore {
  @observable TaskListStore = taskListStore;

  @observable CloneTaskListStore = cloneTaskListStore;
}

export default new ParentStore();
