export enum TASKS_ACTION_TYPES {
    SET_TASKS= 'tasks/SET_TASKS',
}

type TaskMarks = ('research' | 'design' | 'development')[];

export type TaskType = {
    id: number;
    creationTime: string;
    title: string;
    description: string;
    priority: 'Low' | 'Normal' | 'High';
    marks?: TaskMarks;

}
