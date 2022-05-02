import React from "react";

export const ButtonShowMore = props => {
    return (
        <button onClick={() => props.handleOffset()}>Show More</button>
    )
}