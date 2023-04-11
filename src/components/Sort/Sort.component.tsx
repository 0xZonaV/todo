import {RadioButton, RadioContainer, RadioLabel, SortContainer, SortTitle} from "./Sort.style";
import {ChangeEventHandler, FC} from "react";
import {SortDirection} from "./Sort.types";
type SortProps = {
    sortDirection: SortDirection;
    handleSortChange: ChangeEventHandler<HTMLInputElement>;
}

const SortComponent: FC<SortProps> = ({sortDirection, handleSortChange}) => {

    return(
        <SortContainer>
            <SortTitle >
                Сортировка
            </SortTitle>
            <RadioContainer>
                <RadioLabel>
                    <RadioButton
                        name="sort"
                        value="desc"
                        checked={sortDirection === 'desc'}
                        onChange={handleSortChange}
                    />
                    Новые
                </RadioLabel>
                <RadioLabel>
                    <RadioButton
                        name="sort"
                        value="asc"
                        checked={sortDirection === 'asc'}
                        onChange={handleSortChange}
                    />
                    Старые
                </RadioLabel>
            </RadioContainer>
        </SortContainer>
    )
}

export default SortComponent;
