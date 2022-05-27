import styled from "styled-components"

export const Button = styled.button`
    background-color: ${props => props.theme.button.buttonShowMore.bgColor};
    cursor: pointer;
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