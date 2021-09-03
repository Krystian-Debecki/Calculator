import Button from "./Button";

import { REMOVE_EQUATION } from "../reducer/reducerActions";
import { useEquation } from "../provider/AppProvider";

const RemoveAllBtn = () => {
    const [state,dispatch] = useEquation();

    const handleClick = () => {
        dispatch({
            type: REMOVE_EQUATION
        })
    }

    return (
        <Button
            sign="Rem"
            click={handleClick}
            additionalClass="remove-btn"
        />
    )
}

export default RemoveAllBtn
