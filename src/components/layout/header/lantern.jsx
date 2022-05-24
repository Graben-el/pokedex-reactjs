import styled from "styled-components";

export const Lantern = () => {
    return(
        <Outside>
            <Inside />
        </Outside>
    )
}

const Outside = styled.div`
    background-color: red;
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

const Inside = styled.div`
     background:  #00d3d3;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 6px outset #01ffff47;
`