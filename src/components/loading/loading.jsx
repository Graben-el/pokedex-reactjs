import { Circle, LoadingPokeball, MiddlePart, UpperPart } from "../../Styled-Components/loading";

export const Loading = (props) => {
    return (
        <>
            <LoadingPokeball>
                <UpperPart />
                <MiddlePart>
                    <Circle />
                </MiddlePart>
            </LoadingPokeball>
            <h1>Carregando...</h1>
        </>
    );
}

export default Loading;