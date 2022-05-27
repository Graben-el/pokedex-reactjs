import { Circle, MiddlePart, PokeballContainer, UpperPart } from "../../../Styled-Components/layoutStyles/header/pokeball"

export const Pokeball = (props) => {
    return(
        <PokeballContainer {...props}>
            <UpperPart {...props}/>
            <MiddlePart>
                <Circle />   
            </MiddlePart>       
        </PokeballContainer>
    )
}

