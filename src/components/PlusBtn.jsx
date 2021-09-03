import Button from "./Button";

import { useEquation } from "../provider/AppProvider";
import { ADD_TO_EQUATION } from "../reducer/reducerActions";

import validateMathCharacter from "../vallidate/validateMathCharacters";
const PlusBtn = () =>{
    const [{equation},dispatch] = useEquation()
    const SIGN = "+";

    const handleClick = () =>{
        if( !validateMathCharacter(equation) ) return alert('NIE WOLNO!')

        dispatch({
            type: ADD_TO_EQUATION,
            payload: SIGN,
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

export default PlusBtn