import Button from "./Button";

import { useEquation } from "../provider/AppProvider";
import { ADD_TO_EQUATION } from "../reducer/reducerActions";
import { validateOpenParenthesis } from "../vallidate/validateParenthesis";
const OpenParenthesisBtn = () => {
    const [{equation},dispatch] = useEquation()
    const SIGN = '(';

    const handleClick = () => {
        if(!validateOpenParenthesis(equation)) 
            return;

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

export default OpenParenthesisBtn