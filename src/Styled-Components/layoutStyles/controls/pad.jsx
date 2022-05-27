import styled from "styled-components";

export const ScrollPad = styled.div`
background-color: rgb(0, 0, 0);
border-radius: 20px;
width: 250px;
height: 250px;
border: 5px outset #313131;
box-shadow: -3px 3px 6px 2px ${props => props.theme.pokedex.pad.shadow};
margin: 10px;

@media (max-width: 1665px) {
    display: none;
}
`