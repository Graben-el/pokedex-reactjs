import styled from "styled-components";

export const Pad = () => {
    return(
        <ScrollPad />
    )
}

const ScrollPad = styled.div`
    background-color: rgb(0, 0, 0);
    border-radius: 20px;
    width: 200px;
    height: 200px;
    border: 5px outset rgb(85, 85, 85);
`