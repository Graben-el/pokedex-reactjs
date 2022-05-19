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

    &:hover{
        transform: scale(1.05);
    }
    
`