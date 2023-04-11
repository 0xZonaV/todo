import {TaskType} from "../../store/tasks/tasks-types";
import {SortOptions} from "./Sort.types";

export const compareTasksByCreationDate = (a: TaskType, b: TaskType, options: SortOptions) => {
    const direction = options.direction === 'asc' ? 1 : -1;
    const dateA = new Date(a.creationTime).getTime();
    const dateB = new Date(b.creationTime).getTime();

    if (dateA < dateB) {
        return -1 * direction;
    }
    if (dateA > dateB) {
        return 1 * direction;
    }
    return 0;
}
