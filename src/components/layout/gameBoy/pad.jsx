import styled from "styled-components";

export const Pad = () => {
    return(
        <ScrollPad />
    )
}

const ScrollPad = styled.div`
    background-color: rgb(0, 0, 0);
    border-radius: 20px;
    width: 250px;
    height: 250px;
    border: 5px outset rgb(85, 85, 85);
    box-shadow: -2px 3px 7px 2px;
    margin: 10px;

    @media (max-width: 1665px) {
        display: none;
    }
`