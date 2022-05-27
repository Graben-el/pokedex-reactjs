import styled from 'styled-components'

export const ControlsContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 80%;
    padding: 10px;
    border-radius: 10px;

    @media (max-width: 664px) {
        height: 90%;
        width: 100%;
        padding: 5px 0;
        align-items: start;
    }
`