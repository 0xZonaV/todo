import styled from "styled-components";

export const PriorityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: left;
  background-color: white;
  border: 0.5px solid #c9cbd1;
  margin: 0 20px;
  padding: 15px;
`

export const PriorityTitle = styled.div`
  color: gray;
  font-size: 20px;
`
export const CheckBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #bbb;
  border-radius: 3px;
  outline: none;
  margin-right: 8px;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background-color: transparent;
    border: 2px solid #3bd17c;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:checked:before {
    opacity: 1;
    background-color: #3bd17c;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`
