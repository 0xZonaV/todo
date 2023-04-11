import styled, { css } from 'styled-components';


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const SortsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-top: 200px;
`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 70%;
  margin-top: 200px;
`



/* Стили для компонента сортировки */
export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SortButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

/* Стили для компонента приоритета */
export const PriorityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  
`;

export const PriorityLabel = styled.span`
  margin-right: 0.5rem;
`;

export const PrioritySelect = styled.select`
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
`;

/* Стили для компонента кнопки добавления задачи */
export const AddButton = styled.button`
  border: none;
  background-color: #4caf50;
  color: #fff;
  font-size: 1.2rem;
  width: 200px;
  border-radius: 0.3rem;
  cursor: pointer;
  padding: 15px;

  ${(props) => css`
    @media (max-width: 600px) {
      bottom: 1rem;
      right: 1rem;
      font-size: 1rem;
      padding: 0.4rem;
    }
  `}
`;

/* Стили для компонента с задачами */
export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TaskCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

export const TaskText = styled.span`
  font-size: 1.2rem;
`;

/* Стили для компонента загрузки задач */
export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin-top: 2rem;
`;

export const LoadingText = styled.span`
  margin-left: 1rem;
`;
