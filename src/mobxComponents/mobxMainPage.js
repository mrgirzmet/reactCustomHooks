import promiseFinally from "promise.prototype.finally";
import React from "react";
import { configure } from "mobx";
import { Provider } from "mobx-react";

import MobxApp from "./mobxApp";
import CloneMobxApp from "./cloneMobxApp.js";

// import TaskListStore from "./mobxStores/taskListStore.js";
// import CloneTaskListStore from "./mobxStores/cloneTaskListStore.js";
import parentStore from "./mobxStores/parentStore";

// const stores = {
//   TaskListStore,
//   CloneTaskListStore
// };

const globalStore = parentStore;

configure({ enforceActions: "observed" });
// For easier debugging
// eslint-disable-next-line no-underscore-dangle
window._____APP_STATE_____ = globalStore;

promiseFinally.shim();
// eslint-disable-next-line react-hooks/rules-of-hooks

const MobxMainPage = () => {
  return (
    // <Provider {...stores}>
    <Provider
      TaskListStore={globalStore.taskListStore}
      CloneTaskListStore={globalStore.cloneTaskListStore}
      ParentStore={globalStore}
    >
      <MobxApp />
      <CloneMobxApp />
    </Provider>
  );
};

export default MobxMainPage;
