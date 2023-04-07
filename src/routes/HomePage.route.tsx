import TaskComponent from "../components/Task/Task.component";
import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "../store/tasks/tasks-selector";
import {useEffect} from "react";
import {setTasksArray} from "../store/tasks/tasks-action";
import {TASKS_INITIAL_CONST_STATE} from "../consts";
const HomePage = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        dispatch(setTasksArray(TASKS_INITIAL_CONST_STATE))
    }, [dispatch]);

    const renderTasks = tasks.map(task => {
        const {id, priority, description, title, creationTime, marks} = task;

        return (
            <TaskComponent
                id={id}
                key={id}
                creationTime={creationTime}
                title={title}
                description={description}
                priority={priority}
                marks={marks}
            />
        )
    })

    return(
        <>
            {renderTasks}
        </>
    )
}

export default HomePage
