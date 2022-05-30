import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1124px) {
        display: none;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: ${props => props.theme.button.bgColor};
        color: ${props => props.theme.button.color};
        border: 4px outset ${props => props.theme.button.border};
        box-shadow: -2px 3px 6px 3px ${props => props.theme.button.shadow};
        overflow: hidden;
        cursor: pointer;
        transition: 0.1s ease-in-out;
        font-size: 38px;

        &:active{
            transform: scale(0.8);
        }

        @media (max-width: 1500px) {
            width: 80px;
            height: 80px;
        }

        @media (max-width: 1300px) {
            width: 70px;
            height: 70px;
        }
    }
`

export const MiddleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 100%;
    margin: -5px auto;
`

export const Home = styled.button`
`

export const Github = styled.button`
`

export const Linkedin = styled.button` 
`