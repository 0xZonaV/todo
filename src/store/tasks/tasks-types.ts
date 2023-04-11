export enum TASKS_ACTION_TYPES {
    SET_TASKS= 'tasks/SET_TASKS',
}

export type Tag  = 'research' | 'design' | 'development';

export type Priority = 'Low' | 'Normal' | 'High';

export type TaskType = {
    id: number;
    creationTime: string;
    title: string;
    description: string;
    priority: Priority;
    marks?: Tag[];

}
