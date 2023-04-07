import {FC} from "react";
import {TaskType} from "../../store/tasks/tasks-types";
import {TaskContainer} from "./Task.style";

const TaskComponent: FC<TaskType> = ({title, creationTime, id, priority, marks, description}) => {
    return(
        <TaskContainer>
            <div>{title}</div>
            <div>
                Создано: {creationTime}
            </div>
            <div>
                Приоритет: {priority}
            </div>
            <div>
                Отметки: {marks?.map(mark => `${mark} `)}
            </div>
        </TaskContainer>
    )
}

export default TaskComponent
