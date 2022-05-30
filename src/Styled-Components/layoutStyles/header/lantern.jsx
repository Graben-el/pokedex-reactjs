import styled from "styled-components";

export const Outside = styled.div`
    background-color: ${props => props.theme.pokedex.lantern.outsideBorder};
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 6px double black;
    box-shadow: -2px 3px 6px 4px rgb(0 0 0 / 55%);

    @media (max-width: 664px) {
        height: 50px;
        width: 50px;
        margin-top: 15px;
    }
`

export const Inside = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  ${props => props.theme.pokedex.lantern.bgColor};
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 6px outset ${props => props.theme.pokedex.lantern.insideBorder};
    overflow: hidden;

    .button{
        display: none;
        width: 110%;
        height: 110%;
        background-color: transparent;
        border: none;

        @media (max-width: 1124px) {
            display: block;
            font-size: 120%;
            color: #007e7eb7;

            &:active {
                transform: scale(0.9);
            }
        }
    }
`