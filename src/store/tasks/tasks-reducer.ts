import {AnyAction} from "redux";
import {TaskType} from "./tasks-types";
import {setTasksArray} from "./tasks-action";

export type TasksState = {
    readonly tasksArray: TaskType[];
}

export const TASKS_INITIAL_STATE: TasksState = {
    tasksArray: [],
};

export const taskReducer = (state = TASKS_INITIAL_STATE, action = {} as AnyAction): TasksState => {

    if (setTasksArray.match(action)) {
        return {...state, tasksArray: action.payload};
    }

    return state;
}
