import {FC} from "react";
import {TaskType} from "../../store/tasks/tasks-types";
import {TaskCardContainer, TaskCardInfo, TaskCardTitle} from "./Task.style";
import moment from 'moment';
import 'moment/locale/ru';
const TaskCardComponent: FC<TaskType> = ({title, creationTime, id, priority, marks, description}) => {
    moment.locale('ru');
    const createdAt = moment(creationTime).fromNow();

    return(
        <TaskCardContainer>
            <TaskCardTitle>{title}</TaskCardTitle>
            <TaskCardInfo>
                Создано: {createdAt}
            </TaskCardInfo>
            <TaskCardInfo>
                Приоритет: {priority}
            </TaskCardInfo>
            <TaskCardInfo>
                Отметки: {marks?.map(mark => `${mark} `)}
            </TaskCardInfo>
        </TaskCardContainer>
    )
}

export default TaskCardComponent
