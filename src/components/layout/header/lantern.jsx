import { Inside, Outside } from "../../../Styled-Components/layoutStyles/header/lantern";
import { ThemeTogglerButton } from "../../theme-toggler-button/theme-toggler-button";

export const Lantern = (props) => {
    return(
        <Outside {...props}>
            <Inside {...props}>
                <ThemeTogglerButton className='button'/>
            </Inside>
        </Outside>
    )
}