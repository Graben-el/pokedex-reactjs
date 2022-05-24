import React from "react";
import styled from "styled-components";

export const ButtonShowMore = props => {
    return (
        <Button onClick={() => props.handleOffset()}>Show More</Button>
    )
}

const Button = styled.button`
    background-color: red;
    /* border: 2px double blue; */
    padding: 10px;
    color: white;
    border-radius: 10px;
    font-weight: bolder;
    transition: 0.2s ease-in-out;
    margin-bottom: 15px;

    &:hover{
        transform: scale(1.05);
    }
    
    @media (max-width: 664px) {
        padding: 5px;
        margin-bottom: 0;
        font-size: 11px;
    }
`