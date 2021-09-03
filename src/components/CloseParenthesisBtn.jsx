import Button from "./Button";

import { useEquation } from "../provider/AppProvider";
import { ADD_TO_EQUATION } from "../reducer/reducerActions";
import { validateClosingParenthesis } from "../vallidate/validateParenthesis";

const CloseParenthesisBtn = () =>{
    const [{equation,missingParenthesis},dispatch] = useEquation();
    const SIGN = ')';

    const handleClick = () =>{
        if(!validateClosingParenthesis(equation,missingParenthesis)) return;

        dispatch({
            type: ADD_TO_EQUATION,
            payload: SIGN
        })
    }

    return (
        <Button 
            click={handleClick}
            sign={SIGN}
            additionalClass="char-btn"
        />
    )
}

export default CloseParenthesisBtn