import styled from "styled-components";

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  border: 0.5px solid #c9cbd1;
  margin: 0 20px;
  padding: 15px;
`

export const SortTitle = styled.div`
  color: gray;
  font-size: 20px;
`

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  outline: none;
  margin-right: 0.5rem;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:checked::before {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #4caf50;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    cursor: pointer;
    border-color: #4caf50;
  }

  &:focus {
    box-shadow: 0 0 0 2px #4caf50;
  }
`;

export const RadioLabel = styled.label`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const RadioContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`
