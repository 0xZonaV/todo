import {ActionWithPayload, createAction, withMatcher} from "../utils.reducer";
import {TASKS_ACTION_TYPES, TaskType} from "./tasks-types";


const addTaskToArray = (tasksArray: TaskType[], taskToAdd: TaskType) => [...tasksArray, taskToAdd];

const removeTask = (tasksArray: TaskType[], taskToRemove: TaskType) =>
    tasksArray.filter((task) => task.id !== taskToRemove.id);

export type SetTasks = ActionWithPayload<TASKS_ACTION_TYPES.SET_TASKS, TaskType[]>;

export const setTasksArray = withMatcher(
    (newTasksArray: TaskType[]): SetTasks => createAction(TASKS_ACTION_TYPES.SET_TASKS, newTasksArray)
);

export const addTask = (tasksArray: TaskType[], taskToAdd: TaskType) => {
    const newTasksArray = addTaskToArray(tasksArray, taskToAdd);
    return setTasksArray(newTasksArray);
};


export const deleteTask = (tasksArray: TaskType[], taskToDelete: TaskType) => {
    const newTasksArray = removeTask(tasksArray, taskToDelete);
    return setTasksArray(newTasksArray);
};
