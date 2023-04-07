import {createSelector} from "reselect";
import {RootState} from "../store";
import {TasksState} from "./tasks-reducer";

const selectTaskReducer = (state: RootState): TasksState => state.tasks;

export const selectTasks = createSelector(
    [selectTaskReducer],
    (task: TasksState) => task.tasksArray
);
