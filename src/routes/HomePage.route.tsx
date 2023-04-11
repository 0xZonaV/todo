import TaskCardComponent from "../components/Task/Task.component";
import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "../store/tasks/tasks-selector";
import {ChangeEvent, useEffect, useState} from "react";
import {setTasksArray} from "../store/tasks/tasks-action";
import {TASKS_INITIAL_CONST_STATE} from "../consts";
import {
    AddButton, MainWrapper,
    PageWrapper,
    PriorityWrapper,
    SortsWrapper,
    TasksWrapper
} from "./index.styles";
import SortComponent from "../components/Sort/Sort.component";
import {SortDirection} from "../components/Sort/Sort.types";
import {compareTasksByCreationDate} from "../components/Sort/Sort.functions";
import PrioritySort from "../components/PrioritySort/Priority.component";
import {Priority, Tag} from "../store/tasks/tasks-types";
import {Link} from "react-router-dom";




const HomePage = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [selectedPriorities, setSelectedPriorities] = useState<Priority[]>([]);

    const handleTagChange = (event: ChangeEvent<HTMLInputElement>) => {
        const tag = event.target.value as unknown as Tag;
        if (event.target.checked) {
            setSelectedTags([...selectedTags, tag]);
        } else {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        }
    };

    const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const priority = event.target.value as Priority;
        if (event.target.checked) {
            setSelectedPriorities([...selectedPriorities, priority]);
        } else {
            setSelectedPriorities(selectedPriorities.filter(p => p !== priority));
        }
    };

    const filteredTasks = tasks.filter(task => {
        if (selectedTags.length === 0) {
            return true; // показываем все задачи, если ни один чекбокс не выбран
        } else {
            return selectedTags.some(tag => task.marks?.includes(tag)); // показываем только задачи с выбранными отметками
        }
    }).filter(task => {
        if (selectedPriorities.length === 0) {
            return true; // показываем все задачи, если ни один чекбокс не выбран
        } else {
            return selectedPriorities.includes(task.priority); // показываем только задачи с выбранными приоритетами
        }
    });

    const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
        const direction = event.target.value as SortDirection;
        setSortDirection(direction);
    }

    useEffect(() => {
        dispatch(setTasksArray(TASKS_INITIAL_CONST_STATE))
    }, [dispatch]);

    const renderTasks = filteredTasks.sort((a, b) =>
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
                    <PrioritySort
                        selectedPriorities={selectedPriorities}
                        selectedTags={selectedTags}
                        handlePriorityChange={handlePriorityChange}
                        handleTagChange={handleTagChange}
                    />
                </PriorityWrapper>
            </SortsWrapper>
            <MainWrapper>
                <Link to={'/task/add'} >
                    <AddButton>
                        Добавить задачу
                    </AddButton>
                </Link>
                <TasksWrapper>
                    {renderTasks}
                </TasksWrapper>
            </MainWrapper>


        </PageWrapper>
    )
}

export default HomePage
