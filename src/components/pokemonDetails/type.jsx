import React from 'react';
import styled from 'styled-components';

export const Type = ({props) => {
    return (
        {
            props.pokemon.types.map((element, index) => {
                return (<TypeContainer key={index}>{element.type.name}</TypeContainer>)
            })
        }
    )
}

const TypeContainer = styled.div`
    display: flex;
    justify-content: center;
    p {
        margin: 3px;
        width: 20%;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 18px;
    }
`