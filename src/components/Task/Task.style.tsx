import styled from "styled-components";

export const TaskCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  border: 0.5px solid #c9cbd1;
  margin: 10px 0;
  padding: 15px;
`


export const TaskCardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  margin: 10px 0;
  
  &:hover {
    color: #105b72c2;
  }
`

export const TaskCardInfo = styled.div`
  margin: 3px 0;
`
