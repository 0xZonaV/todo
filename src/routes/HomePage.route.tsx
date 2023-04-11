import TaskCardComponent from "../components/Task/Task.component";
import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "../store/tasks/tasks-selector";
import {ChangeEvent, useEffect, useState} from "react";
import {setTasksArray} from "../store/tasks/tasks-action";
import {TASKS_INITIAL_CONST_STATE} from "../consts";
import {
    AddButton, MainWrapper,
    PageWrapper,
    PriorityLabel,
    PriorityWrapper,
    SortsWrapper,
    SortWrapper,
    TasksWrapper
} from "./index.styles";
import SortComponent from "../components/Sort/Sort.component";
import {SortDirection} from "../components/Sort/Sort.types";
import {compareTasksByCreationDate} from "../components/Sort/Sort.functions";




const HomePage = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

    const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
        const direction = event.target.value as SortDirection;
        setSortDirection(direction);
    }

    useEffect(() => {
        dispatch(setTasksArray(TASKS_INITIAL_CONST_STATE))
    }, [dispatch]);

    const renderTasks = tasks.sort((a, b) =>
        compareTasksByCreationDate(a, b, { direction: sortDirection })
    ).map(task => {
        const {id, priority, description, title, creationTime, marks} = task;

        return (
            <TaskCardComponent
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
        <PageWrapper>
            <SortsWrapper>
                <SortComponent
                    sortDirection={sortDirection}
                    handleSortChange={handleSortChange}
                />
                <PriorityWrapper>
                    <PriorityLabel>PRipritrtrwa</PriorityLabel>
                </PriorityWrapper>
            </SortsWrapper>
            <MainWrapper>
                <AddButton>
                    Добавить задачу
                </AddButton>
                <TasksWrapper>
                    {renderTasks}
                </TasksWrapper>
            </MainWrapper>


        </PageWrapper>
    )
}

export default HomePage
