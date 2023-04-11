import {
    CheckboxContainer,
    CheckBoxesContainer,
    CheckboxInput,
    PriorityContainer,
    PriorityTitle
} from "./Pripority.style";
import {ChangeEventHandler, FC} from "react";
import {Priority, Tag} from "../../store/tasks/tasks-types";

type SortProps = {
    selectedTags: Tag[];
    selectedPriorities: Priority[];
    handleTagChange: ChangeEventHandler<HTMLInputElement>;
    handlePriorityChange: ChangeEventHandler<HTMLInputElement>;
}


const PrioritySort: FC<SortProps> = ({ selectedPriorities, handlePriorityChange, handleTagChange, selectedTags }) => {


    return(
        <PriorityContainer>
            <PriorityTitle>
                Приоритет
            </PriorityTitle>
            <CheckBoxesContainer>
                <CheckboxContainer>
                    <CheckboxInput value="Low" checked={selectedPriorities.includes('Low')} onChange={handlePriorityChange} />
                    Low
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckboxInput value="Normal" checked={selectedPriorities.includes('Normal')} onChange={handlePriorityChange} />
                    Normal
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckboxInput value="High" checked={selectedPriorities.includes('High')} onChange={handlePriorityChange} />
                    High
                </CheckboxContainer>
            </CheckBoxesContainer>
            <PriorityTitle>
                Отметка
            </PriorityTitle>
            <CheckBoxesContainer>
                <CheckboxContainer>
                    <CheckboxInput value="research" checked={selectedTags.includes('research')} onChange={handleTagChange} />
                    Research
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckboxInput value="design" checked={selectedTags.includes('design')} onChange={handleTagChange} />
                    Design
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckboxInput value="development" checked={selectedTags.includes('development')} onChange={handleTagChange} />
                    Development
                </CheckboxContainer>
            </CheckBoxesContainer>
        </PriorityContainer>
    )
}

export default PrioritySort;
