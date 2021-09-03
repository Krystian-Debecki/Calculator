import Button from "./Button";

import { useEquation } from "../provider/AppProvider";
import { ADD_TO_EQUATION } from "../reducer/reducerActions";

import validateFraction from "../vallidate/validateFraction";

const FractionButton = () => {
    const [{equation}, dispatch] = useEquation();
    const SIGN = '.'

    const handleClick = () => {
        if( !validateFraction(equation) ) return;
        
        dispatch({
            type: ADD_TO_EQUATION,
            payload: SIGN,
        })
    }
    return (
        <Button
            sign={SIGN}
            click={handleClick}
            additionalClass="char-btn"
        />
    )
}

export default FractionButton