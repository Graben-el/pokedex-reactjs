import React from 'react';
import styled from "styled-components";

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

const LoadingPokeball = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(232, 232, 232);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 4px solid rgb(0, 0, 0);
    margin-bottom: 15px;
    animation: Pokeball-Spin infinite 2s linear;

    @keyframes Pokeball-Spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`
const UpperPart = styled.div`
    align-self: flex-start;
    height: 50%;
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: red;
    box-shadow: -5px 5px 10px 5px inset rgb(246, 99, 99);
`

const MiddlePart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 5px;
    width: 100%;
    margin-top: -3px;
    background-color: black;
`

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50px;
    border: 4px solid black;
`

export default Loading;